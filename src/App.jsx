// Import des outils de navigation de React Router
import { Routes, Route } from 'react-router-dom';

// Import des composants globaux
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import des pages principales
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-wrapper">
      {/* --------- HEADER --------- */}
      {/* Contient la barre de navigation principale */}
      <header aria-label="Navigation principale">
        <Navbar />
      </header>

      {/* --------- CONTENU PRINCIPAL --------- */}
      <main className="content-wrapper" aria-label="Contenu principal">
        <Routes>
          {/* Route vers la page d'accueil */}
          <Route path="/" element={<Home />} />

          {/* Route vers la page des projets */}
          <Route path="/projects" element={<Projects />} />

          {/* Route vers la page "À propos" */}
          <Route path="/about" element={<About />} />

          {/* Route cers la page 404 */}
          <Route path="*" element={<NotFound />} /> 

          {/* Route vesr la page de contact */}
          <Route path="/contact" element={<Contact />} /> 

        </Routes>
      </main>

      {/* --------- FOOTER --------- */}
      {/* Contient le pied de page avec les infos de contact / copyright */}
      <footer aria-label="Pied de page">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
