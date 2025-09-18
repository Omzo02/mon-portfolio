// src/pages/Projects.jsx
import projects from "../data/projects";

function Projects() {
  return (
    <main className="projects-page">
      <header className="projects-header">
        <h1>Mes Projets</h1>
        <p>
          Voici une sélection de projets réalisés au cours de ma formation.  
          Chaque projet met en avant des compétences spécifiques en développement web.
        </p>
      </header>

      <section className="projects-container" aria-label="Liste des projets">
        {projects.map((proj) => (
          <article
            key={proj.id}
            className="project-card"
            itemScope
            itemType="https://schema.org/CreativeWork"
            aria-label={`Projet ${proj.title}, compétences : ${proj.skills.join(", ")}`}
          >
            <img
              src={proj.image}
              width="480"
              height="647"
              alt={`Capture du projet ${proj.title}`}
              itemProp="image"
            />

            <h2 itemProp="name">{proj.title}</h2>
            <p itemProp="description">{proj.description.join(" ")}</p>

            {/* Problématiques */}
            {proj.details?.problematiques && (
              <aside className="project-section" aria-label={`Problématiques du projet ${proj.title}`}>
                <h3>Problématiques</h3>
                <p>{proj.details.problematiques.join(" ")}</p>
              </aside>
            )}

            {/* Solutions */}
            {proj.details?.solutions && (
              <aside className="project-section" aria-label={`Solutions apportées pour le projet ${proj.title}`}>
                <h3>Solutions</h3>
                <p>{proj.details.solutions.join(" ")}</p>
              </aside>
            )}

            {/* Compétences développées */}
            {proj.details?.competences && (
              <aside className="project-section" aria-label={`Compétences développées dans le projet ${proj.title}`}>
                <h3>Compétences développées</h3>
                <p>{proj.details.competences.join(", ")}</p>
              </aside>
            )}

            <p className="skills">
              Compétences techniques : <span itemProp="skills">{proj.skills.join(", ")}</span>
            </p>

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
