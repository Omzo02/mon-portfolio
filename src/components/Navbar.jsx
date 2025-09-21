// Importation de React et de NavLink depuis react-router-dom
// NavLink est utilisé pour gérer la navigation avec une mise en évidence du lien actif
import React from "react";
import { NavLink } from "react-router-dom";

// Définition du composant Navbar
function Navbar() {
  return (
    // Balise <header> pour indiquer que c’est l’en-tête de la page
    <header>
      {/* Balise <nav> pour la navigation principale
          role="navigation" et aria-label améliorent l’accessibilité */}
      <nav className="navbar" role="navigation" aria-label="Menu principal">
        
        {/* Logo ou nom affiché dans la barre de navigation */}
        <h2 className="logo">Ousmane</h2>

        {/* Liste des liens de navigation */}
        <ul className="nav-links">

          {/* Lien vers la page d'accueil
              - "end" permet de matcher exactement "/"
              - className change dynamiquement selon si le lien est actif ou non
              - aria-current="page" est ajouté uniquement si la page est active */}
          <li>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              Accueil
            </NavLink>
          </li>

          {/* Lien vers la page des projets */}
          <li>
            <NavLink 
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              Projets
            </NavLink>
          </li>

          {/* Lien vers la page "À propos" */}
          <li>
            <NavLink 
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Exportation du composant pour l'utiliser dans l'application
export default Navbar;
