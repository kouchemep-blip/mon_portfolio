// Skills.jsx
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { threshold }
    )

    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView]
}

const TECH_BARS = [
  { name: 'HTML', pct: 90, icon: 'fab fa-html5', color: '#e65100' },
  { name: 'CSS', pct: 76, icon: 'fab fa-css3-alt', color: '#7e57c2' },
  { name: 'Bootstrap', pct: 45, icon: 'fab fa-bootstrap', color: '#7d29fe' },
  { name: 'React', pct: 55, icon: 'fab fa-react', color: '#00bcd4' },
  { name: 'JavaScript', pct: 46, icon: 'fab fa-js', color: '#ffca28' },
  { name: 'PHP', pct: 50, icon: 'fab fa-php', color: '#1e88e5' },
  { name: 'Python', pct: 70, icon: 'fab fa-python', color: '#498ba7' },
]

const PRO_SKILLS = [
  { label: 'Creativity', pct: 90, desc: 'Imaginer des interfaces originales, utiles et memorables.' },
  { label: 'Communication', pct: 65, desc: 'Expliquer clairement les idees, choix et solutions.' },
  { label: 'Problem Solving', pct: 95, desc: 'Analyser vite, decouper le probleme et trouver une issue.' },
  { label: 'Teamwork', pct: 85, desc: 'Collaborer avec ecoute, rythme et responsabilite.' },
  { label: 'Adaptability', pct: 92, desc: 'Apprendre rapidement et m ajuster aux contraintes.' },
  { label: 'Organisation', pct: 83, desc: 'Prioriser, structurer le travail et tenir les delais.' },
]

const CIRCUMFERENCE = 2 * Math.PI * 40
const GLOW_COLOR = '0, 171, 240'
const PARTICLE_COUNT = 8
const SPOTLIGHT_RADIUS = 260
const MOBILE_BREAKPOINT = 768

function getOffset(pct) {
  return CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE
}

const createParticle = (x, y) => {
  const el = document.createElement('div')
  el.style.cssText = `
    position: absolute;
    width: 3px; height: 3px;
    border-radius: 50%;
    background: rgba(${GLOW_COLOR}, 1);
    box-shadow: 0 0 5px rgba(${GLOW_COLOR}, 0.7);
    pointer-events: none;
    z-index: 10;
    left: ${x}px; top: ${y}px;
  `
  return el
}

function MagicSkillCard({ children, className = '' }) {
  const cardRef = useRef(null)
  const particles = useRef([])
  const timeouts = useRef([])
  const isHovered = useRef(false)
  const memoized = useRef(null)

  const initParticles = () => {
    if (memoized.current || !cardRef.current) return
    const { width, height } = cardRef.current.getBoundingClientRect()
    memoized.current = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(Math.random() * width, Math.random() * height)
    )
  }

  const clearParticles = () => {
    timeouts.current.forEach(clearTimeout)
    timeouts.current = []
    particles.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => particle.parentNode?.removeChild(particle),
      })
    })
    particles.current = []
  }

  const spawnParticles = () => {
    if (!cardRef.current || !isHovered.current) return
    initParticles()

    memoized.current.forEach((src, i) => {
      const id = setTimeout(() => {
        if (!isHovered.current || !cardRef.current) return
        const clone = src.cloneNode(true)
        cardRef.current.appendChild(clone)
        particles.current.push(clone)

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
        )
        gsap.to(clone, {
          x: (Math.random() - 0.5) * 70,
          y: (Math.random() - 0.5) * 70,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true,
        })
        gsap.to(clone, {
          opacity: 0.25,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
        })
      }, i * 80)
      timeouts.current.push(id)
    })
  }

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const onMove = e => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      gsap.to(el, {
        rotateX: ((y - cy) / cy) * -6,
        rotateY: ((x - cx) / cx) * 6,
        duration: 0.15,
        ease: 'power2.out',
        transformPerspective: 900,
      })
    }

    const onEnter = () => {
      isHovered.current = true
      spawnParticles()
      gsap.to(el, {
        rotateX: 3,
        rotateY: 3,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 900,
      })
    }

    const onLeave = () => {
      isHovered.current = false
      clearParticles()
      gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.4, ease: 'power2.out' })
    }

    const onClick = e => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const dist = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      )
      const ripple = document.createElement('div')
      ripple.style.cssText = `
        position:absolute;
        width:${dist * 2}px; height:${dist * 2}px;
        border-radius:50%;
        background:radial-gradient(circle,
          rgba(${GLOW_COLOR},0.3) 0%,
          rgba(${GLOW_COLOR},0.1) 40%,
          transparent 70%
        );
        left:${x - dist}px; top:${y - dist}px;
        pointer-events:none; z-index:20;
      `
      el.appendChild(ripple)
      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          onComplete: () => ripple.remove(),
        }
      )
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('click', onClick)

    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('click', onClick)
      clearParticles()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={cardRef}
      className={`magic-bento-card magic-bento-card--border-glow ${className}`.trim()}
      style={{ '--glow-color': GLOW_COLOR }}
    >
      {children}
    </div>
  )
}

