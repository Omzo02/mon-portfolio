import React from 'react';

function About() {
  return (
    <main className="about-container">
      <div className="about-text">
        <h1>À propos de moi</h1>
        <h2>Développeur web passionné</h2>

        {/* IMAGE mobile et desktop */}
        <div className="about-photo-container">
          <img
            src="/images/moi.webp"
            width="450"
            height="450"
            alt="Portrait Ousmane DIOP, développeur web"
            className="about-photo"
          />
        </div>

        <p>
          Après 21 ans dans l'industrie automobile, ferroviaire et aéronautique,
          je me suis reconverti en développeur web. Passionné par le code et la création
          d'interfaces dynamiques, je cherche à réaliser des projets qui combinent
          créativité et fonctionnalité.
        </p>
      </div>

      <section className="about-objective">
        <h2>🎯 Objectif professionnel</h2>
        <p>
          Je recherche un poste de <strong>développeur web front-end</strong> ou 
          <strong> full-stack</strong>, en CDI.  
          Mon ambition est de contribuer à des projets innovants, tout en consolidant mes compétences
          et en collaborant avec des équipes dynamiques.
        </p>
      </section>

      <section className="about-skills">
        <h2>🛠️ Compétences</h2>
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

export default About;
