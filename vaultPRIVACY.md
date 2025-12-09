<p align="center">
  <img src="https://landing-last.vercel.app/assets/banner5.png" alt="LastParadox Banner" width="100%"/>
</p>

# Politique de confidentialité – LastParadox Vault Autofill
_Date de mise à jour : 12 décembre 2025_

## 1. Introduction
Cette page décrit la manière dont l’extension **LastParadox Vault Autofill** traite vos données. L’extension permet de remplir automatiquement des formulaires de connexion en utilisant les identifiants stockés dans votre application de bureau **LastParadox Vault**. Toutes les opérations sont exécutées **localement sur votre appareil**, de manière **chiffrée**, sans aucun envoi vers un serveur externe.

## 2. Données collectées
**L’extension ne collecte, ne stocke, ni ne transmet aucune donnée personnelle vers un serveur externe.**
Aucun login, aucun email, aucun mot de passe ni historique de navigation n’est envoyé à un tiers. Aucun tracker, analytics ou publicité n’est utilisé.
Les seules données manipulées localement sont :
- L’URL et l’origin de la page visitée
- Les identifiants renvoyés par l’application LastParadox Vault via `http://127.0.0.1`
Ces données restent strictement locales.

## 3. Fonctionnement technique
1. L’extension détecte les champs de login/mot de passe.
2. Elle lit `origin` et `url`.
3. Elle envoie une requête **uniquement vers votre machine locale** : `http://127.0.0.1:4545/vault/autofill`.
4. Votre application LastParadox Vault déchiffre localement vos données, retrouve les identifiants, renvoie login + mot de passe.
5. L’extension autofill automatiquement les champs du formulaire.
**Aucune donnée ne quitte votre ordinateur.**

## 4. Stockage local
L’extension peut stocker en local :
- l’URL du serveur local
- un token d’authentification local
Ces informations ne quittent jamais votre appareil et ne servent qu’à authentifier la communication avec votre application.

## 5. Partage avec des tiers
- Aucun partage de données
- Aucun analytics
- Aucune publicité
- Aucun appel à des APIs externes

## 6. Permissions
L’extension utilise :
- `activeTab` / `<all_urls>` pour détecter les formulaires
- `scripting` pour remplir les champs
- `storage` pour mémoriser la configuration locale
Ces permissions sont strictement limitées à l’autofill.

## 7. Sécurité
- Communication strictement limitée à `127.0.0.1`
- Token d’authentification local obligatoire
- Aucun mot de passe n’est transmis vers Internet
Recommandations : ne pas partager votre token, protéger l’accès physique à votre machine, utiliser un mot de passe maître robuste dans LastParadox Vault.

## 8. Modifications
Cette politique pourra être mise à jour. La date ci-dessus sera actualisée en conséquence.

## 9. Contact
Site officiel : https://lastparadox.xyz  
Email : contact@lastparadox.xyz

---

<h2 align="center">🤝 Community</h2>
<p align="center">
<a href="https://discord.gg/nnZGYNU8Dp">Discord</a> •
<a href="https://x.com/LastParadox__">X (Twitter)</a> •
<a href="https://github.com/Lastexitfromnowhere">GitHub</a>
</p>

---

<h2 align="center">📜 License</h2>
<p align="center">
MIT License © 2025 LastParadox DAO<br/>
contact@lastparadox.xyz • core.bardage@gmail.com<br/>
Founder & CEO: <strong>Etheve Stéphane</strong>
</p>

---

# Privacy Policy – LastParadox Vault Autofill (English)
_Last updated: December 12, 2025_

## 1. Introduction
This document explains how the **LastParadox Vault Autofill** browser extension handles your data. The extension autofills login forms using credentials stored in your **LastParadox Vault** desktop application. All processing is done **locally**, with no external servers involved.

## 2. Data collection
The extension does **not** collect, store, or transmit any personal data to external servers. No login, email, password or browsing data is sent anywhere. No trackers, analytics, advertising or profiling are used.
Handled locally:
- Page origin and URL
- Credentials returned from your local Vault app at `http://127.0.0.1`

## 3. Technical overview
1. Detect login/password fields.  
2. Read `origin` + `url`.  
3. Send a request to: `http://127.0.0.1:4545/vault/autofill`  
4. The Vault desktop app decrypts data locally and returns login + password.  
5. The extension fills the form.  
**Nothing leaves your device.**

## 4. Local storage
The extension may store:
- local server URL  
- local authentication token  
These remain on your device only.

## 5. Third-party sharing
None: no tracking, no analytics, no advertising, no external APIs.

## 6. Permissions
- `activeTab` / `<all_urls>`: detect forms  
- `scripting`: fill fields  
- `storage`: save local config  

## 7. Security
- Communication restricted to `127.0.0.1`
- Local token required
- No password ever leaves your device

## 8. Changes
Updates may occur; the date will reflect modifications.

## 9. Contact
Official website: https://lastparadox.xyz  
Email: contact@lastparadox.xyz
