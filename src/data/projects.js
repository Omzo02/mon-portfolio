// Déclaration d'un tableau contenant la liste des projets
const projects = [
  {
    id: 1, // Identifiant unique du projet
    title: "Booki", // Nom du projet
    description: [
      // Liste décrivant les grandes lignes du projet
      "Création de la page d'accueil d’une agence de voyage",
      "Développé en HTML & CSS",
      "Responsive design adapté aux mobiles et tablettes",
      "Projet validé dans le cadre de la formation OpenClassrooms"
    ],
    image: "/images/booki.webp", // Chemin de l'image associée au projet
    skills: ["HTML", "CSS"], // Compétences principales utilisées
    link: "https://github.com/Omzo02/deuxiemeprojet", // Lien vers le code source du projet
    details: {
      // Détails plus précis du projet
      problematiques: [
        "Créer une interface claire pour les utilisateurs",
        "Rendre le site responsive sur tous les écrans"
      ],
      solutions: [
        "Utilisation de Flexbox et Grid pour la mise en page",
        "Media queries adaptées pour mobile et tablette"
      ],
      competences: ["HTML5", "CSS3", "Responsive Design"] // Compétences validées
    }
  },
  {
    id: 2,
    title: "Sophie Bluel",
    description: [
      "Développement d’une page web dynamique avec JavaScript",
      "Manipulation du DOM et consommation d’une API REST",
      "Mise en place d’un système de connexion avec token",
      "Ajout et suppression d’éléments via une modale"
    ],
    image: "/images/Shopie-bluel.webp",
    skills: ["DOM", "JavaScript", "API", "Backend"],
    link: "https://github.com/Omzo02/troisieme-projet",
    details: {
      problematiques: [
        "Gérer les interactions dynamiques sur la page",
        "Sécuriser les opérations de modification de données"
      ],
      solutions: [
        "Utilisation de JavaScript pour le DOM dynamique",
        "Gestion du token pour l'authentification"
      ],
      competences: ["JavaScript", "API REST", "DOM Manipulation", "Sécurité"]
    }
  },
  {
    id: 3,
    title: "Mon vieux Grimoire",
    description: [
      "Développement du back-end d’un site de notation de livres",
      "Architecture REST avec Express & Node.js",
      "Stockage sécurisé des données avec MongoDB",
      "Mise en place de la logique métier (CRUD complet, sécurité, auth)"
    ],
    image: "/images/Grimoire.webp",
    skills: ["Express", "JavaScript", "Node.js", "Mongoose", "MongoDB", "CRUD"],
    link: "https://github.com/Omzo02/sixieme_projet",
    details: {
      problematiques: [
        "Structurer le back-end pour un CRUD complet",
        "Assurer la sécurité des données"
      ],
      solutions: [
        "Architecture REST avec Express",
        "Stockage sécurisé avec MongoDB et Mongoose"
      ],
      competences: ["Node.js", "Express", "MongoDB", "Mongoose", "CRUD", "Sécurité"]
    }
  },
  {
    id: 4,
    title: "Kasa",
    description: [
      "Développement d’une application de location immobilière",
      "Front-end réalisé avec React et React Router",
      "Respect des bonnes pratiques Lighthouse et Wave",
      "Responsive et optimisé pour l’accessibilité"
    ],
    image: "/images/Kasa.webp",
    skills: ["React", "Chrome DevTools", "GTMetrix", "Wave"],
    link: "https://github.com/Omzo02/cinquieme_projet",
    details: {
      problematiques: [
        "Créer une interface utilisateur fluide",
        "Optimiser l'accessibilité et la performance"
      ],
      solutions: [
        "Utilisation de React et React Router",
        "Tests et optimisations avec Lighthouse et Wave"
      ],
      competences: ["React", "React Router", "Accessibilité", "Performance"]
    }
  },
  {
    id: 5,
    title: "Nina Carducci",
    description: [
      "Débogage et optimisation d’un site de photographe",
      "Amélioration des performances (score Lighthouse 90+)",
      "Optimisation SEO et ajout des données structurées Schema.org",
      "Correction des problèmes d’accessibilité"
    ],
    image: "/images/Nina-Carducci.webp",
    skills: ["Google Lighthouse", "SEO", "Schema.org", "Wave"],
    link: "https://github.com/Omzo02/quatrieme_projet",
    details: {
      problematiques: [
        "Améliorer les performances d'un site existant",
        "Optimiser le SEO et l'accessibilité"
      ],
      solutions: [
        "Audit avec Lighthouse et correction des problèmes",
        "Ajout de balises et données structurées pour le SEO"
      ],
      competences: ["SEO", "Accessibilité", "Lighthouse", "Schema.org", "Optimisation"]
    }
  },
  {
    id: 6,
  title: "Portfolio",
  description: [
    "Création de mon portfolio personnel",
    "Présentation de mes projets et compétences",
    "Mise en ligne et déploiement sur hébergement",
    "Design responsive adapté desktop et mobile"
  ],
  image: "/images/portfolio.webp", // à créer et placer dans ton dossier images
  skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
  link: "https://github.com/Omzo02/mon-portfolio.git",
  details: {
    problematiques: [
      "Créer un site personnel moderne et professionnel",
      "Présenter mes projets et compétences de manière claire"
    ],
    solutions: [
      "Développement avec HTML, CSS et JavaScript (React)",
      "Mise en place d’une structure claire et responsive",
      "Optimisation SEO pour améliorer la visibilité",
      "Déploiement et hébergement sur OVH"
    ],
    competences: [
      "Développement front-end",
      "Responsive design",
      "SEO de base",
      "Hébergement OVH",
      "Hébergement et mise en ligne"
      
    ]
  }
  }
];

// On exporte le tableau pour qu'il soit utilisé dans d'autres composants (ex: ProjectCard)
export default projects;
