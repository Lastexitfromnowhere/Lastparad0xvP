<p align="center">
  <img src="https://lastparadox.xyz/assets/banner5.png" alt="LastParadox Banner" width="100%"/>
</p>

<h1 align="center">🛡️ LastParadox</h1>
<h2 align="center">Technical Design Document — Living Whitepaper</h2>

<p align="center">
  <strong>A Privacy-First, Tor-Based Decentralized VPN with Ed25519 Signed Ticket Authentication</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Technical%20Draft-7D4698?style=for-the-badge" alt="Status"/>
  <img src="https://img.shields.io/badge/Version-3.0--draft-blue?style=for-the-badge" alt="Version"/>
  <img src="https://img.shields.io/badge/Updated-February%202026-green?style=for-the-badge" alt="Updated"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Tor-Integrated-7D4698?style=flat-square&logo=torproject&logoColor=white" alt="Tor"/>
  <img src="https://img.shields.io/badge/Hypercore-P2P-FF6B6B?style=flat-square" alt="Hypercore"/>
  <img src="https://img.shields.io/badge/Ed25519-Signed%20Tickets-00D4AA?style=flat-square" alt="Ed25519"/>
  <img src="https://img.shields.io/badge/Flutter-Desktop-02569B?style=flat-square&logo=flutter&logoColor=white" alt="Flutter"/>
  <img src="https://img.shields.io/badge/Node.js-Daemon-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js"/>
</p>

---

  <em>🔐 Ed25519 signed ticket authentication runs locally — no server needed</em><br/>
  <em>💎 Premium Feature: Full-kernel TUN mode for system-wide traffic routing</em>
</p>

---

## ⚠️ Important Notice

<table>
<tr>
<td>

> **This document is a technical design draft describing the current architectural intentions of the LastParadox project.**
>
> - Specifications are subject to change as the system evolves
> - Some sections describe research directions rather than finalized implementations
> - No guarantees of absolute security, anonymity, or performance are made
> - This is not a contractual commitment or investment prospectus
>
> **Users are responsible for evaluating whether this software meets their security requirements.**

</td>
</tr>
</table>

---

## 📋 Methodology

This document was collaboratively written by the core development team.

| AI-Assisted | Team-Originated |
|-------------|-----------------|
| Language clarity | Technical decisions |
| Structure refinement | Architecture choices |
| Documentation formatting | Implementation details |

**All technical decisions and implementation details originate from the team's direct work on the codebase.**

---

## 📖 Table of Contents

<table>
<tr>
<td width="50%">

