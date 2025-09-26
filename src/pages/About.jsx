// Importation de React
import React from 'react';

function About() {
  return (
    // Élément principal de la page "À propos"
    <main className="about-container">
      
      {/* ----------------------
          Section texte de présentation
          ---------------------- */}
      <div className="about-text">
        {/* Titre principal */}
        <h1 style={{ marginTop: "0.5rem" }}>À propos de moi</h1>

        {/* Sous-titre décrivant ton rôle */}
        <h2 style={{ marginTop: "1rem" }}>Développeur web passionné</h2>

        {/* Bloc contenant ta photo */}
        <div className="about-photo-container">
          <img
            src="/images/moi.webp"             // Chemin vers l'image de ton portrait
            width="450"                        // Largeur de l'image
            height="450"                       // Hauteur de l'image
            alt="Portrait Ousmane DIOP, développeur web" // Texte alternatif pour l’accessibilité et le SEO
            className="about-photo"            // Classe CSS pour styliser l'image
          />
        </div>

        {/* Texte de présentation personnelle */}
        <p>
          Après 21 ans dans l'industrie automobile, ferroviaire et aéronautique,
          je me suis reconverti en développeur web. Passionné par le code et la création
          d'interfaces dynamiques, je cherche à réaliser des projets qui combinent
          créativité et fonctionnalité.
        </p>
      </div>

      {/* ----------------------
          Section objectif professionnel
          ---------------------- */}
      <section className="about-objective">
        {/* Titre de la section */}
        <h2 style={{ marginTop: "1rem" }}>🎯 Objectif professionnel</h2>

        {/* Texte expliquant ton objectif professionnel */}
        <p>
          Je recherche un poste de <strong>développeur web front-end</strong> ou 
          <strong> full-stack</strong>, en CDI.  
          Mon ambition est de contribuer à des projets innovants, tout en consolidant mes compétences
          et en collaborant avec des équipes dynamiques.
        </p>
      </section>

      {/* ----------------------
          Section compétences
          ---------------------- */}
      <section className="about-skills">
        {/* Titre de la section */}
        <h2 style={{ marginTop: "1rem" }}>🛠️ Compétences</h2>

        {/* Grille regroupant les cartes de compétences */}
        <div className="skills-grid">
          <div className="skill-card">HTML / CSS</div>
          <div className="skill-card">JavaScript / DOM</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Node.js / Express</div>
          <div className="skill-card">MongoDB / Mongoose</div>
          <div className="skill-card">SEO & Performance</div>
        </div>
      </section>
    </main>
  );
}

// Export du composant pour pouvoir l'utiliser dans l'application
export default About;
