# Mettre le site en ligne — guide pas à pas (sans coder)

Ce projet est un site **Astro** statique, prêt à être déployé. Tu n'as **aucune commande à taper** :
c'est Netlify qui construit le site pour toi, dans le cloud. Tu fais des **clics**, pas du code.

> Avant la mise en ligne réelle : accord du gérant + vérification des mentions légales et des
> contenus (cf. `CONTENU_A_COMPLETER.md`). Tant que des placeholders 〔…〕 sont visibles, le site
> est « en préparation ».

---

## Étape 1 — Déposer le code sur GitHub (≈ 5 min)

1. Va sur **github.com**, connecte-toi.
2. En haut à droite, bouton **+** → **New repository**.
3. **Repository name** : `bathermex-site`. Coche **Private**. Clique **Create repository**.
4. Sur la page du dépôt vide, clique le lien **« uploading an existing file »**
   (ou bouton **Add file → Upload files**).
5. **Décompresse** le fichier `bathermex-site.zip` sur ton ordinateur, puis **glisse-dépose tout
   le contenu du dossier** (pas le dossier lui-même : son contenu) dans la zone d'upload.
   - ⚠️ Le dossier `node_modules` n'est volontairement **pas** dans le zip : c'est normal, Netlify
     l'installe tout seul.
6. En bas, clique **Commit changes**.

> Si le glisser-déposer d'un dossier ne marche pas dans ton navigateur : installe **GitHub Desktop**
> (gratuit), il copie les fichiers proprement. Ou demande-moi une variante.

---

## Étape 2 — Connecter Netlify (≈ 3 min)

1. Va sur **app.netlify.com**, crée un compte (le plus simple : **« Sign up with GitHub »**).
2. Bouton **Add new site** → **Import an existing project**.
3. Choisis **GitHub** → autorise Netlify → sélectionne le dépôt **bathermex-site**.
4. Netlify lit automatiquement le fichier `netlify.toml` :
   - Build command : `npm run build`
   - Publish directory : `dist`
   Tu n'as **rien à changer**. Clique **Deploy**.
5. Au bout d'1–2 min, ton site est en ligne sur une adresse type
   `https://nom-aleatoire.netlify.app`. ✅

---

## Étape 3 — Recevoir les messages du formulaire (≈ 2 min)

Le formulaire de contact utilise **Netlify Forms** (inclus, gratuit jusqu'à 100 envois/mois).

1. Dans Netlify : onglet **Forms** (il apparaît après le 1er déploiement).
2. Le formulaire **`contact`** y figure. Clique dessus → **Settings / Notifications**.
3. Ajoute une **notification par email** vers ton adresse de réception.

> Teste : remplis le formulaire sur le site en ligne, tu dois voir l'envoi apparaître dans Netlify.

---

## Étape 4 — Nom de domaine (optionnel, quand tu es prêt)

1. Netlify → **Domain settings** → **Add a domain** → saisis ton domaine (ex. `bathermex.fr`).
2. Suis les instructions DNS de Netlify (à reporter chez ton registrar : OVH, Gandi…).
3. Une fois le domaine actif, modifie `https://bathermex.fr` dans **2 fichiers** :
   `astro.config.mjs` et `public/robots.txt` (édition directe sur GitHub, voir ci-dessous).

---

## Modifier le contenu plus tard (sans coder)

Le contenu vit dans des fichiers texte. Deux façons de l'éditer :

**A. Direct sur GitHub (disponible tout de suite, zéro installation)**
- Sur github.com → ton dépôt → ouvre le fichier (ex. `src/data/site.ts` pour tes coordonnées,
  `src/data/content.ts` pour services / réalisations / FAQ) → icône **crayon** → modifie →
  **Commit changes**. Netlify reconstruit et publie automatiquement en ~1 min.

**B. Éditeur visuel Keystatic (étape suivante — je te le prépare quand tu veux)**
- Keystatic ajoute une interface d'édition à `tonsite/keystatic` (titres, textes, photos en
  point-and-click). C'est l'étape S3 de ton plan. Recommandation pour l'authentification sans
  prise de tête : **Keystatic Cloud** (gratuit jusqu'à 3 éditeurs), qui évite la config GitHub OAuth
  manuelle. À activer une fois le site en ligne et le contenu réel intégré.

---

## Tester en local (pour un développeur / prestataire, facultatif)

```bash
npm install
npm run dev      # aperçu sur http://localhost:4321
npm run build    # génère le dossier dist/ (ce que Netlify fait)
```
