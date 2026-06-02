export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-logo">Prince<span>.</span></div>

      <p className="footer-credit">
        Développé avec ❤️ par <strong>Prince Koucheme</strong>{' '}
        — © {new Date().getFullYear()} All rights reserved
      </p>

      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </footer>
  )
}