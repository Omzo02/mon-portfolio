import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="Menu principal">
        <h2 className="logo">Ousmane</h2>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              Projets
            </NavLink>
          </li>
          <li>
            <NavLink to="/about"
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

export default Navbar;
