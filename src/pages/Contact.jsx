// Importation des hooks React et de la bibliothèque EmailJS
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // ----------------------
  // État du formulaire
  // ----------------------
  const [formData, setFormData] = useState({
    name: "",   // Nom de l'utilisateur
    email: "",  // Email de l'utilisateur
    message: "",// Message à envoyer
  });

  // État pour afficher le message de succès ou d'erreur
  const [status, setStatus] = useState("");

  // État pour savoir si le formulaire est valide et activer/désactiver le bouton
  const [isFormValid, setIsFormValid] = useState(false);

  // ----------------------
  // Identifiants EmailJS (stockés dans .env)
  // ----------------------
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // ----------------------
  // Gestion de la saisie dans le formulaire
  // ----------------------
  const handleChange = (e) => {
    // Met à jour l'état du formulaire en fonction de l'input modifié
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ----------------------
  // Vérification dynamique du formulaire
  // ----------------------
  useEffect(() => {
    // Regex simple pour vérifier le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    // Le formulaire est valide si tous les champs sont remplis et que l'email est correct
    setIsFormValid(
      formData.name.trim() !== "" &&
      emailRegex.test(formData.email) &&
      formData.message.trim() !== ""
    );
  }, [formData]); // Déclenché à chaque modification des champs

  // ----------------------
  // Validation complète avant l'envoi
  // ----------------------
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    if (!formData.name.trim()) {
      setStatus("❌ Le nom est obligatoire.");
      return false;
    }
    if (!formData.email.trim()) {
      setStatus("❌ L’email est obligatoire.");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setStatus("❌ L’email n’est pas valide.");
      return false;
    }
    if (!formData.message.trim()) {
      setStatus("❌ Le message est obligatoire.");
      return false;
    }
    return true;
  };

  // ----------------------
  // Envoi du formulaire via EmailJS
  // ----------------------
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setStatus("");       // Réinitialise le message d'état

    // Validation avant envoi
    if (!validateForm()) return;

    // Envoi à EmailJS
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        // Succès : message affiché et formulaire réinitialisé
        setStatus("✅ Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        // Erreur : message d'erreur affiché
        setStatus("❌ Une erreur est survenue, veuillez réessayer.");
      });
  };

  // ----------------------
  // JSX du formulaire de contact
  // ----------------------
  return (
    <div className="contact-page">
      {/* En-tête de la page */}
      <div className="contact-header">
        <h1>Contactez-moi</h1>
        <p>Remplissez le formulaire ci-dessous pour m’envoyer un message.</p>
      </div>

      <div className="contact-container">
        {/* Formulaire */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Champ Nom */}
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Champ Email */}
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Champ Message */}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {/* Bouton Envoyer */}
          <button
            type="submit"
            className={`btn ${isFormValid ? "active" : "disabled"}`}
            disabled={!isFormValid} // Désactivé si le formulaire n'est pas valide
          >
            Envoyer
          </button>

          {/* Message de statut (succès ou erreur) */}
          {status && (
            <p
              className={
                status.startsWith("✅") ? "form-success" : "form-error"
              }
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

// Export du composant pour pouvoir l'utiliser ailleurs
export default Contact;
