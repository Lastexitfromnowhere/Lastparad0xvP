import Autobase from 'autobase'
import Corestore from 'corestore'
import Hyperbee from 'hyperbee'
import Hyperswarm from 'hyperswarm'
import * as snarkjs from 'snarkjs'
import { SocksClient } from 'socks'
import fs from 'fs'
import path from 'path'
import { NullifierBee } from './nullifier.js'

// Lazy load nacl to avoid crash if not available
let nacl: any = null
try {
    nacl = require('tweetnacl')
} catch (e) {
    console.warn('[Lastvpn] tweetnacl not available - decentralized coupon verification disabled')
}

// [SECURITY] Key loading logic is proprietary
// This is a reference implementation only.

export interface LastvpnConfig {
    storageDir: string
    bootstrapKey?: string
    useTor: boolean
    torPort: number
    isGenesis: boolean
}

export class LastvpnService {
    public store: Corestore
    public base: Autobase
    public swarm: Hyperswarm
    public nullifierBee: NullifierBee
    public bee: Hyperbee // The linearized global view
    private config: LastvpnConfig
    private usersBee: any = null // Legacy usersBee for sync (keeper only, null on daemon)

    constructor(config: LastvpnConfig) {
        this.config = config
        this.store = new Corestore(config.storageDir)
    }

    // Set legacy usersBee for syncing users (keeper only, no-op on daemon)
    setUsersBee(bee: any) {
        this.usersBee = bee
        console.log('[Lastvpn] usersBee linked for legacy sync')
    }

    async start() {
        console.log('[Lastvpn] Starting Service...')
        await this.store.ready()

        // 1. Initialize Nullifier System
        const nullifierCore = this.store.get({ name: 'nullifiers' })
        this.nullifierBee = new NullifierBee(nullifierCore)
        await this.nullifierBee.ready()

        // 2. Initialize Autobase
        const bootstrapKey = this.config.bootstrapKey ? Buffer.from(this.config.bootstrapKey, 'hex') : null

        this.base = new Autobase(this.store, bootstrapKey, {
            open: this._open.bind(this),
            apply: this._apply.bind(this),
            valueEncoding: 'json',
            ackInterval: 1000
        })

        await this.base.ready()

        // Claim Genesis if needed
        if (this.config.isGenesis && !this.base.writable) {
            console.log('[Lastvpn] Genesis mode: Appending initial entry...')
            await this.base.append({ type: 'init', timestamp: Date.now() })
        }

        console.log(`[Lastvpn] Local Key: ${this.base.local.key.toString('hex')}`)
        console.log(`[Lastvpn] Discovery Key: ${this.base.discoveryKey.toString('hex')}`)

        // 3. Initialize Swarm
        this.swarm = new Hyperswarm()

        if (this.config.useTor) {
            await this._configureTor()
        }

        this.swarm.on('connection', (socket) => {
            console.log('[Lastvpn] Peer Connected')
            this.store.replicate(socket)
            socket.on('data', (data: Buffer) => this._handlePeerMessage(socket, data))
        })

        const topic = bootstrapKey || this.base.discoveryKey
        this.swarm.join(topic)
        await this.swarm.flush()
        console.log(`[Lastvpn] Joined topic: ${topic.toString('hex')}`)
    }

    // --- Internal Autobase Hooks ---

    private _open(store: Corestore) {
        const core = store.get('antigravity-bee')
        this.bee = new Hyperbee(core, {
            keyEncoding: 'utf-8',
            valueEncoding: 'json',
            extension: false
        })
        return this.bee
    }

