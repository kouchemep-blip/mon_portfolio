// Skills.jsx
// La section compétences avec deux blocs :
// 1. Les barres techniques (HTML, CSS, JS, Python, etc.) qui s'animent en largeur
// 2. Les cercles SVG radials (Creativity, Communication, etc.) qui se remplissent
//
// Les animations se déclenchent quand la section entre dans le champ de vision.
// La circumférence du cercle SVG (r=40) = 2 * π * 40 ≈ 251 — c'est le dasharray.

import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

// Données des barres techniques
const TECH_BARS = [
  { name: 'HTML',       pct: 90, icon: 'fab fa-html5',       color: '#e65100' },
  { name: 'CSS',        pct: 60, icon: 'fab fa-css3-alt',    color: '#7e57c2' },
  { name: 'JavaScript', pct: 37, icon: 'fab fa-js',          color: '#ffca28' },
  { name: 'Python',     pct: 50, icon: 'fab fa-python',      color: '#498ba7' },
  { name: 'Bootstrap',  pct: 45, icon: 'fab fa-bootstrap',   color: '#7d29fe' },
  { name: 'React',      pct: 35, icon: 'fab fa-react',       color: '#00bcd4' },
  { name: 'PHP',        pct: 50, icon: 'fab fa-php',         color: '#1e88e5' },
]

// Données des compétences professionnelles (cercles)
const PRO_SKILLS = [
  { label: 'Creativity',       pct: 90 },
  { label: 'Communication',    pct: 65 },
  { label: 'Problem Solving',  pct: 95 },
  { label: 'Teamwork',         pct: 85 },
  { label: 'Adaptability',     pct: 92 },
  { label: 'Organisation',     pct: 83 },
]

// Calcule le stroke-dashoffset pour remplir le cercle au bon pourcentage
// dashoffset = circumférence - (pct/100 * circumférence)
const CIRCUMFERENCE = 2 * Math.PI * 40 // ≈ 251

function getOffset(pct) {
  return CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title" ref={ref}>
      <div className="tag">Expertises</div>

      <h2 className={`section-title reveal${inView ? ' up' : ''}`} id="skills-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-wrapper">

        {/* ── Bloc 1 : barres techniques ── */}
        <div className={`reveal d1${inView ? ' up' : ''}`}>
          <h3 className="skills-block-title">Technical Skills</h3>
          <div className="tech-bars">
            {TECH_BARS.map(({ name, pct, icon, color }) => (
              <div className="tech-bar" key={name}>
                <div className="tech-bar-header">
                  <span className="tech-bar-name">
                    <i className={icon} style={{ color }} />
                    {name}
                  </span>
                  <span className="tech-bar-pct">{pct}%</span>
                </div>
                <div className="tech-bar-track">
                  {/* La largeur passe de 0 à pct% grâce à la transition CSS
                      combinée avec le style inline conditionnel */}
                  <div
                    className="tech-bar-fill"
                    style={{ width: inView ? `${pct}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bloc 2 : cercles radials ── */}
        <div className={`reveal d2${inView ? ' up' : ''}`}>
          <h3 className="skills-block-title">Professional Skills</h3>
          <div className="pro-grid">
            {PRO_SKILLS.map(({ label, pct }) => (
              <div className="radial-card" key={label}>
                <div className="radial-svg-wrap">
                  <svg viewBox="0 0 100 100">
                    {/* Cercle de fond gris */}
                    <circle className="radial-track" cx="50" cy="50" r="40" />
                    {/* Cercle coloré — le dashoffset diminue pour "remplir" */}
                    <circle
                      className="radial-fill"
                      cx="50" cy="50" r="40"
                      style={{
                        strokeDasharray: CIRCUMFERENCE,
                        strokeDashoffset: inView ? getOffset(pct) : CIRCUMFERENCE,
                      }}
                    />
                  </svg>
                  <div className="radial-pct">{pct}%</div>
                </div>
                <div className="radial-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}