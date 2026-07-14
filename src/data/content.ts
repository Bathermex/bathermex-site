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
    texte: "Nos ouvrages sont couverts par une garantie décennale (art. 1792 du Code civil). Assureur : ERGO, via APRIL.",
  },
];

// --- Services ------------------------------------------------
export const services = [
  {
    slug: "maintenance",
    image: "/photos/service-maintenance.webp", // photo en fin de bloc (vide = aucune)
    titre: "Contrats de maintenance annuels",
    accroche: "Notre cœur d'activité : votre parc suivi toute l'année, préventif et curatif.",
    detail:
      "Visites planifiées, contrôles d'étanchéité réglementaires, nettoyage, vérification des performances et tenue du registre des fluides. Des formules adaptées à votre parc, du préventif simple à la prise en charge complète, avec priorité d'intervention en dépannage.",
    points: [
      "Visites préventives planifiées selon votre parc",
      "Contrôles d'étanchéité réglementaires et registre des fluides",
      "Priorité d'intervention en dépannage incluse",
    ],
  },
  {
    slug: "sav-depannage",
    image: "/photos/service-sav.webp", // photo en fin de bloc (vide = aucune)
    titre: "SAV & dépannage",
    accroche: "Dépannage et interventions curatives, en contrat ou à la demande.",
    detail:
      "Diagnostic, réparation et remise en service de vos équipements de climatisation. Suivi des interventions et conseil sur le renouvellement lorsque la réparation n'est plus pertinente.",
    points: [
      "Diagnostic et réparation rapides",
      "Interventions curatives planifiées ou d'urgence",
      "Priorité d'intervention pour les clients sous contrat",
    ],
  },
  {
    slug: "installation-vrv-drv",
    image: "/photos/service-installation.webp", // photo en fin de bloc (vide = aucune)
    titre: "Travaux & installation CVC / VRV",
    accroche: "Remplacement, amélioration et installation d'équipements — en complément du contrat ou en projet dédié.",
    detail:
      "Remplacement d'équipements vieillissants ou irréparables, amélioration d'installations existantes et projets neufs : étude, fourniture et pose de groupes extérieurs et unités intérieures, réseaux frigorifiques, raccordements et mise en service. Pour bureaux, commerces, ERP et bâtiments tertiaires.",
    points: [
      "Remplacement d'équipements vieillissants ou irréparables",
      "Installation VRV / DRV neuve, bureaux, commerces et ERP",
      "Rénovation énergétique et travaux de plomberie associés",
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
    titre: "État des lieux du parc",
    texte: "Visite technique de vos installations (clim, CVC, plomberie) et bilan de leur état, même si nous ne les avons pas posées.",
  },
  {
    n: "02",
    titre: "Contrat sur mesure",
    texte: "Formule de maintenance adaptée au parc et à l'usage : fréquence des visites, périmètre, conditions d'intervention.",
  },
  {
    n: "03",
    titre: "Entretien planifié",
    texte: "Visites préventives, contrôles d'étanchéité réglementaires, registre des fluides et travaux préventifs.",
  },
  {
    n: "04",
    titre: "Dépannage & travaux",
    texte: "Interventions curatives, remise en service, et travaux d'amélioration ou de remplacement quand c'est plus pertinent que réparer.",
  },
];

// --- Réalisations -------------------------------------------
// ⚠️ STRUCTURE D'EXEMPLE. Aucune de ces fiches n'est un chantier réel
// publié : chacune est à remplacer par un chantier documenté + photos
// + ACCORD CLIENT (cf. CONTENU_A_COMPLETER.md, point le plus important).
export const realisations = [
  {
    slug: "coworking-marignane",
    placeholder: false,
    image: "/photos/realisation-1.webp",
    titre: "Espace de coworking",
    typologie: "Bureaux / tertiaire",
    lieu: "Marignane",
    contexte: "Espace de coworking de 350 m², redivisé en plusieurs locaux selon les plans.",
    solution: "Installation de climatisation par cassettes plafonnières (VRV / DRV), répartie selon le nouveau découpage des espaces.",
    resultat: "Locaux climatisés et confortables, adaptés à la nouvelle configuration.",
  },
  {
    slug: "magasin-les-docks",
    placeholder: false,
    image: "/photos/realisation-2.webp",
    titre: "Magasin — Les Docks",
    typologie: "Commerce / ERP",
    lieu: "Marseille",
    contexte: "Magasin de 275 m² aux Docks de Marseille.",
    solution: "Mise en place de climatisation gainable.",
    resultat: "Surface de vente climatisée par gainables discrets, intégrés au plafond.",
  },
  {
    slug: "creche-paris",
    placeholder: false,
    image: "/photos/realisation-3.webp",
    titre: "Climatisation d'une crèche",
    typologie: "Crèche / ERP",
    lieu: "Paris",
    contexte: "Crèche à Paris à climatiser pour offrir un confort thermique adapté à l'accueil de jeunes enfants, été comme hiver.",
    solution: "Production installée en toiture technique : groupes extérieurs et réseaux aérauliques calorifugés, avec distribution vers les espaces d'accueil.",
    resultat: "Locaux climatisés et confortables, adaptés à l'accueil des enfants tout au long de l'année.",
  },
];


// Réalisations spécifiques à la page MAINTENANCE (photos réelles d'intervention fournies par Brice).
// N'affiche que typologie / titre / contexte dans les cartes. Aucune donnée client nominative.
export const realisationsMaintenance = [
  { image: "/photos/maintenance-1.webp", typologie: "Maintenance préventive", titre: "Remplacement de filtres", contexte: "Remplacement des filtres d'une centrale de traitement d'air lors d'une visite d'entretien." },
  { image: "/photos/maintenance-2.webp", typologie: "Maintenance curative", titre: "Intervention en chaufferie", contexte: "Intervention sur les réseaux et les organes d'une chaufferie technique." },
  { image: "/photos/maintenance-3.webp", typologie: "Maintenance VRV / DRV", titre: "Entretien d'un groupe VRV", contexte: "Contrôle et entretien d'un groupe extérieur VRV Daikin sur site." },
  { image: "/photos/maintenance-4.webp", typologie: "Maintenance VRV / DRV", titre: "Maintenance de groupes VRV", contexte: "Vérification et maintenance de groupes extérieurs VRV, relevés de pressions." },
];


// Photos d'ENTRETIEN à intercaler dans la page Réalisations (photos réelles fournies par Brice).
// Même structure que les chantiers de pose (Contexte / Solution / Résultat) pour une carte homogène.
export const realisationsEntretien = [
  { entretien: true, image: "/photos/realisation-entretien-1.webp", typologie: "Entretien", titre: "Entretien d'une centrale de traitement d'air",
    contexte: "Centrale de traitement d'air en local technique, à suivre pour garantir la qualité de l'air et les performances.",
    solution: "Contrôle des organes, relevés de pressions et vérification du bon fonctionnement lors d'une visite d'entretien.",
    resultat: "Installation entretenue et fonctionnement fiabilisé." },
  { entretien: true, image: "/photos/realisation-entretien-2.webp", typologie: "Entretien", titre: "Entretien en chaufferie",
    contexte: "Chaufferie technique avec ballon tampon et traitement d'eau, nécessitant un entretien périodique.",
    solution: "Vérification des organes hydrauliques et remplacement des cartouches de filtration.",
    resultat: "Circuit propre et rendement préservé." },
  { entretien: true, image: "/photos/realisation-entretien-3.webp", typologie: "Entretien", titre: "Entretien d'une unité murale",
    contexte: "Unité intérieure murale de climatisation à entretenir régulièrement.",
    solution: "Nettoyage des filtres et de l'échangeur, contrôle du bon fonctionnement de l'unité.",
    resultat: "Confort et qualité d'air maintenus, consommation maîtrisée." },
  { entretien: true, image: "/photos/realisation-entretien-4.webp", typologie: "Entretien", titre: "Suivi d'une chaufferie de distribution",
    contexte: "Chaufferie de distribution avec circulateurs et collecteurs desservant le bâtiment.",
    solution: "Contrôle des circulateurs, des vannes et des réseaux, vérification des paramètres.",
    resultat: "Distribution équilibrée et installation suivie dans la durée." },
];

// Exemple de RÉDACTION (montre le ton/longueur attendus, à remplacer)
// --- Aperçu accueil (3 photos PROPRES à l'accueil, indépendantes des réalisations) ---
export const apercuAccueil = [
  { image: "/photos/realisation-3.webp", typologie: "Bureaux / tertiaire", titre: "〔Chantier 1 — titre〕", contexte: "〔Contexte : type de bâtiment, surface, problématique de départ.〕" },
  { image: "/photos/accueil-2.webp", typologie: "Commerce / ERP", titre: "〔Chantier 2 — titre〕", contexte: "〔Contexte du chantier.〕" },
  { image: "/photos/accueil-3.webp", typologie: "Rénovation", titre: "〔Chantier 3 — titre〕", contexte: "〔Contexte du chantier.〕" },
];

export const realisationExempleRedige = {
  titre: "Concession automobile",
  image: "/photos/realisation-4.webp",
  typologie: "Bureaux / tertiaire",
  lieu: "Aubagne",
  contexte: "Aménagement des bureaux d'une concession automobile, 480 m², à Aubagne.",
  solution: "Installation de climatisation (gainable et cassette) intégrée à l'aménagement des bureaux.",
  resultat: "Bureaux climatisés, livrés avec l'aménagement.",
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
