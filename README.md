# Prince Koucheme Portfolio

Portfolio personnel de Prince Koucheme, construit avec React et Vite. Le site presente son profil, ses services, ses competences, ses projets et un formulaire de contact dans une interface sombre, technique et responsive.

## Stack

- React 18
- Vite
- React Router
- Framer Motion
- GSAP
- Three.js
- CSS custom properties

## Installation

```bash
npm install
```

## Developpement

```bash
npm run dev
```

Le serveur Vite affiche ensuite l'URL locale a ouvrir dans le navigateur.

## Build

```bash
npm run build
```

## Apercu de production

```bash
npm run preview
```

## Structure

- `src/components` : sections et composants reutilisables.
- `src/pages` : pages principales et pages de detail.
- `src/index.css` : theme global, responsive et styles des sections.
- `public` : assets statiques, favicon, manifest, sitemap et robots.

## Deploiement

Le projet contient une configuration Netlify via `netlify.toml`. Apres un build, le dossier de sortie Vite peut etre deploye sur Netlify.