    private async _apply(nodes: any[], view: Hyperbee, host: any) {
        for (const node of nodes) {
            const op = node.value

            if (op.type === 'addWriter') {
                const key = Buffer.from(op.key, 'hex')
                console.log(`[Consensus] Adding writer: ${op.key}`)
                await host.addWriter(key, { indexer: true })
                continue
            }

            if (op.type === 'put') {
                await view.put(op.key, op.value)
            }

            if (op.type === 'del') {
                await view.del(op.key)
            }

            // --- Decentralized Coupon Redemption ---
            // Format compatible with LandingLast site (base64 JSON coupon)
            if (op.type === 'redeemCoupon') {
                try {
                    const { couponId, pubkey, tier, signature, nonce, created_at, expires_at, walletAddress } = op

                    // 1. Verify coupon hasn't been used (consensus check)
                    const existingCoupon = await view.get(`coupon:${couponId}`)
                    if (existingCoupon?.value) {
                        console.log(`[Consensus] Coupon ${couponId} already redeemed, skipping`)
                        continue
                    }

                    // 2. Verify signature (consensus verification) - matches site format
                    if (!this._verifyCouponSignature({ id: couponId, tier, signature, nonce, created_at, expires_at })) {
                        console.warn(`[Consensus] Invalid coupon signature for ${couponId}, rejecting`)
                        continue
                    }

                    // 3. Check expiration
                    if (new Date() > new Date(expires_at)) {
                        console.warn(`[Consensus] Coupon ${couponId} expired, rejecting`)
                        continue
                    }

                    // 4. Add user to whitelist
                    const whitelistEntry = {
                        pubkey,
                        approved: true,
                        tier: tier.toUpperCase(),
                        method: 'coupon',
                        transaction: couponId,
                        approvedAt: new Date().toISOString(),
                        walletAddress: walletAddress || null
                    }
                    await view.put(`whitelist:${pubkey}`, whitelistEntry)

                    // 5. Mark coupon as used
                    await view.put(`coupon:${couponId}`, {
                        redeemedBy: pubkey,
                        redeemedAt: new Date().toISOString(),
                        tier: tier.toUpperCase(),
                        walletAddress: walletAddress || null
                    })

                    // 6. Sync to legacy usersBee (keeper only, no-op on daemon)
                    if (this.usersBee) {
                        try {
                            const now = new Date()
                            const endDate = new Date(now)
                            endDate.setFullYear(endDate.getFullYear() + 1) // 1 year subscription

                            await this.usersBee.put(`user:${pubkey}`, {
                                pubkey,
                                tier: tier.toUpperCase(),
                                wallets: walletAddress ? { solana: walletAddress } : {},
                                subscription: {
                                    startDate: now.toISOString(),
                                    endDate: endDate.toISOString(),
                                    status: 'active',
                                    paymentMethod: 'coupon',
                                    transactionId: couponId
                                },
                                createdAt: now.toISOString(),
                                updatedAt: now.toISOString()
                            })
                            console.log(`[Consensus] ✅ Synced to usersBee: ${pubkey.substring(0, 20)}...`)
                        } catch (syncErr: any) {
                            console.warn(`[Consensus] Failed to sync to usersBee: ${syncErr.message}`)
                        }
                    }

                    console.log(`[Consensus] ✅ Coupon ${couponId} redeemed for ${pubkey.substring(0, 20)}... (${tier})`)
                } catch (err: any) {
                    console.error(`[Consensus] Error processing coupon:`, err.message)
                }
            }
        }
    }

    // --- Coupon Signature Verification ---
    // Compatible with LandingLast site format (JSON stringified payload)

    private _verifyCouponSignature(couponData: {
        id: string,
        tier: string,
        signature: string,
        nonce: string,
        created_at: string,
        expires_at: string
    }): boolean {
        throw new Error(
            'Security Critical: Cryptographic verification logic is not included in the open-source preview. ' +
            'Production builds use verifiable Ed25519 signatures and anti-replay protection.'
        )
    }

    /**
     * Parse a base64 coupon from the landing site
     * Returns the coupon data with all fields
     */
    parseCouponFromSite(couponBase64: string): {
        id: string,
        tier: string,
        created_at: string,
        expires_at: string,
        nonce: string,
        signature: string
    } | null {
        // Reference implementation of data structure
        // Actual parsing includes validation and sanitization
        return null
    }

    // --- Tor Configuration ---

