// Définition du composant ProjectCard
// Il reçoit une "prop" appelée project (un objet qui contient les infos du projet)
function ProjectCard({ project }) {
  return (
    // Conteneur principal de la carte du projet
    <div className="project-card">

      {/* Affichage de l'image du projet
          - src prend l'URL contenue dans project.image
          - alt utilise le titre du projet pour l’accessibilité */}
      <img src={project.image} alt={project.title} />

      {/* Titre du projet */}
      <h2>{project.title}</h2>

      {/* Brève description du projet */}
      <p>{project.description}</p>

      {/* Liste des compétences utilisées pour ce projet
          - join(", ") permet de transformer le tableau en texte séparé par des virgules */}
      <p>Compétences : {project.skills.join(", ")}</p>

      {/* Lien vers le projet sur GitHub
          - target="_blank" ouvre dans un nouvel onglet */}
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Voir sur GitHub
      </a>
    </div>
  );
}

// Exportation du composant pour pouvoir l’utiliser ailleurs
export default ProjectCard;
