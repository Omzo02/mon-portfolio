// Importation de React et des icônes depuis react-icons
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

// Définition du composant Footer
function Footer() {
  return (
    // Élément <footer> avec rôle ARIA pour l’accessibilité
    <footer className="footer" role="contentinfo" aria-label="Pied de page">
      
      {/* Texte de copyright */}
      <p>© 2025 Ousmane DIOP - Tous droits réservés</p>

      {/* Navigation contenant les liens vers mes réseaux sociaux */}
      <nav className="footer-links" aria-label="Réseaux sociaux">

        {/* Lien vers mon adresse email avec une icône enveloppe */}
        <a href="mailto:odiop75@gmail.com" aria-label="Envoyer un email">
          <FaEnvelope />
        </a>

        {/* Lien vers mon profil GitHub. 
            target="_blank" permet d’ouvrir dans un nouvel onglet,
            rel="noopener noreferrer" protège contre certaines failles de sécurité */}
        <a
          href="https://github.com/Omzo02"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil GitHub"
        >
          <FaGithub />
        </a>

        {/* Lien vers mon profil LinkedIn avec l’icône correspondante */}
        <a
          href="https://linkedin.com/in/ousmane-diop-a72910111"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil LinkedIn"
        >
          <FaLinkedin />
        </a>
      </nav>
    </footer>
  );
}

// Exportation du composant pour pouvoir l’utiliser ailleurs dans le projet
export default Footer;
