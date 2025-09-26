// src/pages/Contact.jsx
import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

  
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_42hjjco";
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_b7pj71x";
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Jg19Zp-x23RLA4iaK";

    try {
      await sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <main className="contact-page" aria-labelledby="contact-title">
      <header className="contact-header">
        <h1 id="contact-title">Contact</h1>
         
      </header>

      <section className="contact-container">
        <form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
          aria-label="Formulaire de contact"
        >
          <label htmlFor="user_name">Nom *</label>
          <input id="user_name" name="user_name" type="text" required aria-required="true" />

          <label htmlFor="user_email">Email *</label>
          <input id="user_email" name="user_email" type="email" required aria-required="true" />

          <label htmlFor="subject">Objet</label>
          <input id="subject" name="subject" type="text" />

          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" rows="8" required aria-required="true" />

          <button
            type="submit"
            className="btn"
            aria-label="Envoyer le message"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Envoi..." : "Envoyer"}
          </button>

          {status === "success" && (
            <p role="status" className="form-success">Merci — votre message a bien été envoyé.</p>
          )}
          {status === "error" && (
            <p role="alert" className="form-error">Erreur lors de l'envoi. Réessaye plus tard.</p>
          )}
        </form>
      </section>
    </main>
  );
}

export default Contact;
