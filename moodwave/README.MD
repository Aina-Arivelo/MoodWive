```markdown
# 🌊 MoodWave

**Générateur de playlist selon ton humeur**

MoodWave est une application web qui génère instantanément une playlist de musique libre de droits adaptée à ton état d’esprit. Choisis une humeur, et l’application te propose 12 titres que tu peux écouter directement.

Projet de portfolio réalisé avec React, Tailwind CSS et l’API Jamendo.

---

## ✨ Fonctionnalités

- Sélection d’humeur en un clic (Joyeux, Calme, Sport, Concentration, Mélancolique)
- Génération automatique d’une playlist de 12 titres libres de droits
- Lecteur audio complet (lecture / pause, précédent, suivant, volume, barre de progression)
- Disque vinyle animé qui tourne pendant la lecture
- Thème **glassy** (glassmorphism) avec changement de palette de couleurs selon l’humeur
- Mode démo automatique si aucune clé API n’est configurée
- Design responsive (mobile + desktop)
- Accessible (contrastes, focus clavier, zones tactiles ≥ 44px)

---

## 🎨 Direction artistique

| Humeur          | Couleur principale     | Code couleur |
|-----------------|------------------------|--------------|
| Joyeux          | Ambre chaud            | `#f59e0b`    |
| Calme           | Turquoise profond      | `#2dd4bf`    |
| Sport           | Rouge-orange énergique | `#f97316`    |
| Concentration   | Violet nuit            | `#a78bfa`    |
| Mélancolique    | Bleu pluie             | `#60a5fa`    |

- Typographie : **Playfair Display** (titres) + **Inter** (interface)
- Effet verre dépoli (backdrop-blur + transparence)
- Mise en page 2 colonnes sur desktop, 1 colonne sur mobile

---

## 🛠️ Stack technique

**Frontend**
- React 18 + Vite
- Tailwind CSS
- Axios

**Backend**
- Node.js + Express
- Axios (appels à l’API Jamendo)
- dotenv

**API externe**
- [Jamendo API](https://developer.jamendo.com) (musique Creative Commons)

---

## 📁 Structure du projet

```
moodwave/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/     # Header, Player, Vinyl, Playlist, etc.
│   │   ├── hooks/          # useAudioPlayer
│   │   ├── services/       # Appels API
│   │   ├── data/           # Données des humeurs
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/         # Configuration Jamendo
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/       # Service Jamendo
│   │   ├── data/           # Pistes de démonstration
│   │   └── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Installation et lancement

### Prérequis
- Node.js 18 ou supérieur
- Un compte développeur Jamendo (gratuit)

### 1. Cloner le projet
```bash
git clone https://github.com/ton-username/moodwave.git
cd moodwave
```

### 2. Configurer le backend

```bash
cd backend
npm install
```

Crée un fichier `.env` à la racine du dossier `backend` :

```env
PORT=3001
JAMENDO_CLIENT_ID=ton_client_id_ici
```

> Comment obtenir un Client ID ?  
> 1. Va sur [https://devportal.jamendo.com](https://devportal.jamendo.com)  
> 2. Crée un compte / connecte-toi  
> 3. Crée une nouvelle application  
> 4. Copie le **Client ID**

### 3. Lancer le backend
```bash
npm run dev
```
Le serveur démarre sur `http://localhost:3001`

### 4. Configurer et lancer le frontend

Ouvre un **nouveau terminal** :

```bash
cd frontend
npm install
npm run dev
```

L’application est accessible sur **http://localhost:5173**

---

## 🔑 Mode démo

Si aucun `JAMENDO_CLIENT_ID` n’est renseigné (ou en cas d’erreur API), l’application bascule automatiquement en **mode démo** avec des pistes de démonstration.  
Un message clair s’affiche pour informer l’utilisateur.

---

## 📱 Responsive

- Desktop : mise en page en deux colonnes (lecteur à gauche, playlist à droite)
- Mobile (à partir de 390px) : une seule colonne, composants empilés

---

## ♿ Accessibilité

- Contrastes respectés
- Focus clavier visible
- Zones tactiles minimum 44 × 44 px
- Support de `prefers-reduced-motion`

---

## 📄 Licence

Projet réalisé dans un cadre de portfolio.  
La musique provient de l’API Jamendo et reste sous licence Creative Commons selon les conditions de chaque artiste.

---

## 👨‍💻 Auteur

Safidiniaina Rakotoarivelo – Projet portfolio 2026

---

Fait avec ❤️ et beaucoup de Tailwind.
```