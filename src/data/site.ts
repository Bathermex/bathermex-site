// ============================================================
// CONFIGURATION CENTRALE DU SITE
// Tout ce qui est entre 〔 〕 est un PLACEHOLDER : à remplacer par
// Brice avant mise en ligne (liste complète : CONTENU_A_COMPLETER.md).
// Les liens tél/email ne deviennent cliquables que si la valeur est
// renseignée (pas de lien cassé tant qu'un placeholder est présent).
// ============================================================

export const site = {
  name: "Bathermex",
  baseline: "Climatisation tertiaire VRV / DRV",
  // Phrase d'accroche
  tagline: "Contrats de maintenance annuels, travaux préventifs et interventions curatives sur vos installations de climatisation, CVC / VRV et plomberie, en PACA et en Île-de-France.",
  description:
    "Bathermex, maintenance de climatisation CVC / VRV et plomberie : contrats annuels, maintenance préventive et curative, dépannage. Bureaux, commerces et ERP, sur deux implantations : Allauch (13) et Paris / Île-de-France.",

  zones: ["PACA", "Île-de-France"],

  bases: [
    { ville: "Allauch", cp: "13190", region: "Bouches-du-Rhône" },
    { ville: "Paris / Île-de-France", cp: "", region: "" },
  ],

  contact: {
    tel: "04 42 72 14 56",
    email: "bathermex@bathermex.com",
    adresse: "Chemin des Monts Blancs",
    cpVille: "13190 Allauch",
  },

  // Identité légale — le reste (SIRET, RCS, TVA, capital, assureur décennale)
  // est renseigné dans la page mentions-legales.
  legal: {
    raisonSociale: "SAS Bathermex",
    forme: "SAS",
  },
