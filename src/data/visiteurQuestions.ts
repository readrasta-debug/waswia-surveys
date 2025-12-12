export interface Question {
  id: string;
  label: string;
  type: 'radio' | 'checkbox' | 'text' | 'textarea' | 'number';
  options?: string[];
  required?: boolean;
  placeholder?: string;
  maxSelect?: number;
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}

export const visiteurSections: Section[] = [
  {
    id: 'A',
    title: 'A. Profil visiteur',
    description: 'Informations sur votre profil',
    questions: [
      {
        id: 'type_visiteur',
        label: '1. Vous êtes',
        type: 'radio',
        options: ['Résident', 'Diaspora en visite', 'Touriste', 'Autre'],
        required: true,
      },
      {
        id: 'sexe',
        label: '2. Sexe',
        type: 'radio',
        options: ['Femme', 'Homme', 'Préfère ne pas répondre'],
        required: true,
      },
      {
        id: 'age',
        label: '3. Âge',
        type: 'radio',
        options: ['-18', '18-24', '25-34', '35-44', '45-54', '55+'],
        required: true,
      },
      {
        id: 'ville_ile',
        label: '4. Ville / Île',
        type: 'text',
        placeholder: 'Votre ville ou île',
      },
      {
        id: 'motif_visite',
        label: '5. Motif de visite au salon',
        type: 'checkbox',
        options: ['Achat', 'Curiosité', 'Cadeau', 'Accompagner', 'Recherche commande spéciale'],
      },
    ],
  },
  {
    id: 'B',
    title: "B. Habitudes d'achat d'artisanat",
    description: 'Vos habitudes de consommation',
    questions: [
      {
        id: 'achat_artisanat',
        label: '6. Achetez-vous de l\'artisanat local habituellement ?',
        type: 'radio',
        options: ['Souvent', 'Parfois', 'Rarement', 'Jamais'],
        required: true,
      },
      {
        id: 'produits_achetes',
        label: '7. Qu\'achetez-vous le plus ? (max 3)',
        type: 'checkbox',
        options: ['Vêtements', 'Bijoux', 'Décoration', 'Vannerie', 'Cosmétiques naturels', 'Objets souvenirs', 'Produits alimentaires artisanaux', 'Autre'],
        maxSelect: 3,
      },
      {
        id: 'occasions_achat',
        label: '8. Occasions d\'achat',
        type: 'checkbox',
        options: ['Mariage', 'Fêtes', 'Cadeaux', 'Déco maison', 'Usage quotidien', 'Tourisme'],
      },
      {
        id: 'budget_moyen',
        label: '9. Votre budget moyen par achat',
        type: 'radio',
        options: ['<5k', '5-10k', '10-25k', '25-50k', '50-100k', '+100k KMF'],
      },
    ],
  },
  {
    id: 'C',
    title: 'C. Ce qui vous fait acheter (ou pas)',
    description: 'Vos critères de décision',
    questions: [
      {
        id: 'criteres_importants',
        label: '10. Critères les plus importants (choisir 5 max)',
        type: 'checkbox',
        options: ['Qualité / finitions', 'Prix', 'Originalité', 'Durabilité', 'Authenticité', 'Design moderne', 'Histoire du produit', 'Réputation de l\'artisan'],
        maxSelect: 5,
      },
      {
        id: 'freins_achat',
        label: '11. Qu\'est-ce qui vous freine le plus ? (max 3)',
        type: 'checkbox',
        options: ['Prix trop élevé', 'Qualité irrégulière', 'Peu de choix', 'Manque de modernité / design', 'Pas de tailles', 'Mauvais packaging', 'Difficulté à commander après le salon', 'Livraison difficile', 'Manque de confiance'],
        maxSelect: 3,
      },
      {
        id: 'preference_prix',
        label: '12. Sur le prix, vous préférez',
        type: 'radio',
        options: ['Moins cher même si simple', 'Meilleure qualité même plus cher', 'Un bon compromis'],
      },
      {
        id: 'payer_plus_si',
        label: '13. Vous payez volontiers plus cher si',
        type: 'checkbox',
        options: ['Qualité premium', 'Design unique', 'Histoire / traçabilité', 'Emballage cadeau', 'Durable / éthique', 'Personnalisé'],
      },
    ],
  },
  {
    id: 'D',
    title: 'D. Produits recherchés et attentes',
    description: 'Ce que vous recherchez',
    questions: [
      {
        id: 'recherche_aujourdhui',
        label: '14. Aujourd\'hui, vous cherchez plutôt',
        type: 'checkbox',
        options: ['Cadeau', 'Déco', 'Accessoire mode', 'Produit quotidien', 'Souvenir', 'Rien de particulier'],
      },
      {
        id: 'voir_plus',
        label: '15. Vous aimeriez voir plus de',
        type: 'checkbox',
        options: ['Produits modernes', 'Produits traditionnels', 'Fusion tradi + moderne', 'Collections limitées', 'Produits corporate (entreprises)', 'Produits pour touristes', 'Produits premium'],
      },
      {
        id: 'interet_personnalisation',
        label: '16. Intérêt pour personnalisation (nom, couleurs, tailles, motifs)',
        type: 'radio',
        options: ['Très intéressé', 'Assez', 'Peu', 'Pas du tout'],
      },
      {
        id: 'delai_personnalisation',
        label: '17. Délai acceptable pour une commande personnalisée',
        type: 'radio',
        options: ['24-48h', '3-7 jours', '1-3 semaines', '+3 semaines'],
      },
    ],
  },
  {
    id: 'E',
    title: 'E. Achat en ligne et service',
    description: 'Vos préférences d\'achat',
    questions: [
      {
        id: 'commande_apres_salon',
        label: '18. Seriez-vous prêt à commander après le salon via',
        type: 'checkbox',
        options: ['WhatsApp', 'Instagram / Facebook', 'Site web', 'Marketplace', 'Point relais / boutique'],
      },
      {
        id: 'paiement_prefere',
        label: '19. Paiement que vous préférez',
        type: 'checkbox',
        options: ['Cash', 'Mobile money', 'Carte', 'Virement'],
      },
      {
        id: 'rassure_achat_ligne',
        label: '20. Ce qui vous rassure pour acheter en ligne',
        type: 'checkbox',
        options: ['Photos pro', 'Avis clients', 'Garantie / retour', 'Marque connue', 'Paiement sécurisé', 'Suivi livraison'],
      },
    ],
  },
  {
    id: 'F',
    title: 'F. Image de l\'artisanat comorien',
    description: 'Votre perception',
    questions: [
      {
        id: 'mot_evocation',
        label: '21. En 1 mot, l\'artisanat comorien vous évoque',
        type: 'text',
        placeholder: 'Un mot...',
      },
      {
        id: 'note_qualite',
        label: '22. Note globale (1 à 5) - Qualité',
        type: 'radio',
        options: ['1', '2', '3', '4', '5'],
      },
      {
        id: 'note_design',
        label: '23. Note globale (1 à 5) - Design / modernité',
        type: 'radio',
        options: ['1', '2', '3', '4', '5'],
      },
      {
        id: 'note_rapport_qualite_prix',
        label: '24. Note globale (1 à 5) - Rapport qualité / prix',
        type: 'radio',
        options: ['1', '2', '3', '4', '5'],
      },
      {
        id: 'manque_plus',
        label: '25. Qu\'est-ce qui manque le plus aujourd\'hui ?',
        type: 'textarea',
        placeholder: 'Votre avis...',
      },
      {
        id: 'suggestion',
        label: '26. Votre suggestion n°1 pour améliorer l\'offre',
        type: 'textarea',
        placeholder: 'Votre suggestion...',
      },
    ],
  },
  {
    id: 'G',
    title: 'G. Contact (optionnel)',
    description: 'Restez informé',
    questions: [
      {
        id: 'recevoir_catalogue',
        label: '27. Voulez-vous recevoir un catalogue / actus artisans ?',
        type: 'radio',
        options: ['Oui', 'Non'],
      },
      {
        id: 'contact_info',
        label: '28. Si oui : Tel / WhatsApp ou email',
        type: 'text',
        placeholder: 'Votre contact (optionnel)',
      },
    ],
  },
];
