// Importation des données des projets depuis un fichier séparé
import projects from "../data/projects";

function Projects() {
  return (
    // Conteneur principal de la page Projets
    <main className="projects-page">
      
      {/* En-tête avec titre et description */}
      <header className="projects-header">
        <h1>Mes Projets</h1>
        <p>
          Voici une sélection de projets réalisés au cours de ma formation.  
          Chaque projet met en avant des compétences spécifiques en développement web.
        </p>
      </header>

      {/* Section listant tous les projets, avec une description pour l’accessibilité */}
      <section className="projects-container" aria-label="Liste des projets">
        
        {/* Parcours du tableau "projects" et affichage de chaque projet */}
        {projects.map((proj) => (
          <article
            key={proj.id} // Identifiant unique pour React
            className="project-card"
            itemScope
            itemType="https://schema.org/CreativeWork" // Microdonnées pour le SEO
            aria-label={`Projet ${proj.title}, compétences : ${proj.skills.join(", ")}`}
          >
            {/* Image du projet avec description accessible */}
            <img
              src={proj.image}
              width="480"
              height="647"
              alt={`Capture du projet ${proj.title}`}
              itemProp="image"
            />

            {/* Titre du projet */}
            <h2 itemProp="name">{proj.title}</h2>

            {/* Brève description du projet */}
            <p itemProp="description">{proj.description.join(" ")}</p>

            {/* Bloc des problématiques (s’affiche seulement si présent dans les données) */}
            {proj.details?.problematiques && (
              <aside 
                className="project-section" 
                aria-label={`Problématiques du projet ${proj.title}`}
              >
                <h3>Problématiques</h3>
                <p>{proj.details.problematiques.join(" ")}</p>
              </aside>
            )}

            {/* Bloc des solutions apportées */}
            {proj.details?.solutions && (
              <aside 
                className="project-section" 
                aria-label={`Solutions apportées pour le projet ${proj.title}`}
              >
                <h3>Solutions</h3>
                <p>{proj.details.solutions.join(" ")}</p>
              </aside>
            )}

            {/* Bloc des compétences développées */}
            {proj.details?.competences && (
              <aside 
                className="project-section" 
                aria-label={`Compétences développées dans le projet ${proj.title}`}
              >
                <h3>Compétences développées</h3>
                <p>{proj.details.competences.join(", ")}</p>
              </aside>
            )}

            {/* Compétences techniques principales */}
            <p className="skills">
              Compétences techniques : <span itemProp="skills">{proj.skills.join(", ")}</span>
            </p>

            {/* Lien vers le code source du projet */}
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              itemProp="url"
            >
              Voir le code
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Projects;
