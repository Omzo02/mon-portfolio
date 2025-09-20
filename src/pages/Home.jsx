import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-container">
      <section className="home-text" aria-label="Présentation d'Ousmane DIOP">
        <h1>Salut, moi c’est <span>Ousmane</span></h1>
        <p>
          Je suis un développeur web en formation, passionné par React et JavaScript. 
          Ce portfolio présente mon parcours, mes compétences et les projets sur lesquels j’ai travaillé. 
          Je continue à développer mes connaissances pour devenir un développeur confirmé et prêt à relever de nouveaux défis.
        </p>

        <div className="home-buttons">
          <Link 
            to="/projects" 
            className="btn high-contrast" 
            aria-label="Voir mes projets"
          >
            📂 Voir mes projets
          </Link>
          <a 
            href="/CV-Ousmane.pdf" 
            className="btn btn-secondary high-contrast" 
            download
            aria-label="Télécharger le CV de Ousmane DIOP, PDF 250 Ko"
          >
            📄 Télécharger mon CV
          </a>
        </div>
      </section>

      <aside className="home-photo-container" aria-label="Portrait d'Ousmane DIOP, développeur web">
        <img 
          src="/images/moi.webp" 
          width="480" 
          height="647" 
          alt="Portrait Ousmane DIOP, développeur web" 
          className="home-photo" 
        />
      </aside>
    </main>
  );
}

export default Home;