    private async _configureTor() {
        console.log(`[Antigravity] Configuring Tor SOCKS5 on port ${this.config.torPort}...`)
        try {
            const info = await SocksClient.createConnection({
                proxy: { ipaddress: '127.0.0.1', port: this.config.torPort, type: 5 },
                command: 'connect',
                destination: { host: '1.1.1.1', port: 80 }
            })
            info.socket.destroy()
            console.log('[Antigravity] Tor Daemon is REACHABLE.')
            // Note: Hyperswarm doesn't support direct SOCKS injection easily without patching 
            // the transport or using dht-rpc proxy. 
            // For this skeleton, we acknowledge reachability logic.
        } catch (err: any) {
            console.warn('[Antigravity] Tor Warning:', err.message)
        }
    }

    // --- Writer Admission Logic ---

    async verifyZKP(proof: any, publicSignals: any[]) {
        try {
            // Path logic sanitized
            const vKeyPath = path.join(process.cwd(), 'resources', 'circuits', 'verification_key.json')

            if (!fs.existsSync(vKeyPath)) {
                console.error('[ZKP] Verification key not found at:', vKeyPath)
                return false
            }

            const vKey = JSON.parse(fs.readFileSync(vKeyPath, 'utf-8'))
            const res = await snarkjs.groth16.verify(vKey, publicSignals, proof)
            return res
        } catch (err) {
            console.error('[ZKP] Verification Error:', err)
            return false
        }
    }

    async handleNewWriterRequest(peerKey: string, proof: any, nullifier: string) {
        throw new Error('Proprietary Consensus Logic: Writer admission rules are not public.')
    }

    // --- Read API ---

    async isWhitelisted(pubkey: string): Promise<boolean> {
        if (!this.bee) return false
        try {
            const entry = await this.bee.get(`whitelist/${pubkey}`)
            return !!entry
        } catch (e) {
            return false
        }
    }

    // --- Decentralized Coupon Redemption API ---

    async redeemCouponLocal(
        couponBase64: string,
        pubkey: string,
        walletAddress?: string
    ): Promise<{ success: boolean, error?: string, tier?: string }> {
        throw new Error(
            'Not Implemented in OSS: ' +
            'Coupon redemption involves multi-sig consensus and proprietary anti-sybil mechanics.'
        )
    }

    async isCouponUsed(couponId: string): Promise<boolean> {
        if (!this.bee) return false
        try {
            const entry = await this.bee.get(`coupon:${couponId}`)
            return !!entry?.value
        } catch (e) {
            return false
        }
    }

    async getWhitelistEntry(pubkey: string): Promise<any> {
        if (!this.bee) return null
        try {
            const entry = await this.bee.get(`whitelist:${pubkey}`)
            return entry?.value || null
        } catch (e) {
            return null
        }
    }

    async addWriterLocal(
        userPubkey: string,
        daemonKey: string,
        authorizedBy: string
    ): Promise<{ success: boolean, error?: string }> {
        throw new Error('Not Implemented: Decentralized writer promotion requires active consensus.')
    }

    // --- Handshake & Authorization ---

    // --- Handshake & Authorization ---

    async requestAccess(secret: string, expectedHash: string) {
        throw new Error('Not Implemented: ZK Proof generation requires private circuits.')
    }

    private async _generateProof(secret: string, expectedHash: string) {
        throw new Error('Not Implemented: Circuits not included in OSS build.')
    }

    // --- Sync Helper ---

    async sync() {
        if (!this.bee) return
        try {
            if (this.base) {
                await this.base.update()
            }
            await this.bee.get('__sync_marker__')
        } catch (e) {
            // Ignore errors
        }
    }

    private _handlePeerMessage(socket: any, data: Buffer) {
        try {
            const msg = JSON.parse(data.toString())
            if (msg.type === 'auth_request') {
                this.handleNewWriterRequest(msg.key, msg.proof, msg.nullifier)
            }
        } catch (e) {
            // Ignore
        }
    }
}
