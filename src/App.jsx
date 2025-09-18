import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <div className="app-wrapper">
      {/* Navigation principale */}
      <header>
        <Navbar />
      </header>

      {/* Contenu principal */}
      <main className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Pied de page */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
