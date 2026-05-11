// Navbar.jsx
// Ce composant gère la barre de navigation fixe en haut de la page.
// Il écoute le scroll pour ajouter un fond flouté quand on descend,
// et gère le menu hamburger pour mobile.

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Écoute le scroll → ajoute la classe “scrolled” après 60px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const links = ["Home", "About", "Services", "Skills", "Projects", "Contact"];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Menu mobile — overlay plein écran ── */}
      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="mob-link"
            onClick={closeMenu}
          >
            {link}
          </a>
        ))}
      </div>
      
      {/* ── Barre de nav principale ── */}
      <header
        className={`nav${scrolled ? " scrolled" : ""}`}
        id="navbar"
        role="banner"
      >
        {/* Logo cliquable → retour en haut */}
        <a
          href="#home"
          className="nav-logo"
          aria-label="Portfolio Prince Koucheme"
        >
          Prince<span>.</span>
        </a>

        {/* Liens desktop */}
        <ul className="nav-links" role="list">
          {links.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                style={i === 0 ? { color: "#00abf0" } : undefined}
              >
                {i === 0 ? `| ${link}` : link}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton hamburger mobile */}
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>
    </>
  );
}
