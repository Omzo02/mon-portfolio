import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main 
      className="notfound-container" 
      role="main" 
      aria-labelledby="notfound-title"
      aria-describedby="notfound-desc"
    >
      {/* Titre principal */}
      <h1 id="notfound-title">404</h1>
      {/* Description pour les lecteurs d'écran */}
      <h2 id="notfound-desc">
        Oups ! La page que vous cherchez n'existe pas.
      </h2>

      {/* Illustration SVG (aria-hidden pour ne pas être lu par les lecteurs d'écran) */}
      <svg
        width="200"
        height="200"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e53935"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>

      {/* Bouton retour accueil */}
      <Link 
        to="/" 
        className="btn high-contrast" 
        aria-label="Retourner à l'accueil"
      >
        🏠 Retour à l'accueil
      </Link>
    </main>
  );
}

export default NotFound;
