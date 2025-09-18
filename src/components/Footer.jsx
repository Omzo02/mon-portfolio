import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Ousmane DIOP - Tous droits réservés</p>
      <div className="footer-links">
        <a href="mailto:odiop75@gmail.com"><FaEnvelope /></a>
        <a href="https://github.com/Omzo02" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/ousmane-diop-a72910111" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </div>
    </footer>
  );
}

export default Footer;
