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

        {/* Lien vers la page Contact du site */}
        <a href="/contact" aria-label="Page Contact">
          <FaEnvelope />
        </a>

        {/* Lien vers mon profil GitHub */}
        <a
          href="https://github.com/Omzo02"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil GitHub"
        >
          <FaGithub />
        </a>

        {/* Lien vers mon profil LinkedIn */}
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

// Exportation du composant
export default Footer;
