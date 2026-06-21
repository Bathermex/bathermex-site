# Site Bathermex — vitrine CVC (VRV / DRV)

Site vitrine de crédibilité B2B pour Bathermex, construit en **Astro + Tailwind CSS**, déployable
sur **Netlify**. Statique, rapide, polices auto-hébergées (RGPD), prêt pour un éditeur **Keystatic**.

## Démarrer ici
- 🚀 **`GUIDE_DEPLOIEMENT.md`** — mettre le site en ligne sans coder (GitHub → Netlify).
- 📝 **`CONTENU_A_COMPLETER.md`** — tout ce qu'il reste à renseigner (réalisations, mentions, images).

## Où est le contenu
- `src/data/site.ts` — nom, coordonnées, navigation.
- `src/data/content.ts` — réassurance, services, méthode, réalisations, FAQ.
- `src/pages/` — une page par fichier (accueil, services, réalisations, à propos, contact, mentions).
- `public/` — images, favicon, robots.txt, en-têtes de sécurité (`_headers`).

## Commandes (développeur / prestataire)
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Stack
Astro 6 · Tailwind CSS 4 · @astrojs/sitemap · polices Inter + Space Grotesk auto-hébergées.
Hébergement : Netlify (build cloud, Netlify Forms pour le contact).
