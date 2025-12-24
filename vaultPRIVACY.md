<p align="center">
  <img src="https://lastparadox.xyz/assets/banner5.png" alt="LastParadox Banner" width="100%"/>
</p>

<h1 align="center">🔐 Privacy Policy</h1>
<h3 align="center">LastParadox Vault Autofill Extension</h3>

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0-7D4698?style=for-the-badge" alt="Version"/>
  <img src="https://img.shields.io/badge/Data%20Collection-None-00C853?style=for-the-badge" alt="No Data"/>
  <img src="https://img.shields.io/badge/GDPR-Compliant-blue?style=for-the-badge" alt="GDPR"/>
</p>

<p align="center">
  <strong>Last Updated:</strong> December 2024 | <strong>Effective:</strong> December 2024
</p>

---

## 📋 Table of Contents

- [1. Introduction](#1-introduction)
- [2. Data Collection](#2-data-collection)
- [3. How It Works](#3-how-it-works)
- [4. Local Storage](#4-local-storage)
- [5. Permissions](#5-permissions)
- [6. Security](#6-security)
- [7. Third-Party Services](#7-third-party-services)
- [8. GDPR & Your Rights](#8-gdpr--your-rights)
- [9. Children's Privacy](#9-childrens-privacy)
- [10. Changes to This Policy](#10-changes-to-this-policy)
- [11. Contact](#11-contact)

---

## 1. Introduction

This Privacy Policy describes how the **LastParadox Vault Autofill** browser extension ("Extension") handles your data.

The Extension enables automatic form-filling using credentials stored in your **LastParadox Vault** desktop application. 

<p align="center">
  <strong>🔒 All operations are performed locally on your device.</strong><br/>
  <strong>🚫 No data is ever sent to external servers.</strong>
</p>

---

## 2. Data Collection

### What We DO NOT Collect

| Data Type | Collected? |
|-----------|------------|
| Passwords | ❌ Never |
| Usernames/Emails | ❌ Never |
| Browsing History | ❌ Never |
| Form Data | ❌ Never |
| Personal Information | ❌ Never |
| IP Address | ❌ Never |
| Device Information | ❌ Never |
| Location Data | ❌ Never |

### What We DO NOT Use

- ❌ No analytics or tracking
- ❌ No advertising
- ❌ No profiling
- ❌ No cookies (beyond local config)
- ❌ No third-party SDKs
- ❌ No telemetry

### Data Processed Locally Only

The Extension processes the following data **exclusively on your local machine**:

| Data | Purpose | Stored? |
|------|---------|---------|
| Page URL/Origin | Match credentials to website | No (transient) |
| Credentials from Vault | Fill login forms | No (transient) |
| Local auth token | Secure local communication | Yes (local only) |

---

## 3. How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                    AUTOFILL FLOW (100% LOCAL)                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────┐    ┌──────────────┐    ┌──────────────────────┐  │
│  │ Website  │    │  Extension   │    │  LastParadox Vault   │  │
│  │ (Login   │───►│  (Detects    │───►│  (Desktop App)       │  │
│  │  Form)   │    │   fields)    │    │                      │  │
│  └──────────┘    └──────────────┘    └──────────────────────┘  │
│                         │                      │               │
│                         │   Request to         │               │
│                         │   127.0.0.1:4545     │               │
│                         │◄─────────────────────┘               │
│                         │                                      │
│                         ▼                                      │
│                  ┌──────────────┐                              │
│                  │ Form Filled  │                              │
│                  │ (Locally)    │                              │
│                  └──────────────┘                              │
│                                                                 │
│  ⚠️ NOTHING LEAVES YOUR DEVICE                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Step-by-Step Process

1. **Detection** — Extension detects login/password fields on the webpage
2. **Request** — Extension sends request to `http://127.0.0.1:4545/vault/autofill`
3. **Local Lookup** — Vault desktop app matches URL to stored credentials
4. **Decryption** — Credentials decrypted locally using your master password
5. **Autofill** — Extension fills the form fields
6. **Done** — No data transmitted externally

---

## 4. Local Storage

The Extension may store the following data **locally on your device only**:

| Data | Purpose | Location |
|------|---------|----------|
| Local server URL | Connect to Vault app | Browser storage |
| Authentication token | Secure local API calls | Browser storage |
| User preferences | Extension settings | Browser storage |

### Data Retention

- Data remains until you uninstall the Extension
- You can clear data anytime via browser settings
- No cloud backup or sync

---

## 5. Permissions

The Extension requests the following browser permissions:

| Permission | Purpose | Scope |
|------------|---------|-------|
| `activeTab` | Detect login forms on current tab | Current tab only |
| `<all_urls>` | Autofill on any website | Form fields only |
| `scripting` | Fill form fields | Login forms only |
| `storage` | Save local configuration | Extension only |

### Permission Justification

- **Minimal permissions** — Only what's needed for autofill
- **No background access** — Only active when you visit a login page
- **No network access** — Only `127.0.0.1` (localhost)

---

## 6. Security

### Security Measures

| Measure | Implementation |
|---------|----------------|
| **Local-only communication** | All requests to `127.0.0.1` only |
| **Token authentication** | Required for all API calls |
| **No external connections** | Extension never contacts external servers |
| **Encrypted storage** | Vault app uses strong encryption |
| **No password caching** | Credentials never stored in extension |

### Recommendations

- 🔐 Use a strong master password for LastParadox Vault
- 🔒 Do not share your local authentication token
- 💻 Protect physical access to your device
- 🔄 Keep the Extension and Vault app updated
- 🚫 Do not install from unofficial sources

### Vulnerability Reporting

Found a security issue? Contact us responsibly:
- Email: **security@lastparadox.xyz**
- Do not disclose publicly until patched

---

## 7. Third-Party Services

### What We Use

**None.**

- ❌ No analytics services (Google Analytics, Mixpanel, etc.)
- ❌ No advertising networks
- ❌ No crash reporting services
- ❌ No CDNs or external resources
- ❌ No social media integrations

### External Connections

The Extension makes **zero** external network connections. The only connection is to your local machine (`127.0.0.1`).

---

## 8. GDPR & Your Rights

If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR).

### Your Rights

| Right | Our Response |
|-------|--------------|
| **Right to Access** | No personal data is collected |
| **Right to Rectification** | No personal data to correct |
| **Right to Erasure** | Uninstall Extension to delete all local data |
| **Right to Portability** | No personal data to export |
| **Right to Object** | No processing to object to |
| **Right to Restrict** | No processing to restrict |

### Legal Basis

Since we do not collect or process personal data, GDPR data processing requirements do not apply. The Extension operates entirely locally on your device.

### Data Controller

For GDPR purposes, **you** are the data controller of any credentials stored in your local Vault application. LastParadox does not have access to this data.

---

## 9. Children's Privacy

The Extension is not directed at children under 13 (or 16 in the EEA). We do not knowingly collect data from children. Since no data is collected from any user, this is inherently satisfied.

---

## 10. Changes to This Policy

We may update this Privacy Policy from time to time. Changes will be indicated by:

- Updated "Last Updated" date at the top
- Version number change
- Changelog entry below

### Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 2024 | Initial release |

### Notification

Significant changes will be communicated through:
- Updated policy in Extension store listing
- Notice on our website
- Discord announcement

---

## 11. Contact

For privacy-related questions or concerns:

| Channel | Contact |
|---------|---------|
| **Email** | contact@lastparadox.xyz |
| **Security Issues** | security@lastparadox.xyz |
| **Website** | https://lastparadox.xyz |
| **Discord** | https://discord.gg/nnZGYNU8Dp |

---

<h2 align="center">🤝 Community</h2>

<p align="center">
  <a href="https://discord.gg/nnZGYNU8Dp">
    <img src="https://img.shields.io/badge/Discord-Join%20Us-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"/>
  </a>
  <a href="https://x.com/LastParadox__">
    <img src="https://img.shields.io/badge/X-Follow-000000?style=for-the-badge&logo=x&logoColor=white" alt="X"/>
  </a>
  <a href="https://lastparadox.xyz">
    <img src="https://img.shields.io/badge/Web-lastparadox.xyz-00C853?style=for-the-badge" alt="Website"/>
  </a>
</p>

---

<p align="center">
  <strong>🔐 Your passwords stay with you. Always.</strong>
</p>

<p align="center">
  <sub>© 2024-2025 LastParadox Project — All rights reserved</sub><br/>
  <sub>See <a href="./LEGAL.md">LEGAL.md</a> for full terms</sub>
</p>

