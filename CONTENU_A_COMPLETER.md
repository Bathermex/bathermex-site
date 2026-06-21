# À compléter avant la mise en ligne

Tout ce qui est entre 〔 〕 dans le site est un **placeholder**. Le site les affiche en évidence
(et n'active pas les liens tél/email tant qu'ils ne sont pas remplis) : rien de faux ne part en ligne
par accident. Voici la liste, par ordre de priorité.

---

## 🟥 Priorité 1 — Les RÉALISATIONS (le bloc le plus important)

Une vitrine de crédibilité se joue sur la **preuve par tes chantiers réels**. C'est ce qui te
distingue d'un site générique.

Pour **2 à 3 chantiers**, dans `src/data/content.ts` (tableau `realisations`) :
- `titre`, `typologie`, `lieu`
- `contexte` (bâtiment, surface, problématique de départ)
- `solution` (équipements posés, particularités techniques)
- `resultat` (confort, performance, délai, satisfaction)
- `image` → chemin de la photo (voir « Ajouter une photo » plus bas)

> ⚠️ **Règle non négociable** : ce sont des **photos réelles de tes chantiers**, avec **accord du
> client** (et anonymisation si le client ne veut pas être nommé). Ne mets **jamais** de photo de
> banque d'images en « réalisation » : sur une vitrine de crédibilité, c'est contre-productif et
> trompeur. Le stock ne sert que pour le décoratif (voir section images).

L'exemple rédigé sur la page Réalisations (`realisationExempleRedige`) montre le **ton et la longueur
attendus** : retire-le une fois tes vrais chantiers en ligne.

---

## 🟧 Priorité 2 — Coordonnées (`src/data/site.ts`)
- `tel` — téléphone
- `email` — adresse de réception du formulaire
- `adresse` — adresse postale (la ville `13190 Allauch` est déjà en place)
- `linkedin` (optionnel) — URL de la page LinkedIn (laisser vide masque le lien)

## 🟧 Priorité 3 — Mentions légales (`src/pages/mentions-legales.astro`) — obligatoire avant mise en ligne
- Forme juridique, capital, **SIRET**, **RCS**, **TVA intracommunautaire**
- Adresse du siège, responsable de la publication, email/téléphone de contact
- Durée de conservation des données (RGPD)

## 🟨 Priorité 4 — Textes « À propos » (`src/pages/a-propos.astro`)
- Présentation de Bathermex (histoire, positionnement)
- Équipe et savoir-faire — **n'indique des certifications que si elles sont avérées et vérifiables**
  (pas de label inventé : risque juridique).

## 🟨 Priorité 5 — Mentions à confirmer (`src/data/content.ts`, bloc `reassurance`)
- F-Gas : **mention exacte de la catégorie d'attestation** fluides frigorigènes
- Décennale : **nom de l'assureur** (et n° de police si tu veux l'afficher)

---

## 📷 Images — où en trouver de qualité (ta question)

### Pour le **décoratif** uniquement (hero, illustration de services) — JAMAIS pour les réalisations

**Gratuit, usage commercial, sans attribution obligatoire (le plus simple) :**
- **Pexels** — pexels.com → cherche `HVAC`, `climatisation`, `air conditioning installation`, `ventilation`, `technicien`
- **Unsplash** — unsplash.com → mêmes mots-clés
- **Pixabay** — pixabay.com

> C'est le « concurrent » d'iStock que je te recommande en premier : qualité correcte, **gratuit**,
> et licence claire pour un usage commercial. Vérifie toujours la licence affichée sur la photo.

**Payant (banques d'images — concurrents directs d'iStock, plus profonds en visuels techniques CVC) :**
- **Adobe Stock** (stock.adobe.com) — le mieux fourni en VRV / groupes / unités / réseaux cuivre. Cherche `VRV system`, `air handling unit`, `refrigerant pipe`, `HVAC technician`.
- **Shutterstock** — large catalogue équivalent.
- **Getty Images** — premium.

**Sur iStock (ton lien)** : les images y sont **payantes** (à l'image ou par abonnement). Tu ne peux
les utiliser **qu'après achat de la licence** — ne récupère jamais une image sans l'acheter
(filigrane = non libre de droits). Si tu prends un abonnement, c'est utilisable ; sinon, passe par
Pexels/Unsplash.

### Le vrai bon plan crédibilité
Tes **propres photos de chantier au smartphone** (avant/après, équipe au travail, GE/UI installés,
réseaux propres) valent **plus que n'importe quelle photo stock** pour rassurer un prospect tertiaire.
Privilégie-les partout où c'est possible.

### Ajouter une photo au site
1. Dépose le fichier (ex. `chantier-1.jpg`) dans le dossier **`public/realisations/`**
   (sur GitHub : *Add file → Upload files*).
2. Dans `src/data/content.ts`, renseigne le champ `image` du chantier :
   `image: "/realisations/chantier-1.jpg"`.
3. Commit → Netlify republie. La photo remplace automatiquement le placeholder « Photo chantier ».
   - Format conseillé : **JPG/WebP**, largeur ~1600 px, < 400 Ko (compresse via squoosh.app si besoin).

---

## ▶️ Étapes suivantes (après la 1ʳᵉ mise en ligne)
1. **Éditeur visuel Keystatic** (S3 de ton plan) : interface point-and-click pour éditer textes/photos.
   Recommandation auth sans friction : **Keystatic Cloud** (gratuit ≤ 3 éditeurs). Je te le câble quand tu veux.
2. **Durcir la sécurité** : resserrer la politique CSP (actuellement permissive pour garantir un
   1ᵉʳ déploiement sans accroc).
3. **Mesure d'audience sans cookie** (optionnel) : Plausible ou Matomo, RGPD-friendly.

> Tous ces livrables client (textes, fiches chantier, mentions) restent à valider par Alain / le
> gérant et engagent la décennale (art. 1792) : feu vert direction avant publication.
