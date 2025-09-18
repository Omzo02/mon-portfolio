import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Salut, moi c’est <span>Ousmane</span></h1>
        <p>Je suis un développeur web en formation, passionné par React et JavaScript. Ce portfolio présente mon parcours, mes compétences et les projets sur lesquels j’ai travaillé. Je continue à développer mes connaissances pour devenir un développeur confirmé et prêt à relever de nouveaux défis</p>
        <div className="home-buttons">
          <Link to="/projects" className="btn">📂 Voir mes projets</Link>
          <a href="/CV-Ousmane.pdf" className="btn btn-secondary" download>📄 Télécharger mon CV</a>
        </div>
      </div>
      <img src="/images/moi.webp" width="480" height="647" alt="Portrait Ousmane DIOP, développeur web" className="home-photo" />
    </div>
  );
}

export default Home;
