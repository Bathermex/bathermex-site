// ============================================================
// CONTENU ÉDITORIAL
// Ton : sobre, expert, factuel (crédibilité, pas vente agressive).
// ⚠️ Aucune certification / chiffre / chantier n'est inventé : tout ce
// qui doit être prouvé est en placeholder 〔 〕.
// ============================================================

// --- Bandeau de réassurance (page d'accueil) -----------------
export const reassurance = [
  {
    titre: "Spécialiste VRV / DRV",
    texte: "Détente directe à débit de réfrigérant variable : notre cœur de métier sur le tertiaire.",
  },
  {
    titre: "Deux implantations",
    texte: "Allauch (13) et Paris / Île-de-France, pour intervenir au plus près de vos sites.",
  },
  {
    titre: "Fluides frigorigènes",
    texte: "Mises en service et manipulations réalisées par du personnel attesté. 〔À CONFIRMER : mention exacte de la catégorie d'attestation〕",
  },
  {
    titre: "Assurance décennale",
    texte: "Nos ouvrages sont couverts par une garantie décennale (art. 1792 du Code civil). 〔À COMPLÉTER : assureur〕",
  },
];

// --- Services ------------------------------------------------
export const services = [
  {
    slug: "installation-vrv-drv",
    image: "/photos/service-installation.webp", // photo en fin de bloc (vide = aucune)
    titre: "Installation VRV / DRV",
    accroche: "Conception et pose de systèmes à détente directe pour le tertiaire.",
    detail:
      "Étude de dimensionnement, fourniture et installation de groupes extérieurs et unités intérieures, réseaux frigorifiques cuivre, raccordements électriques et mise en service. Pour bureaux, commerces, ERP et bâtiments tertiaires neufs ou en rénovation.",
    points: [
      "Bureaux, plateaux et open-spaces",
      "Commerces et locaux recevant du public",
      "Neuf et rénovation énergétique",
    ],
  },
  {
    slug: "maintenance",
    image: "/photos/service-maintenance.webp", // photo en fin de bloc (vide = aucune)
    titre: "Maintenance préventive",
    accroche: "Contrats d'entretien pour préserver performance et durée de vie des installations.",
    detail:
      "Visites planifiées, contrôles d'étanchéité réglementaires, nettoyage, vérification des performances et tenue du registre des fluides. Des niveaux de prestation adaptés à votre parc (du préventif simple à la prise en charge complète).",
    points: [
      "Visites préventives planifiées",
      "Contrôle d'étanchéité et registre fluides",
      "Plusieurs niveaux de contrat selon le parc",
    ],
  },
  {
    slug: "sav-depannage",
    image: "/photos/service-sav.webp", // photo en fin de bloc (vide = aucune)
    titre: "SAV & dépannage",
    accroche: "Intervention sur panne pour limiter l'impact sur votre exploitation.",
    detail:
      "Diagnostic, réparation et remise en service de vos équipements de climatisation. Suivi des interventions et conseil sur le renouvellement lorsque la réparation n'est plus pertinente.",
    points: [
      "Diagnostic et réparation",
      "Remise en service",
      "Conseil renouvellement / remplacement",
    ],
  },
  {
    slug: "appels-offres",
    image: "", // photo en fin de bloc (vide = aucune)
    titre: "Marchés & appels d'offres",
    accroche: "Réponse aux consultations privées et marchés publics CVC.",
    detail:
      "Bathermex intervient en direct, en sous-traitance déclarée pour des entreprises générales, et répond aux appels d'offres du secteur tertiaire. Mémoire technique, chiffrage et coordination de chantier.",
    points: [
      "Tertiaire B2B direct",
      "Sous-traitance déclarée (loi 75-1334)",
      "Marchés publics (MAPA)",
    ],
  },
];

// --- Méthode (signature : le « pipeline » frigorifique) ------
export const methode = [
  {
    n: "01",
    titre: "Étude & dimensionnement",
    texte: "Bilan des besoins, sélection des équipements et chiffrage détaillé par lot.",
  },
  {
    n: "02",
    titre: "Installation",
    texte: "Pose des groupes, unités et réseaux frigorifiques cuivre, raccordements et coordination chantier.",
  },
  {
    n: "03",
    titre: "Mise en service F-Gas",
    texte: "Mise en route, contrôles, charge des fluides et constitution des documents réglementaires.",
  },
  {
    n: "04",
    titre: "Maintenance",
    texte: "Suivi dans la durée : préventif, contrôle d'étanchéité et réactivité en cas de panne.",
  },
];

