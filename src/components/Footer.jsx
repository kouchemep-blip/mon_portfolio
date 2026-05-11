// Footer.jsx
// Le pied de page simple avec le logo, le crédit et les liens de navigation.
// Rien de dynamique ici — c'est du JSX statique.

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-logo">Prince<span>.</span></div>

      <p className="footer-credit">
        Développé avec ❤️ par <strong>Mr. Souverain Koucheme</strong> — © 2025 All rights reserved
      </p>

      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </footer>
  )
}