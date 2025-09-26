// Importation de React pour pouvoir créer un composant
import React from "react";
// Importation du composant Link de react-router-dom pour la navigation interne
import { Link } from "react-router-dom";

function Home() {
  return (
    // Élément principal de la page d’accueil
    <main className="home-container">

      {/* ----------------------
          Section principale avec texte de présentation
          ---------------------- */}
      <section className="home-text" aria-label="Présentation d'Ousmane DIOP">
        
        {/* Titre principal avec mise en évidence du prénom */}
        <h1>Salut, moi c’est <span>Ousmane</span></h1>

        {/* Bloc regroupant le texte et la photo pour un affichage clair sur mobile */}
        <div className="home-text-photo">
          
          {/* Sous-titre indiquant mon statut actuel */}
          <h2>Développeur web en formation</h2>

          {/* Conteneur pour ta photo */}
          <div className="home-photo-container" aria-label="Portrait d'Ousmane DIOP, développeur web">
            <img 
              src="/images/moi.webp"      // Photo de profil
              width="480"
              height="647"
              alt="Portrait Ousmane DIOP, développeur web" // Texte alternatif pour l’accessibilité et le SEO
              className="home-photo"
            />
          </div>

          {/* Paragraphe présentant mon parcours et mon objectif */}
          <p>
            Je suis un développeur web en formation, passionné par React et JavaScript. 
            Ce portfolio présente mon parcours, mes compétences et les projets sur lesquels j’ai travaillé. 
            Je continue à développer mes connaissances pour devenir un développeur confirmé et prêt à relever de nouveaux défis.
          </p>
        </div>

        {/* ----------------------
            Boutons d’action : accès aux projets et téléchargement du CV
            ---------------------- */}
        <div className="home-buttons">

          {/* Lien interne vers la page Projets */}
          <Link 
            to="/projects" 
            className="btn high-contrast"
            aria-label="Voir mes projets"
          >
            📂 Voir mes projets
          </Link>

          {/* Lien externe pour télécharger le CV */}
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

// Exportation du composant pour pouvoir l’utiliser ailleurs
export default Home;
