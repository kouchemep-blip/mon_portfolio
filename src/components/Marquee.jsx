// Marquee.jsx
// La bande défilante horizontale qui affiche en boucle les technologies maîtrisées.
// L'animation est gérée par le CSS (@keyframes marqueeScroll dans index.css).
// On duplique les items 3 fois pour que le défilement soit sans coupure visible.

const ITEMS = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Python',
  'PHP', 'Bootstrap', 'Cybersecurity', 'Networks', 'UI/UX', 'Git', 'Node.js'
]

export default function Marquee() {
  // On répète 3 fois la liste pour que la bande soit toujours pleine
  const track = [...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div className="marquee-bar" aria-hidden="true">
      <div className="marquee-track">
        {track.map((name, i) => (
          <div className="marquee-item" key={i}>
            {name}
            <span className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  )
}