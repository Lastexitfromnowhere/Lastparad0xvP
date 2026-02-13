<p align="center">
  <img src="https://lastparadox.xyz/assets/banner5.png" alt="LastParadox Banner" width="100%"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Phase%200%20(V1.2%20Production)-7D4698?style=for-the-badge" alt="Status"/>
  <img src="https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge" alt="License"/>
  <img src="https://img.shields.io/badge/No%20Logs-Guaranteed-00C853?style=for-the-badge" alt="No Logs"/>
  <img src="https://img.shields.io/badge/Token-None%20Yet-gray?style=for-the-badge" alt="Token"/>
</p>

<p align="center">
  <a href="https://discord.gg/nnZGYNU8Dp">
    <img src="https://img.shields.io/badge/Discord-Join%20Us-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord"/>
  </a>
  <a href="https://x.com/LastParadox__">
    <img src="https://img.shields.io/badge/X-Follow-000000?style=flat-square&logo=x&logoColor=white" alt="X"/>
  </a>
  <a href="https://lastparadox.xyz">
    <img src="https://img.shields.io/badge/Web-lastparadox.xyz-00C853?style=flat-square" alt="Website"/>
  </a>
</p>

<h3 align="center">
  <em>Privacy is not a privilege. It's a right.</em>
</h3>

<p align="center">
  <strong>Decentralized VPN • Tor-Powered • Ed25519 Signed Tickets • Community-Governed</strong>
</p>

---

## 🚀 Vision

**LastParadox** is a next-generation **decentralized privacy network** that replaces centralized trust with cryptographic guarantees.

Unlike traditional VPNs that ask you to *trust* their "no-logs" promises, LastParadox makes logging **technically impossible**.

<p align="center">
  <strong>Build a censorship-resistant, community-owned privacy layer for the internet.</strong>
</p>

---

## 🔑 Core Technologies

<table>
<tr>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/🧅-Tor-7D4698?style=for-the-badge" alt="Tor"/><br/>
<strong>Tor Integration</strong><br/>
<sub>Onion routing, multi-hop anonymity, .onion circuits</sub>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/🔗-Hypercore-FF6B6B?style=for-the-badge" alt="Hypercore"/><br/>
<strong>HyperNodes</strong><br/>
<sub>P2P routing, no central servers, encrypted mesh</sub>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/🔐-Ed25519-00D4AA?style=for-the-badge" alt="Ed25519"/><br/>
<strong>Signed Ticket Auth</strong><br/>
<sub>Ed25519 signed tickets verified locally, offline</sub>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/🗄️-HyperBee-4A90D9?style=for-the-badge" alt="HyperBee"/><br/>
<strong>Decentralized Storage</strong><br/>
<sub>Append-only, tamper-evident, no central DB</sub>
</td>
</tr>
</table>

---

## ✨ Key Features

| Feature | Description | Status |
|---------|-------------|--------|
| 🧅 **Tor Integration** | Privacy by default with `.onion` circuit routing | ✅ Live (v1.2) |
| 🌐 **HyperNodes** | Encrypted, low-latency P2P routing | ✅ Live |
| 🗄️ **HyperBee Storage** | Decentralized P2P data sync (hosts, rewards) | ✅ Live |
| 🔐 **Ed25519 Ticket Auth** | Signed tickets verified offline — no server trust | ✅ Live |
| 🛡️ **DNS Leak Protection** | All DNS routed through Tor | ✅ Live |
| ⚡ **Kill Switch** | Auto-block traffic if VPN drops | ✅ Live |
| 💎 **TUN Mode (Premium)** | Full kernel VPN routing with WinTun | ✅ Live |
| 🏆 **Daily Rewards** | 7-day streak system with progressive claims | ✅ Live (v1.2) |
| 💰 **HD Wallets** | Auto-generated Ethereum + Solana wallets | ✅ Live (v1.2) |
| 🔐 **Vault System** | Encrypted password/secret storage | ✅ Live |
| 🧩 **DAO Governance** | Community proposals & voting | 🔄 Building |

---



---

## 📂 Source Code Preview (Protocol Reference)

> [!IMPORTANT]
> **This repository documents the LastParadox protocol and architecture.**
> It is a **reference implementation** and cannot be used as a production VPN system.
>
> The source code provided below is a **non-functional skeleton** intended for security auditing and transparency. Critical implementation details (anti-sybil mechanics, Ed25519 key management, and reward systems) are omitted for security and to prevent malicious cloning.

