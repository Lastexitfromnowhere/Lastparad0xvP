<p align="center">
  <img src="https://lastparadox.xyz/assets/banner5.png" alt="LastParadox Banner" width="100%"/>
</p>

<h1 align="center">🔒 Security Policy</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Responsible%20Disclosure-Encouraged-00C853?style=for-the-badge" alt="Disclosure"/>
  <img src="https://img.shields.io/badge/Bug%20Bounty-Coming%20Soon-7D4698?style=for-the-badge" alt="Bounty"/>
</p>

---

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability in LastParadox:

<p align="center">
  <a href="mailto:security@lastparadox.xyz">
    <img src="https://img.shields.io/badge/📧_Email-security@lastparadox.xyz-EA4335?style=for-the-badge" alt="Security Email"/>
  </a>
</p>

### ⚠️ Important

> **Please do NOT open public GitHub issues for security-sensitive reports.**
>
> Public disclosure of vulnerabilities before a fix is available puts all users at risk.

---

## 📋 What to Include

When reporting a vulnerability, please provide:

| Information | Description |
|-------------|-------------|
| **Summary** | Brief description of the vulnerability |
| **Severity** | Your assessment (Critical / High / Medium / Low) |
| **Steps to Reproduce** | Detailed steps to replicate the issue |
| **Impact** | What an attacker could achieve |
| **Affected Components** | Which parts of the system are affected |
| **Suggested Fix** | If you have recommendations (optional) |

### Example Report Format

```
Subject: [SECURITY] Brief description

## Summary
Description of the vulnerability

## Severity
Critical / High / Medium / Low

## Steps to Reproduce
1. Step one
2. Step two
3. ...

## Impact
What could an attacker do with this vulnerability?

## Affected Components
- Component A
- Component B

## Suggested Fix (optional)
Your recommendations
```

---

## ⏱️ Response Timeline

| Stage | Timeframe |
|-------|-----------|
| **Acknowledgment** | Within 48 hours |
| **Initial Assessment** | Within 7 days |
| **Status Update** | Every 7 days until resolved |
| **Fix Deployment** | Depends on severity |
| **Public Disclosure** | After fix is deployed (coordinated) |

---

## 🎯 Scope

### In Scope

| Component | Repository |
|-----------|------------|
| ✅ Desktop Client | `lp-flutter` |
| ✅ Daemon | `lp-daemon` |
| ✅ ZK Circuits | `lp-circuits` |
| ✅ Keeper API | `lp-keeper` |
| ✅ Identity Shield | `identity-shield` |
| ✅ Website | `lastparadox.xyz` |

### Out of Scope

| Item | Reason |
|------|--------|
| ❌ Third-party dependencies | Report to upstream maintainers |
| ❌ Tor network issues | Report to Tor Project |
| ❌ Hypercore protocol issues | Report to Holepunch |
| ❌ Social engineering attacks | Not a technical vulnerability |
| ❌ Physical attacks | Requires physical access |
| ❌ Denial of Service (DoS) | Unless causing data loss |

---

## 🏆 Recognition

We believe in recognizing security researchers who help us improve:

### Hall of Fame

Security researchers who responsibly disclose vulnerabilities will be:

- 🏅 Listed in our Security Hall of Fame (with permission)
- 📜 Credited in release notes
- 🎁 Eligible for future bug bounty program

### Bug Bounty (Coming Soon)

We're planning a formal bug bounty program. Details will be announced on:
- Discord: https://discord.gg/nnZGYNU8Dp
- Twitter/X: https://x.com/LastParadox__

---

## 🔐 Security Measures

LastParadox implements multiple security layers:

| Layer | Implementation |
|-------|----------------|
| **Authentication** | ZK-SNARKs (Groth16) — Zero-knowledge proofs |
| **Traffic** | Tor SOCKS5 — Onion routing |
| **Storage** | DPAPI (Windows) — Encrypted at rest |
| **Network** | Kill Switch — Fail-closed on disconnect |
| **DNS** | Tor DNS — Leak protection |
| **P2P** | Hyperswarm — Noise protocol encryption |

---

## 📚 Security Resources

- [WHITEPAPER.md](./WHITEPAPER.md) — Technical architecture
- [LEGAL.md](./LEGAL.md) — Legal disclaimers
- [CODE_NOTICE.md](./CODE_NOTICE.md) — Repository structure

---

## 🤝 Responsible Disclosure Guidelines

We follow responsible disclosure principles:

1. **Report Privately** — Contact us before public disclosure
2. **Give Time** — Allow reasonable time for fixes
3. **No Exploitation** — Don't exploit beyond proof-of-concept
4. **No Data Access** — Don't access other users' data
5. **Coordinate** — Work with us on disclosure timing

We commit to:

1. **No Legal Action** — Against good-faith researchers
2. **Timely Response** — Acknowledge within 48 hours
3. **Transparency** — Keep you informed of progress
4. **Credit** — Recognize your contribution (if desired)

---

## 📬 Contact

| Purpose | Contact |
|---------|---------|
| **Security Issues** | security@lastparadox.xyz |
| **General Inquiries** | contact@lastparadox.xyz |
| **Community** | [Discord](https://discord.gg/nnZGYNU8Dp) |

---

<p align="center">
  <strong>🛡️ Security is not a feature — it's our foundation.</strong>
</p>

<p align="center">
  <sub>Thank you for helping keep LastParadox and its users safe.</sub>
</p>

