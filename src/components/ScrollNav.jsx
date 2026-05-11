// ScrollNav.jsx
// Ce composant affiche deux petits boutons ronds flottants à droite de l'écran :
// un pour remonter en haut, un pour descendre en bas de page.
// C'est purement décoratif/utilitaire, pas de logique complexe.

export default function ScrollNav() {
  return (
    <div className="scroll-nav" aria-hidden="true">
      <button
        className="scroll-nav-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Haut de page"
      >
        <i className="fa fa-angle-up" />
      </button>
      <button
        className="scroll-nav-btn"
        onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
        title="Bas de page"
      >
        <i className="fa fa-angle-down" />
      </button>
    </div>
  )
}