*   [**lastvpn.ts**](./src-preview/hyper-node/src/hyper/lastvpn.ts) — The interface definitions for the Hyperswarm P2P layer.
    *   *Status: Interfaces Only (Implementation Hidden)*
*   [**server-hyper.ts**](./src-preview/hyper-node/src/server-hyper.ts) — The API contract for the Tor routing gateway and rewards system.
    *   *Status: Interfaces Only (Implementation Hidden)*

### Why is the code "dead"?

We believe in **Auditability > Replicability**.
Our goal is to prove **how** we protect your data (Zero-Knowledge, Local-First) without handing over the tools to bypass those very protections. This "Anti-Clone" strategy ensures that while the architecture is transparent, the network remains secure against cheap forks and unauthorized node operators.

---

## 🏗️ Architecture — V2 (Local-First)

```
┌──────────────────────────────────────────────────────────────────────┐
│                     LASTPARADOX NETWORK (V1.2)                       │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────┐        ┌─────────────────────────┐                │
│  │   Flutter    │        │    Node.js Daemon       │                │
│  │  Desktop UI  │◄──────►│  (Fastify, Local)       │                │
│  │  (Windows)   │        │  ┌──────────────────┐   │                │
│  └──────────────┘        │  │ • Tor Manager    │   │                │
│         │                │  │ • SOCKS5 Proxy   │   │                │
│         │                │  │ • Hyperswarm     │   │                │
│         │                │  │ • P2P Sync       │   │                │
│         │                │  └──────────────────┘   │                │
│         │                └─────────────────────────┘                │
│         │                         │                                │
│         ▼                         ▼                                │
│    ┌─────────────┐        ┌──────────────────┐                    │
│    │ user-secret │        │   LandingLast    │                    │
│    │    .json    │        │   (Site + API)   │                    │
│    │ (DPAPI)     │        │                  │                    │
│    │ ┌─────────┐ │        │  • Issue tickets │                    │
│    │ │Ticket   │ │        │  • Generate      │                    │
│    │ │(signed) │ │        │    coupons       │                    │
│    │ │Wallet   │ │        │  • Stripe        │                    │
│    │ │(ETH+SOL)│ │        └──────────────────┘                    │
│    │ └─────────┘ │                                                │
│    └─────────────┘                                                │
│         │                                                         │
│         ▼ (Ed25519 offline verification)                          │
│    ┌──────────────────────────────────────────┐                  │
│    │        TIER VERIFICATION (Local)         │                  │
│    │  STANDARD ← Ticket from Site             │                  │
│    │  PREMIUM  ← Signed Ed25519 + TUN Mode    │                  │
│    └──────────────────────────────────────────┘                  │
│                                                                   │
└──────────────────────────────────────────────────────────────────────┘

Traffic Flow:
┌─────────────┐     ┌──────────────┐     ┌────────┐     ┌──────────┐
│   User PC   │────►│Tor (Daemon)  │────►│Keeper  │────►│ Internet │
│             │     │(SOCKS 9124)  │     │.onion  │     │          │
└─────────────┘     └──────────────┘     └────────┘     └──────────┘
       │                    │                   │
       └──────────────────►│◄───────────────────┘
         Ed25519 Ticket    │
         (verified once)   Hyperswarm P2P Sync
```

**Key Changes (V2 Architecture):**
- ✅ **Local-Only Tier Verification**: No Keeper required for tier checks
- ✅ **Offline-First**: Ticket signed locally, verified offline
- ✅ **P2P Sync**: Hosts, rewards replicated via Hyperswarm (not Keeper)
- ✅ **No Coupon System**: Deprecated (was V1 Autobase/Antigravity)
- ✅ **Direct Payment**: Stripe → Ticket → Deep Link → Install

---

## 📊 Project Status — V1.2 Release

```
Phase 0 ██████████████████░░ 90%  ← CURRENT (V1.2)
Phase 1 ░░░░░░░░░░░░░░░░░░░░  0%
Phase 2 ░░░░░░░░░░░░░░░░░░░░  0%
```

| Phase | Focus | Status |
|-------|-------|--------|
| **Phase 0** | ✅ Core VPN (Tor, P2P), Wallet, Daily Rewards, Vault | 🎉 **V1.2 Live** |
| **Phase 1** | 🔄 DAO governance, audits, multi-platform (Linux, macOS) | ⏳ Q2 2026 |
| **Phase 2** | Token creation (if DAO approves) | 🔮 2026+ |

