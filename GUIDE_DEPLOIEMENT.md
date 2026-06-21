# Mettre ton site en ligne — version pas à pas (zéro informatique)

Tu n'as **aucune ligne à taper**. Tu fais des **clics**. Prends ton temps, suis l'ordre.

---

## D'abord, le principe en 30 secondes

Deux outils gratuits travaillent ensemble :

- **GitHub** = un grand classeur en ligne où sont rangés les fichiers de ton site.
  👉 Tu viens d'y déposer les fichiers : cette partie est presque finie.
- **Netlify** = l'atelier qui va chercher les fichiers dans le classeur GitHub, fabrique le
  site, et l'affiche sur internet pour que tout le monde puisse le voir.
  👉 C'est lui qui « héberge » ton site (= le garde en ligne).

**Trois mots à connaître :**
- **Mettre en ligne / déployer** = rendre ton site visible sur internet.
- **Commit** (un bouton sur GitHub) = « Enregistrer ». Ça valide tes changements.
- **Nom de domaine** = l'adresse de ton site, par exemple `bathermex.com`.

> ℹ️ Netlify et GitHub sont en anglais. Je te donne le **mot exact du bouton** à chaque fois.
> Si un bouton a un nom légèrement différent (l'interface change parfois), cherche un mot
> proche au même endroit — ou envoie-moi une capture, je te dis où cliquer.

---

## Étape 1 — GitHub : valider les fichiers (tu y es presque)

Tu as déjà glissé les fichiers. Il reste **un clic** :

1. En bas de la page où tu as déposé les fichiers, clique le bouton vert **Commit changes**
   (= « Enregistrer les modifications »).

C'est tout pour GitHub. Tes fichiers sont rangés. ✅

---

## Étape 2 — Netlify : mettre le site en ligne (l'étape qui compte)

1. Va sur **app.netlify.com**.
2. Crée un compte. Le plus simple : clique **Sign up with GitHub** (= « S'inscrire avec GitHub »).
   Ça relie directement ton classeur GitHub à l'atelier Netlify.
3. Une fois connecté, clique le bouton **Add new site** (ou **Add new project** selon la version)
   = « Ajouter un site ». Puis choisis **Import an existing project** (= « Importer un projet existant »).
4. Choisis **GitHub** → autorise Netlify si on te le demande → dans la liste, clique ton site
   **bathermex-site**.
5. Netlify lit tout seul les réglages (il sait déjà comment fabriquer le site).
   **Tu ne touches à rien.** Clique le bouton **Deploy** (ou **Deploy site** = « Publier »).
6. Patiente 1 à 2 minutes. Netlify affiche alors une adresse du type
   `https://un-nom-au-hasard.netlify.app`. **Clique dessus : ton site est en ligne.** 🎉

> Au début, l'adresse est « moche » (un nom au hasard). C'est normal. On mettra une vraie
> adresse (`bathermex.com`) plus tard, quand tu seras prêt.

---

## Étape 3 — Recevoir par email les messages du formulaire

Quand un visiteur remplit le formulaire de la page **Contact** et clique « Envoyer », son
message est rangé dans Netlify. Pour qu'il t'arrive **aussi par email** (plus pratique), tu
règles ça **une seule fois** :

1. Dans Netlify, clique sur ton site.
2. En haut, va dans **Project configuration** (= « Configuration du projet »).
3. Dans le menu de gauche, clique **Notifications**.
4. Trouve la section **Form submission notifications** (= « Notifications d'envoi de formulaire »),
   puis clique **Add notification** (= « Ajouter une notification ») → **Email notification**.
5. Dans le champ qui s'affiche, mets **l'adresse email** où tu veux recevoir les messages.
   Clique **Save** (= « Enregistrer »).

À partir de là, chaque message envoyé depuis le site t'arrive par email, et tu peux **répondre
directement au client**.

> ⚠️ Deux choses à savoir :
> - L'onglet **Forms** / les notifications n'apparaissent **qu'après** que le site est en ligne.
>   Si tu ne vois rien tout de suite, c'est normal.
> - Le tout premier email peut tomber dans tes **spams** : pense à vérifier.
> - **Teste-le** : va sur ton site en ligne → page Contact → remplis et envoie. Le message doit
>   apparaître dans Netlify et l'email arriver.

---

## ⏸️ Le reste : PLUS TARD (n'y touche pas maintenant)

### Mettre une vraie adresse (`bathermex.com`) — optionnel

1. Il faut d'abord **acheter le nom de domaine** chez une société qui les vend (les plus connues
   en France : **OVH**, **Gandi**, **Ionos**). Compte ~10 à 15 € par an.
2. Ensuite, dans Netlify : ton site → **Project configuration** → **Domain management**
   (= « Gestion du domaine ») → **Add a domain** (= « Ajouter un domaine ») → tape ton adresse.
3. Netlify te donne des réglages techniques à recopier chez OVH/Gandi. **C'est l'étape la plus
   pénible.** Quand tu en seras là : **dis-le-moi, je te guide écran par écran**, ou ton
   prestataire le fait en 5 minutes.

👉 **Pour l'instant, ignore cette partie.** Ton site marche très bien avec l'adresse Netlify.

### Changer un texte, un numéro, ajouter une réalisation — bientôt en plus simple

Aujourd'hui, ça se modifie en ouvrant un fichier sur GitHub (faisable, mais un peu technique).
**Je préfère t'installer un outil dédié** appelé **Keystatic** : une page privée sur ton site où
tu modifies les textes et les photos **comme dans Word**, sans jamais toucher aux fichiers.

👉 Dès que ton site est en ligne, dis-moi **« installe l'éditeur »** et je m'en occupe. En
attendant, quand tu auras tes vraies infos (réalisations, coordonnées…), **envoie-les-moi : je
les intègre pour toi.**

---

## 🔧 Tout en bas : partie réservée à un informaticien — IGNORE

> Ce bloc ne te concerne pas. Il sert uniquement à un développeur qui voudrait voir le site sur
> son propre ordinateur. Tu n'en as **pas besoin** : tu vois ton site directement en ligne.

```bash
npm install
npm run dev
npm run build
```
