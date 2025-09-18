import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Pied de page">
      <p>© 2025 Ousmane DIOP - Tous droits réservés</p>
      <nav className="footer-links" aria-label="Réseaux sociaux">
        <a href="mailto:odiop75@gmail.com" aria-label="Envoyer un email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/Omzo02" target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/ousmane-diop-a72910111" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn">
          <FaLinkedin />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
