import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Ousmane</h2>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/projects">Projets</Link></li>
        <li><Link to="/about">À propos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