### Part I: Vision & Mission
- [1. Introduction](#1-introduction)
- [2. Problem Statement](#2-problem-statement)
- [3. The Solution](#3-the-solution-lastparadox)

### Part II: Technical Architecture
- [4. System Architecture](#4-system-architecture)
- [5. Core Components](#5-core-components)
- [6. Security Model](#6-security-model)
- [7. User Flows](#7-user-flows)

### Part III: Features & Services
- [8. VPN Features](#8-vpn-features)
- [9. Identity Shield](#9-identity-shield)
- [10. Vault (Password Manager)](#10-vault-password-manager)
- [11. Tier System](#11-tier-system)

</td>
<td width="50%">

### Part IV: Infrastructure
- [11. Keeper VPS](#11-keeper-vps)
- [12. P2P Data Layer](#12-p2p-data-layer-hypercore)
- [13. Technical Specifications](#13-technical-specifications)

### Part V: Economics & Governance
- [14. Economic Model](#14-economic-model)
- [15. Governance](#15-governance)
- [16. Roadmap](#16-roadmap)

### Part VI: Appendix
- [17. Security Considerations](#17-security-considerations)
- [18. Legal & Compliance](#18-legal--compliance)
- [19. Links & Resources](#19-links--resources)

</td>
</tr>
</table>

---

<h1 align="center">Part I: Vision & Mission</h1>

---

## 1. Introduction

The public internet is increasingly centralized, exposing users to surveillance, censorship, and vendor lock-in. Traditional VPN providers require users to trust promises of "no logs" without any verifiability.

<p align="center">
  <strong>LastParadox</strong> is a <strong>decentralized VPN (dVPN)</strong> that replaces central servers with a <strong>peer-powered mesh</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/🧅-Tor-7D4698?style=for-the-badge" alt="Tor"/>
  <img src="https://img.shields.io/badge/🔗-Hypercore-FF6B6B?style=for-the-badge" alt="Hypercore"/>
  <img src="https://img.shields.io/badge/🔐-ZK--SNARKs-00D4AA?style=for-the-badge" alt="ZK"/>
</p>

<p align="center">
  <em>Our mission: <strong>Give back control of connectivity to the users</strong> — privacy-first, censorship-resistant, community-governed.</em>
</p>

### 🔄 Key Innovations

| Feature | Traditional VPN | LastParadox |
|---------|----------------|-------------|
| **Authentication** | Username/Password | Ed25519 Signed Tickets (Local) |
| **Trust Model** | Centralized Provider | Zero-Trust / Decentralized |
| **Data Storage** | Central Database | P2P Hypercore Replication |
| **Traffic Routing** | Single-Hop | Multi-Hop (Tor Onion Routing) |
| **DNS Resolution** | Provider DNS | Tor DNS (Leak Protected) |
| **Payment** | Credit Card / KYC | Cryptocurrency (Solana) |
| **User Interface** | Web Dashboard | Local Desktop Application |
| **Verification** | Trust Promises | Ed25519 Cryptographic Signatures |

---

## 2. Problem Statement

### ❌ Centralized VPN Failures

<table>
<tr>
<td width="50%">

**Infrastructure Risks**
- 🔴 Single Points of Failure
- 🔴 Servers can be seized or compromised
- 🔴 Legal pressure for surveillance compliance
- 🔴 Vendor lock-in with proprietary protocols

</td>
<td width="50%">

**Privacy Gaps**
- 🔴 DNS Leaks exposing queries
- 🔴 IP Leaks from kill switch failures
- 🔴 Metadata Collection (timestamps, bandwidth)
- 🔴 Payment Tracking linking identity

</td>
</tr>
</table>

---

## 3. The Solution: LastParadox

### 🛡️ Core Technologies

<table>
<tr>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/🧅-Tor-7D4698?style=for-the-badge" alt="Tor"/><br/>
<strong>Tor Integration</strong><br/>
<sub>Onion-routed obfuscation with multi-hop anonymity</sub>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/🔗-Hypercore-FF6B6B?style=for-the-badge" alt="Hypercore"/><br/>
<strong>P2P Data Layer</strong><br/>
<sub>Distributed, append-only network coordination</sub>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/🔐-Ed25519-00D4AA?style=for-the-badge" alt="Ed25519"/><br/>
<strong>Signed Tickets</strong><br/>
<sub>Authentication via locally-verified signed tickets</sub>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/🛡️-Defense-4A90D9?style=for-the-badge" alt="Defense"/><br/>
<strong>Defense-in-Depth</strong><br/>
<sub>DNS leak protection, kill switch, DPAPI</sub>
</td>
</tr>
</table>

### 📐 Design Principles

| Principle | Implementation |
|-----------|----------------|
| **Local-First Privacy** | Proofs & keys never leave the device unencrypted |
| **No Central Dashboards** | All monitoring & claims handled inside the app |
| **Zero-Trust Networking** | Every component assumes adversarial environment |
| **Fail-Closed Security** | System blocks traffic rather than leaking on failure |
| **DAO-by-Design** | Governance powers the network, not a company |

---

<h1 align="center">Part II: Technical Architecture</h1>

---

## 4. System Architecture

LastParadox employs a three-tier architecture separating user interface, network operations, and decentralized coordination.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           USER DEVICE                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    Flutter Desktop Client                            │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────────────┐ │   │
│  │  │    UI    │  │  State   │  │ Security │  │   Ticket Verify      │ │   │
│  │  │  Pages   │  │ Provider │  │ Services │  │   (Ed25519 Local)    │ │   │
│  │  └────┬─────┘  └────┬─────┘  └────┬─────┘  └──────────┬───────────┘ │   │
│  │       └──────────────┴─────────────┴───────────────────┘             │   │
│  │                              │ IPC (HTTP localhost:9124)             │   │
│  └──────────────────────────────┼───────────────────────────────────────┘   │
│                                 │                                            │
│  ┌──────────────────────────────┼───────────────────────────────────────┐   │
│  │                    Node.js Daemon                                    │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────────────┐ │   │
│  │  │   Tor    │  │  SOCKS   │  │   HTTP   │  │    Hyperswarm        │ │   │
│  │  │ Process  │  │  Proxy   │  │  Proxy   │  │    Replication       │ │   │
│  │  │  :9050   │  │  :9081   │  │  :8081   │  │                      │ │   │
│  │  └────┬─────┘  └────┬─────┘  └────┬─────┘  └──────────┬───────────┘ │   │
│  │       └──────────────┴─────────────┴───────────────────┘             │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ Tor Network (.onion)
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           KEEPER VPS (.onion)                               │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │  User Registration │ Whitelist Sync │ Payment Processing           │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ Hyperswarm DHT
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        HYPERCORE P2P NETWORK                                │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────────────┐   │
│  │   Hosts    │  │ Whitelist  │  │   Tiers    │  │     Rewards        │   │
│  │   Feed     │  │   Feed     │  │   Feed     │  │      Feed          │   │
│  └────────────┘  └────────────┘  └────────────┘  └────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 🧩 Component Responsibilities

| Component | Technology | Responsibilities |
|-----------|------------|------------------|
| <img src="https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white"/> **Client** | Dart/Flutter | UI, state management, security services, ZKP generation |
| <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/> **Daemon** | TypeScript | Tor management, SOCKS/HTTP proxy, Hyperswarm replication |
| <img src="https://img.shields.io/badge/Tor-7D4698?style=flat-square&logo=torproject&logoColor=white"/> **Keeper** | Hidden Service | User management, payment processing, tier verification |
| <img src="https://img.shields.io/badge/Hypercore-FF6B6B?style=flat-square"/> **P2P** | Hypercore/Hyperbee | Decentralized data storage and replication |

---

## 5. Core Components

### 5.1 🔑 Identity & Authentication

#### ECDSA Keypair Generation

```
┌─────────────────────────────────────────────────────────────┐
│                    Identity Generation                       │
│                                                              │
│   Random Entropy ──► ECDSA KeyGen ──► { privateKey, pubkey } │
│                          │                                   │
│                          ▼                                   │
│              pubkey = User Identity (88 chars base64)        │
│              privateKey = Stored encrypted (DPAPI)           │
└─────────────────────────────────────────────────────────────┘
```

#### Ed25519 Signed Ticket Authentication

<table>
<tr>
<td>

```
┌────────────────────────────────────┐
│    Ed25519 Ticket System            │
│                                     │
│  LandingLast Site                   │
│      │                              │
│      ▼                              │
│  User purchases plan (Stripe)       │
│      │                              │
│      ▼                              │
│  Site signs ticket with             │
│  ADMIN_TIER_PRIVKEY (Ed25519)       │
│      │                              │
│      ▼                              │
│  ticket.json sent to app via        │
│  deep link                          │
│      │                              │
│      ▼                              │
│  App verifies Ed25519 sig OFFLINE   │
│  against ADMIN_TIER_PUBKEY          │
└────────────────────────────────────┘
```

</td>
<td>

**Security Properties:**

| Property | Description |
|----------|-------------|
| ✅ **No Server Needed** | Ticket verified locally against hardcoded pubkey |
| ✅ **Tamper-Proof** | Ed25519 signature cannot be forged |
| ✅ **Offline Capable** | Zero network calls for tier verification |
| ✅ **Replay-Resistant** | Tickets contain expiry timestamps |

</td>
</tr>
</table>

#### 💳 Solana Wallet Integration

Supported wallets: **Backpack** (priority), **Phantom**, **Solflare**

```
1. Challenge Generation ──► Random challenge created
2. Wallet Signature ──► User signs with Solana wallet
3. Proof of Ownership ──► Signature proves wallet ownership
```

### 5.2 🌐 Networking Layer

#### Tor Integration

| Port | Protocol | Purpose |
|------|----------|---------|
| `9050` | SOCKS5 | Primary Tor proxy |
| `9051` | Control | Circuit management |
| `9053` | DNS | DNS over Tor (leak protection) |

#### Proxy Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Proxy Chain                              │
│                                                              │
│   Application ──► HTTP Proxy ──► SOCKS Proxy ──► Tor ──► 🌍 │
│                    :8081          :9081         :9050        │
└─────────────────────────────────────────────────────────────┘
```

#### 💎 TUN Interface (Premium)

```
┌─────────────────────────────────────────────────────────────┐
│                    TUN Routing Mode                          │
│                                                              │
│   All Traffic ──► TUN Adapter ──► tun2socks ──► SOCKS ──► Tor│
│                    10.255.0.1                   :9081        │
│                                                              │
│   Route: 0.0.0.0/1 via TUN                                   │
│   Route: 128.0.0.0/1 via TUN                                 │
└─────────────────────────────────────────────────────────────┘
```

### 5.3 📦 P2P Data Layer

<table>
<tr>
<td align="center">
<strong>Hypercore</strong><br/>
<sub>Append-only log with cryptographic verification</sub>
</td>
<td align="center">
<strong>Hyperbee</strong><br/>
<sub>B-tree index for key-value storage</sub>
</td>
<td align="center">
<strong>Hyperswarm</strong><br/>
<sub>DHT-based peer discovery</sub>
</td>
</tr>
</table>

#### Feed Structure

| Feed | Purpose | Data Type |
|------|---------|-----------|
| `hosts` | Available relay nodes | Host info, bandwidth, score |
| `whitelist` | Approved users | Pubkey, role, flags |
| `rewards` | Daily claims (V2) | Streak, uptime, claimed amount |
| `claims` | Claim history | Append-only audit log |

#### ✍️ Data Access

*   **Read-Only Default:** Client Daemons replicate data from the Keeper via Hyperswarm.
*   **Local Feed Writes:** Rewards claims are written to the daemon's local Hypercore feed. No network broadcasts needed.
*   **Tier:** Determined locally from Ed25519 signed ticket — no network call required.

---

## 6. Security Model

### 6.1 🎯 Threat Model

| Adversary | Capabilities | Mitigations |
|-----------|--------------|-------------|
| **ISP** | Traffic analysis, DNS monitoring | Tor routing, DNS leak protection |
| **Network MITM** | Packet inspection, injection | TLS, Tor encryption |
| **Malicious Exit** | Traffic interception | HTTPS enforcement, hidden services |
| **Compromised Keeper** | User data access | Local-only tier + rewards (no secrets on server) |
| **Local Malware** | Memory/disk access | DPAPI encryption, secure memory |
| **Sybil Attack** | DHT poisoning | Signature verification, rate limiting |

### 6.2 🛡️ Defense-in-Depth Layers

```
┌─────────────────────────────────────────────────────────────┐
│                    Security Layers                           │
│                                                              │
│   Layer 7: Application    │ ZK proofs, input validation     │
│   Layer 6: Presentation   │ TLS 1.3, certificate pinning    │
│   Layer 5: Session        │ Tor circuits, session tokens    │
│   Layer 4: Transport      │ Kill switch, firewall rules     │
│   Layer 3: Network        │ TUN routing, IP masking         │
│                                                              │
│   At Rest: DPAPI encryption, secure memory zeroization      │
└─────────────────────────────────────────────────────────────┘
```

### 6.3 ⚡ Kill Switch

```
ALLOW: localhost (127.0.0.1)
ALLOW: Tor SOCKS (port 9050)
ALLOW: Daemon API (port 9124)
BLOCK: All other outbound traffic
```

### 6.4 🔒 DNS Leak Protection

| Layer | Implementation |
|-------|----------------|
| **System DNS** | All interfaces → 127.0.0.1 (Tor DNS) |
| **Firewall** | Block port 53 to external addresses |
| **Tor DNS** | All queries via DNSPort 9053 |

---

## 7. User Flows

### 7.1 📝 Registration Flow

```
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌───────┐
│ Connect │     │ Payment │     │ Generate│     │ Store │
│ Wallet  │ ──► │ (Stripe/│ ──► │ Identity│ ──► │ Local │
│         │     │  Solana)│     │ + ZKP   │     │       │
└─────────┘     └─────────┘     └─────────┘     └───────┘
     │               │               │               │
     ▼               ▼               ▼               ▼
solAddress      sessionId      { pubkey,       user-secret
challenge       plan           privateKey,     .encrypted
signature                      zkProof }
```

### 7.2 🔌 VPN Connection Flow

```
1. ✅ Load user-secret.json (DPAPI decrypt)
2. ✅ Start Daemon (if not running)
3. ✅ Bootstrap Tor (wait for port 9050)
4. ✅ Enable Kill Switch (firewall rules)
5. ✅ Enable DNS Leak Protection
6. ✅ Start SOCKS Proxy (:9081)
7. ✅ Start HTTP Proxy (:8081)
8. ✅ Configure System Proxy (or TUN for Premium)
9. 🟢 State: CONNECTED
```

---

<h1 align="center">Part III: Features & Services</h1>

---

## 8. VPN Features

### 🆓 Core Features (All Users)

| Feature | Description | Status |
|---------|-------------|--------|
| 🧅 **Tor Routing** | Multi-hop onion routing for anonymity | ✅ Live |
| 🌐 **HTTP/SOCKS Proxy** | Browser and application proxy support | ✅ Live |
| 🔒 **DNS Leak Protection** | All DNS queries via Tor | ✅ Live |
| ⚡ **Kill Switch** | Block traffic if VPN disconnects | ✅ Live |
| 🔐 **Local Auth** | Ed25519 signed ticket authentication | ✅ Live |
| 💰 **Daily Rewards** | Killstreak-based progressive rewards | ✅ Live |

### 💎 Premium Features

| Feature | Description | Status |
|---------|-------------|--------|
| 🚀 **TUN Routing** | Kernel-level full-device routing | 🔄 Beta |
| ⚡ **Priority Routing** | Faster connection establishment | ✅ Live |
| 🖥️ **Host Mode** | Operate as relay node | 🔄 Beta |
| ♾️ **Unlimited Bandwidth** | No throttling | ✅ Live |

### 🛡️ 8.1 Compliance & Safety (Minor Protection)

To anticipate regulatory requirements and protect vulnerable users:

*   **DNS-Level Family Shield:** Optional "Family Mode" in the Daemon forces DNS resolution through family-safe resolvers (e.g., Cloudflare 1.1.1.3), blocking adult content and malware at the source without traffic inspection.
*   **On-Device AI Warning:** Integration of lightweight local models (TFLite) to warn users before accessing known malicious or inappropriate sites. Verification happens entirely on-device to preserve privacy.

---

## 9. Identity Shield

### 🔍 Overview

Identity Shield is a proactive data breach monitoring service integrated directly into the LastParadox privacy suite. It allows users to monitor their digital footprint for compromises without exposing their identity.

#### Key Features:
*   **Breach Detection:** Scans billions of leaked records for email addresses, usernames, and phone numbers.
*   **Continuous Monitoring:** Automatically alerts users if their compromised data appears in new breaches.
*   **Privacy-Preserving Lookup:** Queries are hashed or anonymized to prevent the monitoring service from knowing who is being checked.
*   **Actionable Insights:** Provides specific steps to secure compromised accounts (e.g., "Change Password", "Enable 2FA").

### 📊 Risk Scoring

The system assigns a risk score to the user's digital identity based on the severity and recency of breaches:

| Level | Score | Status | Action Required |
|-------|-------|--------|-----------------|
| 🟢 **Minimal** | 0-10 | Safe | Routine checks |
| 🟡 **Low** | 11-30 | Minor | Update old passwords |
| 🟠 **Medium** | 31-60 | Exposed | Change specific passwords |
| 🔴 **High** | 61-85 | Compromised | Immediate action needed |
| ⚫ **Critical** | 86-100 | Severe | Identity theft risk |

---

## 10. Vault (Password Manager)

### 🔐 Local-First Credential Management

LastParadox Vault is a secure, offline password manager and autofill engine designed to eliminate the reliance on cloud-based password managers which are frequent targets of attacks.

### 🛡️ Core Technologies

*   **Local Encryption:** All credentials are encrypted locally using **AES-256-GCM** derived from a master password (via Argon2id KDF).
*   **Zero-Cloud Storage:** The encrypted vault database (`vault.db`) never leaves the user's device. There is no cloud sync, eliminating remote attack vectors.
*   **Secure Autofill:** The companion browser extension communicates with the Vault desktop app via a secure local localhost server (`127.0.0.1`), ensuring credentials are never injected into the browser's storage or transmitted over the network.
*   **Import/Export:** Supports standard CSV formats for easy migration from other managers (Bitwarden, LastPass).

### 🔄 Anti-Keylogger Protection

The Vault integrates with the Desktop Client's security services to provide:
*   **Clipboard Clearing:** Automatically wipes copied passwords after 30 seconds.
*   **Obfuscated Input:** Uses protected memory for password entry fields to resist simple memory scrapers.

---

## 11. Tier System

### 📋 Tier Comparison

| Feature | STANDARD | PREMIUM |
|---------|:--------:|:-------:|
| Tor Routing | ✅ | ✅ |
| HTTP/SOCKS Proxy | ✅ | ✅ |
| DNS Leak Protection | ✅ | ✅ |
| Kill Switch | ✅ | ✅ |
| Daily Rewards | ✅ | ✅ |
| TUN Routing | ❌ | ✅ |
| Priority Routing | ❌ | ✅ |
| Host Mode | ❌ | ✅ |
| Unlimited Bandwidth | ❌ | ✅ |

---

<h1 align="center">Part IV: Infrastructure</h1>

---

## 11. Keeper VPS

### 🖥️ Overview

The Keeper VPS is the central coordination server operating as a **Tor hidden service**:

| Function | Description |
|----------|-------------|
| 👤 **User Management** | Registration, whitelist sync |
| 💳 **Payment Processing** | Stripe and Solana verification |
| 🔄 **Feed Replication** | Master node for Hypercore sync (hosts, whitelist) |

> **Note V2:** Tier management and rewards are now handled **locally** by the daemon. The Keeper no longer processes these.

### 🔌 API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/whitelist/check/:pubkey` | GET | Whitelist verification |
| `/api/network-status` | GET | Network stats |

---

## 12. P2P Data Layer (Hypercore)

### 📦 Feed Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    Hyperbee Feeds                            │
│                                                              │
│   HOSTS      │ { host_pubkey, onion, bandwidth, score }     │
│   WHITELIST  │ { pubkey, role, flags, timestamp }           │
│   CLAIMS     │ { pubkey, amount, streak, timestamp }        │
└─────────────────────────────────────────────────────────────┘
```

---

## 13. Technical Specifications

### 🔌 Ports and Protocols

| Port | Protocol | Component | Purpose |
|------|----------|-----------|---------|
| `8081` | HTTP | HTTP Proxy | System proxy |
| `9050` | SOCKS5 | Tor | Primary Tor proxy |
| `9051` | TCP | Tor Control | Circuit management |
| `9053` | DNS | Tor DNS | DNS over Tor |
| `9081` | SOCKS5 | SOCKS Proxy | Application proxy |
| `9124` | HTTP | Daemon API | Client-daemon IPC |

### 📁 File Storage (Windows)

```
%APPDATA%\lastparadox\vpn\data\
├── user-secret.json          # Plaintext (for daemon)
├── user-secret.encrypted     # DPAPI encrypted
├── ticket.json               # Ed25519 signed tier ticket
├── cache\                    # LevelDB cache
└── hypercore\                # Hyperbee feeds
```

---

<h1 align="center">Part V: Economics & Governance</h1>

---

## 14. Economic Model

### 📊 Phase A: Community Contributions (Current)

<table>
<tr>
<td>

**Contributors Receive:**
- ✅ Functional app access
- ✅ Governance rights
- ✅ Eligibility for future rewards

</td>
<td>

**Why No Token Now?**
- ⚠️ Regulatory exposure
- ⚠️ Wrong incentives
- ⚠️ Low liquidity & volatility
- ⚠️ "Token-first, product-later" failure

</td>
</tr>
</table>

### 🔮 Phase B: Tokenization (RWRD) — Future

> **Tokenomics TBD by DAO. No promises of timelines or allocations.**

---

## 15. Governance

### 🏛️ Progressive Decentralization

| Stage | Mechanism |
|-------|-----------|
| **Initial** | Off-chain / multisig |
| **Future** | On-chain governance (audited) |

### ⚡ DAO Powers

- Propose/approve protocol upgrades
- Define reward formulas
- Manage treasury (grants, audits)
- Set network parameters

---

## 16. Roadmap

```
v1.0 ████████████████████ 100%  ✅ Done
v1.1 ████████████░░░░░░░░  60%  🔄 In Progress
v1.5 ░░░░░░░░░░░░░░░░░░░░   0%  📋 Planned
v2.0 ░░░░░░░░░░░░░░░░░░░░   0%  📋 Planned
```

| Version | Status | Features |
|---------|--------|----------|
| **v1.0** | ✅ Done | Tor + Hypercore, local ZK auth, in-app claims |
| **v1.1** | 🔄 In Progress | Stable Hyperbee telemetry, host tooling |
| **v1.5** | 📋 Planned | Premium TUN hardening, Windows/macOS parity |
| **v2.0** | 📋 Planned | DAO bootstrap, RWRD token spec |
| **v2.x** | 📋 Future | Mobile client, host marketplace |

### 🚀 Phase 3: Progressive Decentralization (No VPS)

The ultimate goal is to remove the Keeper Master as a central dependency.

*   **Current State (V2 Local-Only):**
    *   ✅ Ed25519 signed ticket for tier verification (fully offline)
    *   ✅ Killstreak rewards processed locally by daemon
    *   ✅ Keeper reduced to registry role (hosts, whitelist sync)
*   **Remaining Work:**
    *   🔄 **Full P2P Host Discovery:** Remove Keeper dependency for host list.
    *   **Result:** The network survives fully peer-to-peer. No central authority.

> *Roadmap is aspirational and subject to change.*

---

<h1 align="center">Part VI: Appendix</h1>

---

## 17. Security Considerations

### 🔐 Ed25519 Key Management

- ADMIN_TIER_PUBKEY hardcoded in daemon and Flutter client
- Corresponding private key held exclusively on LandingLast site
- Ticket signatures verified offline — no trusted setup required
- **Recommendation**: Key rotation mechanism for future versions

### ⚠️ Known Limitations

| Limitation | Mitigation |
|------------|------------|
| Tor Exit Node Trust | HTTPS required for sensitive traffic |
| Metadata Leakage | Connection timing may be observable |
| Platform Dependency | Full features require Windows currently |

---

## 18. Legal & Compliance

<table>
<tr>
<td>

- ❌ **No token sale** at this stage
- ❌ **No dividends** promised or implied
- ✅ **Contributions** support development
- ✅ Users responsible for **local law compliance**

</td>
</tr>
</table>

> See [LEGAL.md](./LEGAL.md) for full terms.

---

## 19. Links & Resources

<p align="center">
  <a href="https://lastparadox.xyz">
    <img src="https://img.shields.io/badge/🌐_Website-lastparadox.xyz-00C853?style=for-the-badge" alt="Website"/>
  </a>
  <a href="https://discord.gg/nnZGYNU8Dp">
    <img src="https://img.shields.io/badge/💬_Discord-Join_Us-5865F2?style=for-the-badge" alt="Discord"/>
  </a>
  <a href="https://x.com/LastParadox__">
    <img src="https://img.shields.io/badge/🐦_X-@LastParadox__-000000?style=for-the-badge" alt="X"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/Lastexitfromnowhere">
    <img src="https://img.shields.io/badge/📂_GitHub-Lastexitfromnowhere-181717?style=for-the-badge&logo=github" alt="GitHub"/>
  </a>
  <a href="mailto:contact@lastparadox.xyz">
    <img src="https://img.shields.io/badge/📧_Email-contact@lastparadox.xyz-EA4335?style=for-the-badge" alt="Email"/>
  </a>
</p>

---

## 🎯 Conclusion

<p align="center">
  <strong>LastParadox</strong> aims to reduce centralized VPN trust through:
</p>

<table>
<tr>
<td align="center">🔐<br/><strong>Ed25519 Tickets</strong></td>
<td align="center">🔗<br/><strong>Hypercore Routing</strong></td>
<td align="center">🧅<br/><strong>Tor Integration</strong></td>
<td align="center">🛡️<br/><strong>Defense-in-Depth</strong></td>
<td align="center">🖥️<br/><strong>Local-First Design</strong></td>
</tr>
</table>

<p align="center">
  <em>By prioritizing development <strong>before</strong> tokenization, the project focuses on building functional software first.</em>
</p>

---

## 📄 Document Information

| Field | Value |
|-------|-------|
| **Type** | Technical Design Draft — Living Whitepaper |
| **Version** | 3.0-draft |
| **Updated** | February 2026 |
| **Maintainers** | LastParadox Core Team |

---

## ⚠️ Final Disclaimer

<table>
<tr>
<td>

This whitepaper describes the **intended design** of the LastParadox system. While significant portions are implemented and functional, some features may be:

- In active development
- Subject to architectural changes
- Dependent on external factors (audits, community feedback, regulatory guidance)

**No absolute guarantees** are made regarding:
- Complete anonymity or untraceability
- Protection against all possible attack vectors
- Future feature availability or timeline

The software is provided "as is" for privacy-conscious users who understand the inherent limitations of any security tool.

</td>
</tr>
</table>

---

<p align="center">
  <strong>🛡️ Privacy is not a feature. It's the foundation.</strong>
</p>

<p align="center">
  <sub>© 2025-2026 LastParadox Project — All rights reserved</sub><br/>
  <sub>See <a href="./LEGAL.md">LEGAL.md</a> for full terms</sub>
</p>

---

<p align="center">
  <a href="#-lastparadox">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-7D4698?style=flat-square" alt="Back to Top"/>
  </a>
</p>
