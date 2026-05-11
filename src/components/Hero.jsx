// Hero.jsx
// C'est la section principale d'accueil — la première chose que voit le visiteur.
// Elle contient : ton nom, l'effet de frappe animé, ta bio, les boutons CTA,
// tes réseaux sociaux, et ta photo flottante à droite.
//
// On reproduit l'effet Typed.js en pur React avec useState + useEffect
// pour ne pas avoir besoin d'une librairie externe supplémentaire.

import { useState, useEffect, useRef } from "react";

// Les mots qui défilent dans l'effet de frappe
const TYPED_STRINGS = [
  "Frontend Developer",
  "Web Developer",
  "Computer Scientist",
  "Network Administrator",
  "Cybersecurity Expert",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Effet de frappe — simule Typed.js :
  // on ajoute une lettre à la fois (typeSpeed), puis on efface (backSpeed)
  useEffect(() => {
    const currentWord = TYPED_STRINGS[wordIndex];

    if (!isDeleting) {
      // On est en train d'écrire
      if (displayText.length < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 90);
      } else {
        // Mot complet → pause avant d'effacer
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      // On est en train d'effacer
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 60);
      } else {
        // Mot effacé → passe au mot suivant
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % TYPED_STRINGS.length);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="hero" id="home" aria-label="Introduction">

      {/* Colonne gauche — tout le texte */}
      <div className="hero-content">
        <span className="hero-greeting">Hello, World!</span>

        <h1 className="hero-name">
          Hi, It's
          <br />
          <em>Prince Koucheme</em>
        </h1>

        {/* Zone de texte défilant */}
        <div className="hero-typed">
          And I'm a{" "}
          <span className="typed-accent">
            &lt;{displayText}
            <span style={{ opacity: 1 }}>|</span>&gt;
          </span>
        </div>

        <p className="hero-bio">
          An aspiring systems &amp; network specialist with solid experience in
          web development and a strong interest in cybersecurity — backed by
          hands-on projects building functional, impactful applications.
        </p>

        {/* Boutons d'action */}
        <div className="hero-ctas">
          <a href="mailto:kouchemep@gmail.com" className="btn btn-primary">
            Hire Me <i className="fa fa-arrow-right" />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Let's Talk
          </a>
        </div>

        {/* Icônes des réseaux sociaux */}
        <div className="hero-socials" aria-label="Réseaux sociaux">
          <a
            href="https://wa.me/22954110930?text=Bonjour%20je%20suis%20intéressé%20par%20ton%20profil"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp" />
          </a>
          <a
            href="https://github.com/kouchemep-blip"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/prince-koucheme-64174136a"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="mailto:kouchemep@gmail.com?subject=Recrutement&body=Bonjour%20je%20suis%20intéressé%20par%20votre%20profil"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="Email"
          >
            <i className="fa fa-envelope" />
          </a>
        </div>
      </div>

      {/* Colonne droite — photo flottante */}
      <div className="hero-photo-wrap" aria-hidden="true">
        <div className="hero-glow" />
        <div className="hero-photo-ring">
          {/* Le chemin /photos/ pointe vers public/photos/ dans Vite */}
          <div className="hero-photo-placeholder">
            <img src="/photos/photo1.png" alt="Prince Koucheme" />
          </div>
        </div>
      </div>


    </section>
  );
}
