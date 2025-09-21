import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    // Élément principal de la page d’accueil
    <main className="home-container">

      {/* Section principale avec texte de présentation */}
      <section className="home-text" aria-label="Présentation d'Ousmane DIOP">
        {/* Titre principal avec ton prénom en surbrillance */}
        <h1>Salut, moi c’est <span>Ousmane</span></h1>

        {/* Bloc qui regroupe le texte et la photo pour une meilleure lisibilité sur mobile */}
        <div className="home-text-photo">
          {/* Sous-titre indiquant ton statut actuel */}
          <h2>Développeur web en formation</h2>

          {/* Conteneur pour ta photo avec description accessible */}
          <div className="home-photo-container" aria-label="Portrait d'Ousmane DIOP, développeur web">
            <img 
              src="/images/moi.webp"  // Photo importée
              width="480"
              height="647"
              alt="Portrait Ousmane DIOP, développeur web" // Texte alternatif utile pour SEO et accessibilité
              className="home-photo"
            />
          </div>

          {/* Texte de présentation décrivant ton parcours et ton objectif */}
          <p>
            Je suis un développeur web en formation, passionné par React et JavaScript. 
            Ce portfolio présente mon parcours, mes compétences et les projets sur lesquels j’ai travaillé. 
            Je continue à développer mes connaissances pour devenir un développeur confirmé et prêt à relever de nouveaux défis.
          </p>
        </div>

        {/* Boutons d’action : accès aux projets et téléchargement du CV */}
        <div className="home-buttons">
          {/* Lien interne vers la page projets */}
          <Link 
            to="/projects" 
            className="btn high-contrast"
            aria-label="Voir mes projets"
          >
            📂 Voir mes projets
          </Link>

          {/* Lien externe permettant de télécharger ton CV */}
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
    </main>
  );
}

export default Home;