// --- Réalisations -------------------------------------------
// ⚠️ STRUCTURE D'EXEMPLE. Aucune de ces fiches n'est un chantier réel
// publié : chacune est à remplacer par un chantier documenté + photos
// + ACCORD CLIENT (cf. CONTENU_A_COMPLETER.md, point le plus important).
export const realisations = [
  {
    slug: "exemple-1",
    placeholder: true,
    image: "/photos/realisation-1.webp", // ex. "/realisations/chantier-1.jpg" — déposer le fichier dans public/realisations/
    titre: "〔Chantier 1 — titre〕",
    typologie: "Bureaux / tertiaire",
    lieu: "〔Lieu〕",
    contexte: "〔Contexte : type de bâtiment, surface, problématique de départ.〕",
    solution: "〔Solution Bathermex : équipements posés, particularités techniques.〕",
    resultat: "〔Résultat : confort, performance, délai, satisfaction client.〕",
  },
  {
    slug: "exemple-2",
    placeholder: true,
    image: "/photos/realisation-2.webp",
    titre: "〔Chantier 2 — titre〕",
    typologie: "Commerce / ERP",
    lieu: "〔Lieu〕",
    contexte: "〔Contexte du chantier.〕",
    solution: "〔Solution mise en œuvre.〕",
    resultat: "〔Résultat obtenu.〕",
  },
  {
    slug: "exemple-3",
    placeholder: true,
    image: "/photos/realisation-3.webp",
    titre: "〔Chantier 3 — titre〕",
    typologie: "Rénovation",
    lieu: "〔Lieu〕",
    contexte: "〔Contexte du chantier.〕",
    solution: "〔Solution mise en œuvre.〕",
    resultat: "〔Résultat obtenu.〕",
  },
];

// Exemple de RÉDACTION (montre le ton/longueur attendus, à remplacer)
// --- Aperçu accueil (3 photos PROPRES à l'accueil, indépendantes des réalisations) ---
export const apercuAccueil = [
  { image: "/photos/accueil-1.webp", typologie: "Bureaux / tertiaire", titre: "〔Chantier 1 — titre〕", contexte: "〔Contexte : type de bâtiment, surface, problématique de départ.〕" },
  { image: "/photos/accueil-2.webp", typologie: "Commerce / ERP", titre: "〔Chantier 2 — titre〕", contexte: "〔Contexte du chantier.〕" },
  { image: "/photos/accueil-3.webp", typologie: "Rénovation", titre: "〔Chantier 3 — titre〕", contexte: "〔Contexte du chantier.〕" },
];

export const realisationExempleRedige = {
  titre: "〔Chantier 4 — titre〕",
  image: "/photos/realisation-4.webp",
  typologie: "〔Typologie〕",
  lieu: "〔Lieu〕",
  contexte: "〔Contexte : type de bâtiment, surface, problématique de départ.〕",
  solution: "〔Solution Bathermex : équipements posés, particularités techniques.〕",
  resultat: "〔Résultat : confort, performance, délai, satisfaction client.〕",
};

// --- FAQ (réassurance + SEO léger) ---------------------------
export const faq = [
  {
    q: "Quelle différence entre VRV et DRV ?",
    r: "VRV (Variable Refrigerant Volume) est la marque déposée par Daikin ; DRV (Débit de Réfrigérant Variable) en est le terme générique. Les deux désignent une climatisation à détente directe modulant le débit de fluide selon les besoins de chaque zone.",
  },
  {
    q: "Intervenez-vous en dehors de la région PACA ?",
    r: "Oui. Au-delà de notre base d'Allauch (13), nous disposons d'une implantation en Île-de-France et intervenons sur des chantiers tertiaires à Paris et en région parisienne.",
  },
  {
    q: "Proposez-vous des contrats de maintenance ?",
    r: "Oui, avec plusieurs niveaux de prestation selon votre parc, du préventif planifié à une prise en charge plus complète incluant les contrôles réglementaires.",
  },
  {
    q: "Travaillez-vous en sous-traitance pour des entreprises générales ?",
    r: "Oui, en sous-traitance déclarée. Nous répondons également aux marchés publics (MAPA) et aux consultations privées du secteur tertiaire.",
  },
];

// --- Photos de fond des bandeaux "hero" --------------------------
// Vide "" = pas de photo (le bandeau garde son style par défaut, propre).
// Renseigner le chemin (ex. "/photos/hero-services.jpg") active la photo.
export const heroImages = {
  accueil: "/photos/hero-accueil.webp",
  services: "/photos/hero-services.webp",
  realisations: "",
  aPropos: "/photos/hero-a-propos.webp",
  contact: "",
};
