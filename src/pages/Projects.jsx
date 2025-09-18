// src/pages/Projects.jsx
import projects from "../data/projects";

function Projects() {
  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>Mes Projets</h1>
        <p>
          Voici une sélection de projets réalisés au cours de ma formation.  
          Chaque projet met en avant des compétences spécifiques en développement web.
        </p>
      </header>

      <div className="projects-container">
        {projects.map((proj) => (
          <div key={proj.id} className="project-card"> 
            <img src={proj.image} width="480" height="647" alt={proj.title} />
               
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>

            {/* ✅ Problématiques */}
            {proj.details.problematiques && (
              <div className="project-section">
                <h3>Problématiques</h3>
                <ul>
                  {proj.details.problematiques.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* ✅ Solutions */}
            {proj.details.solutions && (
              <div className="project-section">
                <h3>Solutions</h3>
                <ul>
                  {proj.details.solutions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* ✅ Compétences développées */}
            {proj.details.competences && (
              <div className="project-section">
                <h3>Compétences développées</h3>
                <ul>
                  {proj.details.competences.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <p className="skills">
              Compétences techniques : {proj.skills.join(", ")}
            </p>

            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              Voir le code
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
