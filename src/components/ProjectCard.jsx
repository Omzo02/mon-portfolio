function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>Compétences : {project.skills.join(", ")}</p>
      <a href={project.link} target="_blank">Voir sur GitHub</a>
    </div>
  );
}

export default ProjectCard;
