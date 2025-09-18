const projects = [
  {
    id: 1,
    title: "Booki",
    image: "/images/booki.webp",
    skills: ["HTML", "CSS"],
    link: "https://github.com/Omzo02/deuxiemeprojet",
    details: {
      problematiques: [
        "Créer une page d'accueil responsive",
        "Respecter la maquette graphique"
      ],
      solutions: [
        "Utilisation de HTML sémantique et CSS flexbox",
        "Responsive design pour mobile et tablette"
      ],
      competences: ["HTML", "CSS", "Responsive design"]
    }
  },
  {
    id: 2,
    title: "Sophie Bluel",
    image: "/images/Shopie-bluel.webp",
    skills: ["DOM", "JavaScript", "API", "Backend"],
    link: "https://github.com/Omzo02/troisieme-projet",
    details: {
      problematiques: [
        "Manipulation du DOM",
        "Connexion sécurisée avec token"
      ],
      solutions: [
        "Création d’une interface dynamique avec JavaScript",
        "Gestion de l’authentification côté front-end et back-end"
      ],
      competences: ["JavaScript", "API REST", "Authentification"]
    }
  },
  {
    id: 3,
    title: "Mon vieux Grimoire",
    image: "/images/Grimoire.webp",
    skills: ["Express", "JavaScript", "Node.js", "Mongoose", "MongoDB", "CRUD"],
    link: "https://github.com/Omzo02/sixieme_projet",
    details: {
      problematiques: [
        "Créer une API sécurisée pour la gestion des livres",
        "Mettre en place le CRUD complet"
      ],
      solutions: [
        "Architecture REST avec Node.js et Express",
        "Stockage des données avec MongoDB/Mongoose"
      ],
      competences: ["Node.js", "Express", "MongoDB", "CRUD", "Sécurité"]
    }
  },
  {
    id: 4,
    title: "Kasa",
    image: "/images/Kasa.webp",
    skills: ["React", "Chrome DevTools", "GTMetrix", "Wave"],
    link: "https://github.com/Omzo02/cinquieme_projet",
    details: {
      problematiques: [
        "Application React avec routing",
        "Optimisation performance et accessibilité"
      ],
      solutions: [
        "React Router pour navigation",
        "Tests Lighthouse et Wave pour performance et accessibilité"
      ],
      competences: ["React", "React Router", "Accessibilité", "Performance"]
    }
  },
  {
    id: 5,
    title: "Nina Carducci",
    image: "/images/Nina-Carducci.webp",
    skills: ["Google Lighthouse", "SEO", "Schema.org", "Wave"],
    link: "https://github.com/Omzo02/quatrieme_projet",
    details: {
      problematiques: [
        "Optimiser un site existant pour SEO et accessibilité",
        "Améliorer les performances"
      ],
      solutions: [
        "Audit Lighthouse et correction des erreurs",
        "Ajout des données structurées Schema.org"
      ],
      competences: ["SEO", "Performance", "Accessibilité", "Lighthouse"]
    }
  }
];

export default projects;