### What's New in V1.2
- 🏆 **Daily Rewards System**: 7-day streak with progressive payouts
- 💰 **HD Wallets**: Auto-generated Ethereum (ERC-20) + Solana (SPL) wallets
- 🏠 **V2 Architecture**: Local-first, offline ticket verification
- 🧅 **Improved Tor**: Better relay selection, faster connections
- 🔐 **Vault Enhancements**: Password manager with Firefox auto-fill
- 📦 **Package Rename**: `lastparadox_vpn` (better visibility in Task Manager)

> **Note:** Token creation requires DAO vote. No token exists today.

---

## 💎 Contribution Tiers (V1.2)

> ⚠️ **Important:** Contributions are **service payments**, not investments.
> No tokens exist yet. See [LEGAL.md](./LEGAL.md) & [TOKENOMICS.md](./TOKENOMICS.md) for full terms.

### Tier Structure

| Tier | Duration | Price | What You Get |
|------|----------|-------|--------------|
| 🔹 **Supporter** | 1 Year | $4 | Browser proxy + community membership |
| 🔸 **Governance** | 1 Year | $9 | Full app access + voting rights (1 year) |
| 💎 **Builder** | 1 Year | $50 | Early beta features + priority voice + recognition |
| 👑 **Founder** | Lifetime | $999 | All features forever + DAO seat proposal |

### What's Included (All Tiers)

**Immediately:**
- ✅ Working VPN app (Tor-routed)
- ✅ TUN kernel mode (Premium tiers)
- ✅ Vault password manager
- ✅ HD Wallets (Ethereum + Solana)
- ✅ Daily rewards & streak system
- ✅ P2P network participation

**Future (Phase 1+, DAO approval required):**
- 🔮 Token allocation (if community votes yes)
- 🔮 DAO governance participation
- 🔮 Treasury share voting
- 🔮 Protocol upgrade proposals

### Payment Methods
- 💳 **Stripe**: Credit card, Apple Pay, Google Pay
- 🌐 **OnRamp**: Crypto to fiat conversion available
- 📧 Contact: `contact@lastparadox.xyz` for custom payment plans

<p align="center">
  <strong>No tokens. No presale. No promises.</strong><br/>
  <sub>Just working software and community governance.</sub><br/>
  <sub>All contributions are service payments for VPN access, not securities.</sub>
</p>

---

## 📚 Documentation

<table>
<tr>
<td align="center">
<a href="./WHITEPAPER.md">
<img src="https://img.shields.io/badge/📄-Whitepaper-7D4698?style=for-the-badge" alt="Whitepaper"/>
</a>
</td>
<td align="center">
<a href="./TOKENOMICS.md">
<img src="https://img.shields.io/badge/💰-Tokenomics-FF6B6B?style=for-the-badge" alt="Tokenomics"/>
</a>
</td>
<td align="center">
<a href="./LEGAL.md">
<img src="https://img.shields.io/badge/⚖️-Legal-gray?style=for-the-badge" alt="Legal"/>
</a>
</td>
</tr>
</table>

---



---

## ⚠️ Disclaimer

> **This is experimental software.** Use at your own risk.
>
> - No absolute privacy guarantee
> - VPN/Tor may be restricted in some jurisdictions  
> - You are responsible for local law compliance
> - No tokens exist — contributions are service payments
>
> See [LEGAL.md](./LEGAL.md) for complete terms.

---

## 🤝 Community

<p align="center">
  <a href="https://discord.gg/nnZGYNU8Dp">
    <img src="https://img.shields.io/badge/💬_Discord-Join_Community-5865F2?style=for-the-badge" alt="Discord"/>
  </a>
  <a href="https://x.com/LastParadox__">
    <img src="https://img.shields.io/badge/🐦_X-@LastParadox__-000000?style=for-the-badge" alt="X"/>
  </a>
  <a href="https://lastparadox.xyz">
    <img src="https://img.shields.io/badge/🌐_Website-lastparadox.xyz-00C853?style=for-the-badge" alt="Website"/>
  </a>
</p>

<p align="center">
  <a href="mailto:contact@lastparadox.xyz">
    <img src="https://img.shields.io/badge/📧_Email-contact@lastparadox.xyz-EA4335?style=for-the-badge" alt="Email"/>
  </a>
</p>

---

<p align="center">
  <strong>🛡️ Privacy is not a feature. It's the foundation.</strong>
</p>

<p align="center">
  <sub>© 2024-2026 LastParadox Project</sub><br/>
  <sub>Founder: <strong>Last_Exit</strong></sub><br/>
  <sub>All rights reserved — See <a href="./LEGAL.md">LEGAL.md</a></sub>
</p>

---

<p align="center">
  <a href="#top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-7D4698?style=flat-square" alt="Back to Top"/>
  </a>
</p>
