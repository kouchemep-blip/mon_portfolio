import { useEffect, useState } from "react";

const links = ["Home", "About", "Services", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((link) => link.toLowerCase());
    let ticking = false;

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= marker && rect.bottom > marker) {
          current = id;
          break;
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(current);
      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        {links.map((link) => {
          const id = link.toLowerCase();

          return (
            <a
              key={link}
              href={`/#${id}`}
              className={`mob-link${activeSection === id ? " active" : ""}`}
              onClick={closeMenu}
            >
              {link}
            </a>
          );
        })}
      </div>

      <header
        className={`nav${scrolled ? " scrolled" : ""}`}
        id="navbar"
        role="banner"
      >
        <a
          href="/#home"
          className="nav-logo"
          aria-label="Portfolio Prince Koucheme"
        >
          Prince<span>.</span>
        </a>

        <ul className="nav-links" role="list">
          {links.map((link) => {
            const id = link.toLowerCase();

            return (
              <li key={link}>
                <a
                  href={`/#${id}`}
                  className={activeSection === id ? "active" : undefined}
                  aria-current={activeSection === id ? "page" : undefined}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
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
