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

export const artisanSections: Section[] = [
  {
    id: 'A',
    title: 'A. Identification rapide',
    description: 'Informations de base sur votre profil',
    questions: [
      {
        id: 'ile_ville',
        label: '1. Île / Ville',
        type: 'radio',
        options: ['Ngazidja', 'Ndzuwani', 'Mwali', 'Diaspora', 'Autre'],
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
        options: ['-25', '25-34', '35-44', '45-54', '55+'],
        required: true,
      },
      {
        id: 'statut',
        label: '4. Statut',
        type: 'radio',
        options: ['Artisan indépendant', 'Coopérative / Association', 'Entreprise', 'Apprenti', 'Autre'],
        required: true,
      },
      {
        id: 'annees_activite',
        label: "5. Années d'activité",
        type: 'radio',
        options: ['<1', '1-3', '4-7', '8-15', '15+'],
        required: true,
      },
      {
        id: 'travail_mode',
        label: '6. Vous travaillez',
        type: 'checkbox',
        options: ['Seul', 'Avec la famille', 'Avec employés', 'Avec apprentis'],
      },
    ],
  },
  {
    id: 'B',
    title: 'B. Secteur, produits et capacité',
    description: 'Votre domaine et vos produits',
    questions: [
      {
        id: 'domaine_principal',
        label: '7. Votre domaine principal',
        type: 'radio',
        options: ['Vannerie', 'Couture / Mode', 'Broderie', 'Bijoux', 'Bois', 'Pierre', 'Cuir', 'Poterie', 'Cosmétique naturel', 'Agro-transformation artisanale', 'Décoration', 'Autre'],
        required: true,
      },
      {
        id: 'top3_produits',
        label: '8. Top 3 produits vendus',
        type: 'textarea',
        placeholder: 'Listez vos 3 produits les plus vendus',
        required: true,
      },
      {
        id: 'capacite_production',
        label: '9. Capacité de production / mois',
        type: 'radio',
        options: ['1-10', '11-30', '31-100', '100+'],
        required: true,
      },
      {
        id: 'temps_production',
        label: '10. Temps moyen pour produire un article',
        type: 'radio',
        options: ['<1h', '1-3h', '4-8h', '1-3 jours', '+3 jours'],
      },
      {
        id: 'approvisionnement',
        label: '11. Approvisionnement en matières premières',
        type: 'radio',
        options: ['Facile', 'Moyen', 'Difficile'],
      },
      {
        id: 'approvisionnement_pourquoi',
        label: 'Pourquoi ?',
        type: 'text',
        placeholder: 'Expliquez...',
      },
      {
        id: 'outils_equipements',
        label: '12. Vos outils / équipements sont',
        type: 'radio',
        options: ['Suffisants', 'Moyens', 'Insuffisants'],
      },
    ],
  },
  {
    id: 'C',
    title: 'C. Marché, clients et canaux de vente',
    description: 'Vos clients et vos canaux de distribution',
    questions: [
      {
        id: 'clients_principaux',
        label: '13. Vos clients principaux',
        type: 'checkbox',
        options: ['Locaux', 'Touristes', 'Diaspora', 'Entreprises / Institutions', 'Revendeurs'],
      },
      {
        id: 'canaux_actuels',
        label: '14. Canaux actuels',
        type: 'checkbox',
        options: ['Salon / foires', 'Boutique', 'Commandes WhatsApp', 'Facebook / Instagram', 'Marché', 'Hôtels', 'Export'],
      },
      {
        id: 'saisonnalite',
        label: '16. Saisonnalité',
        type: 'checkbox',
        options: ['Ramadan', 'Vacances', 'Mariages', 'Fêtes', 'Toute l\'année'],
      },
      {
        id: 'zone_vente',
        label: '17. Votre zone de vente',
        type: 'checkbox',
        options: ['Quartier / Ville', 'Île', 'National', 'International'],
      },
    ],
  },
  {
    id: 'D',
    title: 'D. Prix, marge et gestion',
    description: 'Gestion financière de votre activité',
    questions: [
      {
        id: 'fixation_prix',
        label: '18. Comment fixez-vous vos prix ?',
        type: 'radio',
        options: ['Au feeling', 'Selon la concurrence', 'Coût + marge', 'Selon la valeur perçue', 'Autre'],
      },
      {
        id: 'connaissance_couts',
        label: '19. Vous connaissez vos coûts (matières / temps / transport) ?',
        type: 'radio',
        options: ['Oui', 'Partiellement', 'Non'],
      },
      {
        id: 'marge',
        label: '20. Votre marge est',
        type: 'radio',
        options: ['Bonne', 'Moyenne', 'Faible', 'Je ne sais pas'],
      },
      {
        id: 'problemes_frequents',
        label: '21. Problèmes fréquents',
        type: 'checkbox',
        options: ['Sous-prix', 'Clients négocient trop', 'Coûts augmentent', 'Impayés', 'Stock invendu', 'Retards de production'],
      },
      {
        id: 'comptabilite',
        label: '22. Tenez-vous une comptabilité simple ?',
        type: 'radio',
        options: ['Oui', 'Non'],
      },
    ],
  },
  {
    id: 'E',
    title: 'E. Qualité, design et différenciation',
    description: 'Vos forces et axes d\'amélioration',
    questions: [
      {
        id: 'forces',
        label: '23. Vos forces (choisir 3)',
        type: 'checkbox',
        options: ['Qualité', 'Originalité', 'Rapidité', 'Prix', 'Finition', 'Histoire / Patrimoine', 'Personnalisation', 'Packaging'],
        maxSelect: 3,
      },
      {
        id: 'difficultes',
        label: '24. Vos difficultés (choisir 3)',
        type: 'checkbox',
        options: ['Finition', 'Standardisation tailles / modèles', 'Contrôle qualité', 'Packaging', 'Design moderne', 'Photos produits', 'Manque d\'inspiration', 'Manque de feedback clients'],
        maxSelect: 3,
      },
      {
        id: 'collaboration_designer',
        label: '25. Avez-vous déjà collaboré avec un designer / styliste / graphiste ?',
        type: 'radio',
        options: ['Oui', 'Non'],
      },
      {
        id: 'developpement_souhaite',
        label: '26. Souhaitez-vous développer',
        type: 'checkbox',
        options: ['Nouvelle gamme', 'Premium', 'Souvenir touristique', 'Corporate cadeaux', 'Export'],
      },
    ],
  },
  {
    id: 'F',
    title: 'F. Numérique, marketing et visibilité',
    description: 'Votre présence en ligne',
    questions: [
      {
        id: 'presence_ligne',
        label: '27. Présence en ligne',
        type: 'checkbox',
        options: ['Aucune', 'WhatsApp', 'Facebook', 'Instagram', 'Site web', 'Marketplace'],
      },
      {
        id: 'commandes_ligne',
        label: '28. Vous recevez des commandes en ligne ?',
        type: 'radio',
        options: ['Souvent', 'Parfois', 'Rarement', 'Jamais'],
      },
      {
        id: 'freins_digital',
        label: '29. Vos principaux freins au digital',
        type: 'checkbox',
        options: ['Temps', 'Compétences', 'Connexion', 'Photos / vidéos', 'Publicité payante', 'Livraison', 'Paiement'],
      },
      {
        id: 'apprentissage_souhaite',
        label: '30. Vous seriez prêt à apprendre',
        type: 'checkbox',
        options: ['Photo produit', 'Contenu vidéo', 'Publicité', 'Storytelling', 'Catalogue numérique', 'Service client'],
      },
    ],
  },
  {
    id: 'G',
    title: 'G. Logistique, paiement, formalisation',
    description: 'Organisation de votre activité',
    questions: [
      {
        id: 'livraison',
        label: '31. Livraison',
        type: 'radio',
        options: ['Je livre moi-même', 'Client récupère', 'Transporteur', 'Je ne livre pas'],
      },
      {
        id: 'paiements_acceptes',
        label: '32. Paiements acceptés',
        type: 'checkbox',
        options: ['Cash', 'Mobile money', 'Virement', 'Carte', 'Autre'],
      },
      {
        id: 'formalisation',
        label: '33. Vous êtes formalisé ?',
        type: 'radio',
        options: ['Oui', 'Non', 'En cours'],
      },
      {
        id: 'propriete_intellectuelle',
        label: '34. Propriété intellectuelle / marque',
        type: 'radio',
        options: ['Je connais', 'Un peu', 'Pas du tout'],
      },
      {
        id: 'probleme_copie',
        label: '35. Avez-vous déjà eu un problème de copie / imitation ?',
        type: 'radio',
        options: ['Oui', 'Non'],
      },
    ],
  },
  {
    id: 'H',
    title: 'H. Financement et investissement',
    description: 'Vos besoins en financement',
    questions: [
      {
        id: 'financement_obtenu',
        label: '36. Avez-vous déjà obtenu un financement ?',
        type: 'radio',
        options: ['Oui', 'Non'],
      },
      {
        id: 'besoin_actuel',
        label: '37. Besoin actuel',
        type: 'checkbox',
        options: ['Équipement', 'Matières', 'Local', 'Marketing', 'Stock', 'Transport', 'Digital'],
      },
      {
        id: 'montant_utile',
        label: '38. Montant utile (ordre de grandeur)',
        type: 'radio',
        options: ['<100k', '100-300k', '300-800k', '800k-2M', '+2M KMF'],
      },
      {
        id: 'crowdfunding',
        label: '39. Ouverture au crowdfunding / précommandes',
        type: 'radio',
        options: ['Oui', 'Peut-être', 'Non'],
      },
      {
        id: 'freins_financement',
        label: '40. Freins au financement',
        type: 'checkbox',
        options: ['Garanties', 'Taux', 'Peur de la dette', 'Pas de dossier', 'Pas de visibilité', 'Autre'],
      },
    ],
  },
  {
    id: 'I',
    title: 'I. Besoins d\'accompagnement',
    description: 'Programme d\'incubation',
    questions: [
      {
        id: 'priorites_accompagnement',
        label: '41. Priorités d\'accompagnement (choisir 5 max)',
        type: 'checkbox',
        options: ['Calcul des coûts / prix', 'Marketing / vente', 'Branding', 'Design produit', 'Qualité & standards', 'Packaging', 'Digital (réseaux sociaux)', 'Photo / vidéo', 'Comptabilité simple', 'Formalisation', 'Accès financement', 'Crowdfunding', 'Contrats / propriété intellectuelle', 'Export', 'Mise en relation (hôtels / entreprises)'],
        maxSelect: 5,
      },
      {
        id: 'format_prefere',
        label: '42. Format préféré',
        type: 'checkbox',
        options: ['Ateliers', 'Coaching individuel', 'Mentorat', 'Formation courte', 'Programme 3 mois'],
      },
      {
        id: 'disponibilite',
        label: '43. Disponibilité',
        type: 'checkbox',
        options: ['Matin', 'Après-midi', 'Soir', 'Week-end'],
      },
      {
        id: 'contribution_financiere',
        label: '44. Capacité à contribuer financièrement au programme',
        type: 'radio',
        options: ['0', '10-25k', '25-50k', '50-100k', '+100k KMF'],
      },
      {
        id: 'critere_reussite',
        label: '45. Critère de réussite pour vous (3 indicateurs)',
        type: 'checkbox',
        options: ['+ventes', '+clients', 'Meilleure marge', 'Produit premium', 'Commandes régulières', 'Export', 'Visibilité'],
        maxSelect: 3,
      },
    ],
  },
  {
    id: 'J',
    title: 'J. Contact (optionnel)',
    description: 'Restez en contact avec nous',
    questions: [
      {
        id: 'contact_info',
        label: '46. Nom / Tel / WhatsApp / Instagram (facultatif)',
        type: 'text',
        placeholder: 'Votre contact (optionnel)',
      },
      {
        id: 'accepte_recontact',
        label: '47. Acceptez-vous d\'être recontacté ?',
        type: 'radio',
        options: ['Oui', 'Non'],
      },
    ],
  },
];