function RadialBentoCard({ label, pct, desc, inView }) {
  return (
    <MagicSkillCard>
      <div className="radial-svg-wrap">
        <svg viewBox="0 0 100 100">
          <circle className="radial-track" cx="50" cy="50" r="40" />
          <circle
            className="radial-fill"
            cx="50"
            cy="50"
            r="40"
            style={{
              strokeDasharray: CIRCUMFERENCE,
              strokeDashoffset: inView ? getOffset(pct) : CIRCUMFERENCE,
            }}
          />
        </svg>
        <div className="radial-pct">{pct}%</div>
      </div>
      <div className="radial-label">{label}</div>
      <p className="radial-desc">{desc}</p>
    </MagicSkillCard>
  )
}

function TechBentoCard({ name, pct, icon, color, inView }) {
  return (
    <MagicSkillCard className="tech-bento-card">
      <div className="tech-bar-header">
        <span className="tech-bar-name">
          <i className={icon} style={{ color }} />
          {name}
        </span>
        <span className="tech-bar-pct">{pct}%</span>
      </div>
      <div className="tech-bar-track">
        <div className="tech-bar-fill" style={{ width: inView ? `${pct}%` : '0%' }} />
      </div>
    </MagicSkillCard>
  )
}

function GlobalSpotlight({ gridRef }) {
  const spotRef = useRef(null)
  const isMobile = window.innerWidth <= MOBILE_BREAKPOINT

  useEffect(() => {
    if (isMobile || !gridRef.current) return

    const spot = document.createElement('div')
    spot.style.cssText = `
      position: fixed;
      width: ${SPOTLIGHT_RADIUS * 2}px;
      height: ${SPOTLIGHT_RADIUS * 2}px;
      border-radius: 50%;
      background: radial-gradient(circle,
        rgba(${GLOW_COLOR}, 0.1) 0%,
        rgba(${GLOW_COLOR}, 0.04) 45%,
        transparent 70%
      );
      transform: translate(-50%, -50%);
      pointer-events: none;
      mix-blend-mode: screen;
      z-index: 200;
      opacity: 0;
    `
    document.body.appendChild(spot)
    spotRef.current = spot

    const proximity = SPOTLIGHT_RADIUS * 0.5
    const fadeDistance = SPOTLIGHT_RADIUS * 0.75

    const onMove = e => {
      if (!gridRef.current) return
      const rect = gridRef.current.getBoundingClientRect()
      const inside = e.clientX >= rect.left && e.clientX <= rect.right
        && e.clientY >= rect.top && e.clientY <= rect.bottom

      const cards = gridRef.current.querySelectorAll('.magic-bento-card')

      if (!inside) {
        gsap.to(spot, { opacity: 0, duration: 0.3 })
        cards.forEach(card => card.style.setProperty('--glow-intensity', '0'))
        return
      }

      let minDist = Infinity
      cards.forEach(card => {
        const cr = card.getBoundingClientRect()
        const cx = cr.left + cr.width / 2
        const cy = cr.top + cr.height / 2
        const d = Math.max(
          0,
          Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(cr.width, cr.height) / 2
        )
        minDist = Math.min(minDist, d)

        const glow = d <= proximity
          ? 1
          : d <= fadeDistance
            ? (fadeDistance - d) / (fadeDistance - proximity)
            : 0

        card.style.setProperty('--glow-x', `${((e.clientX - cr.left) / cr.width) * 100}%`)
        card.style.setProperty('--glow-y', `${((e.clientY - cr.top) / cr.height) * 100}%`)
        card.style.setProperty('--glow-intensity', glow.toString())
        card.style.setProperty('--glow-radius', `${SPOTLIGHT_RADIUS}px`)
      })

      gsap.to(spot, { left: e.clientX, top: e.clientY, duration: 0.1 })
      const targetOpacity = minDist <= proximity
        ? 0.8
        : minDist <= fadeDistance
          ? ((fadeDistance - minDist) / (fadeDistance - proximity)) * 0.8
          : 0
      gsap.to(spot, { opacity: targetOpacity, duration: 0.2 })
    }

    const onLeave = () => {
      gridRef.current?.querySelectorAll('.magic-bento-card')
        .forEach(card => card.style.setProperty('--glow-intensity', '0'))
      gsap.to(spot, { opacity: 0, duration: 0.3 })
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      spotRef.current?.parentNode?.removeChild(spotRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export default function Skills() {
  const [ref, inView] = useInView()
  const gridRef = useRef(null)

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title" ref={ref}>
      <div className="tag">Expertises</div>

      <h2 className={`section-title reveal${inView ? ' up' : ''}`} id="skills-title">
        My <span>Skills</span>
      </h2>

      <GlobalSpotlight gridRef={gridRef} />

      <div className="skills-wrapper bento-section" ref={gridRef}>
        <div className={`reveal d1${inView ? ' up' : ''}`}>
          <h3 className="skills-block-title">Technical Skills</h3>
          <div className="tech-bars tech-bento-grid">
            {TECH_BARS.map(({ name, pct, icon, color }) => (
              <TechBentoCard
                key={name}
                name={name}
                pct={pct}
                icon={icon}
                color={color}
                inView={inView}
              />
            ))}
          </div>
        </div>

        <div className={`reveal d2${inView ? ' up' : ''}`}>
          <h3 className="skills-block-title">Professional Skills</h3>
          <div className="pro-grid">
            {PRO_SKILLS.map(({ label, pct, desc }) => (
              <RadialBentoCard key={label} label={label} pct={pct} desc={desc} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
