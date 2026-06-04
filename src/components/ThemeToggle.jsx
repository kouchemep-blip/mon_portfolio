// ThemeToggle.jsx
// Le bouton flottant en bas à gauche qui bascule entre mode sombre et clair.
// Il utilise le composant Magnet pour l'effet d'attraction magnétique.
// Il reçoit deux props depuis App.jsx :
//   - isDark  : boolean — true = mode sombre actif, false = mode clair
//   - onToggle : function — appelée au clic pour inverser le thème

import Magnet from './Magnet'

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    // Ce div positionne le bouton en bas à gauche de l'écran
    // z-index 300 = même niveau que les boutons scroll-nav à droite
    <div className="theme-toggle-wrap" aria-label="Changer de thème">

      {/*
        Magnet enveloppe le bouton.
        padding=80  → la zone d'attraction commence à 80px du bouton
        magnetStrength=2.5 → attraction modérée (plus doux que la valeur par défaut)
      */}
      <Magnet padding={80} magnetStrength={2.5}>
        <button
          className="theme-toggle-btn"
          onClick={onToggle}
          aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
          title={isDark ? 'Mode clair' : 'Mode sombre'}
        >
          {/*
            Si isDark est true  → on affiche le soleil ☀️  (pour passer au clair)
            Si isDark est false → on affiche la lune  🌙  (pour revenir au sombre)
          */}
          {isDark
            ? <i className="fa fa-sun"  />
            : <i className="fa fa-moon" />
          }
        </button>
      </Magnet>

    </div>
  )
}