import React from 'react';

function About() {
  return (
    <main className="about-container">
      {/* Partie présentation */}
      <section className="about-intro" aria-label="Présentation de Ousmane Diop" itemScope itemType="https://schema.org/Person">
        <div className="about-text">
          <h1 itemProp="name">À propos de moi</h1>
          <p itemProp="description">
            Après 21 ans dans l'industrie automobile, ferroviaire et aéronautique,
            je me suis reconverti en développeur web. Passionné par le code et la création
            d'interfaces dynamiques, je cherche à réaliser des projets qui combinent
            créativité et fonctionnalité.
          </p>
        </div>
        <div className="about-photo-container">
          <img
            src="/images/moi.webp"
            width="480"
            height="647"
            alt="Portrait Ousmane DIOP, développeur web"
            className="about-photo"
            itemProp="image"
          />
        </div>
      </section>

      {/* Partie objectif professionnel */}
      <section className="about-objective" aria-label="Objectif professionnel">
        <h2>🎯 Objectif professionnel</h2>
        <p>
          Je recherche un poste de <strong itemProp="hasOccupation">développeur web front-end</strong> ou 
          <strong itemProp="hasOccupation"> full-stack</strong>, en CDI.  
          Mon ambition est de contribuer à des projets innovants, tout en consolidant mes compétences
          et en collaborant avec des équipes dynamiques.
        </p>
      </section>

      {/* Partie compétences */}
      <section className="about-skills" aria-label="Compétences">
        <h2>🛠️ Compétences</h2>
        <div className="skills-grid">
          <div className="skill-card" itemProp="skills">HTML / CSS</div>
          <div className="skill-card" itemProp="skills">JavaScript / DOM</div>
          <div className="skill-card" itemProp="skills">React</div>
          <div className="skill-card" itemProp="skills">Node.js / Express</div>
          <div className="skill-card" itemProp="skills">MongoDB / Mongoose</div>
          <div className="skill-card" itemProp="skills">SEO & Performance</div>
        </div>
      </section>
    </main>
  );
}

export default About;
