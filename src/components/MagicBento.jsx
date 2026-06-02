// MagicBento.jsx
// Composant original de React Bits — https://reactbits.dev/components/magic-bento
// Adapté avec les données de compétences professionnelles de Prince Koucheme

import { useRef, useEffect, useCallback, useState } from 'react'
import { gsap } from 'gsap'
import './MagicBento.css'

// ─── CONSTANTES PAR DÉFAUT ───────────────────────────────────────────────────
// Ces valeurs contrôlent le comportement global du composant.
// Tu peux les modifier sans toucher au reste du code.
const DEFAULT_PARTICLE_COUNT   = 10          // Nombre de particules au hover
const DEFAULT_SPOTLIGHT_RADIUS = 280         // Taille du cercle de lumière (px)
const DEFAULT_GLOW_COLOR       = '0, 171, 240' // Couleur de la lueur en RGB (bleu cyan)
const MOBILE_BREAKPOINT        = 768         // En dessous de cette largeur → mobile

// ─── DONNÉES DES CARTES ──────────────────────────────────────────────────────
// C'est ici que tu définis ce qui s'affiche dans chaque carte.
// Modifie les title, description et label pour les adapter à ton profil.
const cardData = [
  {
    label:       'Qualite',
    title:       'Creativite',
    description: 'Concevoir des interfaces originales et mémorables',
  },
  {
    label:       'Qualite',
    title:       'Communication',
    description: 'Expliquer et présenter clairement mes solutions',
  },
  {
    label:       'Methode',
    title:       'Resolution',
    description: 'Analyser et résoudre des problèmes techniques complexes',
  },
  {
    label:       'Qualite',
    title:       'Travail en equipe',
    description: 'Collaborer efficacement en environnement agile',
  },
  {
    label:       'Qualite',
    title:       'Adaptabilite',
    description: 'Monter rapidement en compétence sur de nouvelles technos',
  },
  {
    label:       'Méthode',
    title:       'Organisation',
    description: 'Gérer mes priorités et respecter les délais',
  },
]

// ─── UTILITAIRES ─────────────────────────────────────────────────────────────

// Crée un petit point lumineux (particle) à une position x, y
const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement('div')
  el.className = 'particle'
  el.style.cssText = `
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 5px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `
  return el
}

// Calcule les distances pour le spotlight (zone de proximité + fondu)
const calculateSpotlightValues = radius => ({
  proximity:    radius * 0.5,
  fadeDistance: radius * 0.75,
})

// Met à jour les variables CSS d'une carte pour positionner la lueur
const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect     = card.getBoundingClientRect()
  const relativeX = ((mouseX - rect.left) / rect.width)  * 100
  const relativeY = ((mouseY - rect.top)  / rect.height) * 100
  card.style.setProperty('--glow-x',         `${relativeX}%`)
  card.style.setProperty('--glow-y',         `${relativeY}%`)
  card.style.setProperty('--glow-intensity', glow.toString())
  card.style.setProperty('--glow-radius',    `${radius}px`)
}

// ─── COMPOSANT PARTICLECARD ──────────────────────────────────────────────────
// C'est la carte avec l'effet de particules (petits points lumineux).
// Elle reçoit des props (paramètres) depuis MagicBento.

const ParticleCard = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor     = DEFAULT_GLOW_COLOR,
  enableTilt    = true,
  clickEffect   = false,
  enableMagnetism = false,
}) => {
  const cardRef             = useRef(null)
  const particlesRef        = useRef([])
  const timeoutsRef         = useRef([])
  const isHoveredRef        = useRef(false)
  const memoizedParticles   = useRef([])
  const particlesInitialized = useRef(false)
  const magnetismAnimationRef = useRef(null)

  // Crée les particules une seule fois (mémoïsation pour la performance)
  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return
    const { width, height } = cardRef.current.getBoundingClientRect()
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    )
    particlesInitialized.current = true
  }, [particleCount, glowColor])

  // Supprime toutes les particules (au départ de la souris)
  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
    magnetismAnimationRef.current?.kill()

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)',
        onComplete: () => { particle.parentNode?.removeChild(particle) },
      })
    })
    particlesRef.current = []
  }, [])

  // Lance l'animation des particules (une par une avec un léger délai)
  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return
    if (!particlesInitialized.current) initializeParticles()

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return

        const clone = particle.cloneNode(true)
        cardRef.current.appendChild(clone)
        particlesRef.current.push(clone)

        // Apparition
        gsap.fromTo(clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
        )
        // Flottement aléatoire en boucle
        gsap.to(clone, {
          x: (Math.random() - 0.5) * 80,
          y: (Math.random() - 0.5) * 80,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none', repeat: -1, yoyo: true,
        })
        // Scintillement de l'opacité
        gsap.to(clone, {
          opacity: 0.3, duration: 1.5,
          ease: 'power2.inOut', repeat: -1, yoyo: true,
        })
      }, index * 100)

      timeoutsRef.current.push(timeoutId)
    })
  }, [initializeParticles])

  // Gestion des événements souris
  useEffect(() => {
    if (disableAnimations || !cardRef.current) return
    const element = cardRef.current

    const handleMouseEnter = () => {
      isHoveredRef.current = true
      animateParticles()
      if (enableTilt) {
        gsap.to(element, {
          rotateX: 4, rotateY: 4, duration: 0.3,
          ease: 'power2.out', transformPerspective: 1000,
        })
      }
    }

    const handleMouseLeave = () => {
      isHoveredRef.current = false
      clearAllParticles()
      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0, rotateY: 0, duration: 0.3, ease: 'power2.out',
        })
      }
    }

    const handleMouseMove = e => {
      if (!enableTilt || disableAnimations) return
      const rect    = element.getBoundingClientRect()
      const x       = e.clientX - rect.left
      const y       = e.clientY - rect.top
      const centerX = rect.width  / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -6
      const rotateY = ((x - centerX) / centerX) *  6
      gsap.to(element, {
        rotateX, rotateY, duration: 0.1,
        ease: 'power2.out', transformPerspective: 1000,
      })
    }

    const handleClick = e => {
      if (!clickEffect || disableAnimations) return
      const rect        = element.getBoundingClientRect()
      const x           = e.clientX - rect.left
      const y           = e.clientY - rect.top
      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      )
      const ripple = document.createElement('div')
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px; height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle,
          rgba(${glowColor}, 0.35) 0%,
          rgba(${glowColor}, 0.15) 30%,
          transparent 70%
        );
        left: ${x - maxDistance}px; top: ${y - maxDistance}px;
        pointer-events: none; z-index: 1000;
      `
      element.appendChild(ripple)
      gsap.fromTo(ripple,
        { scale: 0, opacity: 1 },
        { scale: 1, opacity: 0, duration: 0.7, ease: 'power2.out',
          onComplete: () => ripple.remove() }
      )
    }

    element.addEventListener('mouseenter',  handleMouseEnter)
    element.addEventListener('mouseleave',  handleMouseLeave)
    element.addEventListener('mousemove',   handleMouseMove)
    element.addEventListener('click',       handleClick)

    return () => {
      element.removeEventListener('mouseenter',  handleMouseEnter)
      element.removeEventListener('mouseleave',  handleMouseLeave)
      element.removeEventListener('mousemove',   handleMouseMove)
      element.removeEventListener('click',       handleClick)
      clearAllParticles()
    }
  }, [disableAnimations, enableTilt, clickEffect, animateParticles, clearAllParticles])

  return (
    <div ref={cardRef} className={className} style={style}>
      {children}
    </div>
  )
}

// ─── COMPOSANT GLOBALSPOTLIGHT ───────────────────────────────────────────────
// C'est le cercle de lumière qui suit ta souris sur toute la grille.
// Il illumine les bordures des cartes proches.

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled           = true,
  spotlightRadius   = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor         = DEFAULT_GLOW_COLOR,
}) => {
  const spotlightRef   = useRef(null)
  const isInsideSection = useRef(false)

  useEffect(() => {
    if (disableAnimations || !enabled || !gridRef.current) return

    // Crée le div du spotlight et l'ajoute au DOM
    const spotlight = document.createElement('div')
    spotlight.className = 'global-spotlight'
    spotlight.style.cssText = `
      position: fixed;
      width: ${spotlightRadius * 2}px;
      height: ${spotlightRadius * 2}px;
      border-radius: 50%;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.12) 0%,
        rgba(${glowColor}, 0.05) 40%,
        transparent 70%
      );
      transform: translate(-50%, -50%);
      pointer-events: none;
      opacity: 0;
    `
    document.body.appendChild(spotlight)
    spotlightRef.current = spotlight

    const handleMouseMove = e => {
      if (!gridRef.current) return
      const rect       = gridRef.current.getBoundingClientRect()
      const mouseInside = (
        e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top  && e.clientY <= rect.bottom
      )

      isInsideSection.current = mouseInside || false
      const cards = gridRef.current.querySelectorAll('.magic-bento-card')

      if (!mouseInside) {
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' })
        cards.forEach(card => { card.style.setProperty('--glow-intensity', '0') })
        return
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius)
      let minDistance = Infinity

      cards.forEach(card => {
        const cardRect   = card.getBoundingClientRect()
        const centerX    = cardRect.left + cardRect.width  / 2
        const centerY    = cardRect.top  + cardRect.height / 2
        const distance   = Math.hypot(e.clientX - centerX, e.clientY - centerY)
                         - Math.max(cardRect.width, cardRect.height) / 2
        const effectiveD = Math.max(0, distance)
        minDistance      = Math.min(minDistance, effectiveD)

        let glowIntensity = 0
        if      (effectiveD <= proximity)    glowIntensity = 1
        else if (effectiveD <= fadeDistance) glowIntensity = (fadeDistance - effectiveD) / (fadeDistance - proximity)

        updateCardGlowProperties(card, e.clientX, e.clientY, glowIntensity, spotlightRadius)
      })

      gsap.to(spotlightRef.current, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' })

      const targetOpacity = minDistance <= proximity
        ? 0.8
        : minDistance <= fadeDistance
          ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
          : 0

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      isInsideSection.current = false
      gridRef.current?.querySelectorAll('.magic-bento-card').forEach(card => {
        card.style.setProperty('--glow-intensity', '0')
      })
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' })
      }
    }

    document.addEventListener('mousemove',  handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove',  handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current)
    }
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor])

  return null
}

// ─── COMPOSANT BENTOCARDGRID ─────────────────────────────────────────────────
// Un simple wrapper <div> avec la classe CSS "card-grid bento-section"

const BentoCardGrid = ({ children, gridRef }) => (
  <div className="card-grid bento-section" ref={gridRef}>
    {children}
  </div>
)

// ─── HOOK DE DÉTECTION MOBILE ────────────────────────────────────────────────
// Sur mobile, on désactive les animations (trop gourmandes)

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

// ─── COMPOSANT PRINCIPAL MagicBento ─────────────────────────────────────────
// C'est le composant que tu vas importer dans Skills.jsx.
// Tu peux passer des props pour personnaliser le comportement.

const MagicBento = ({
  textAutoHide      = true,
  enableStars       = true,   // active les particules
  enableSpotlight   = true,   // active le spotlight global
  enableBorderGlow  = true,   // active la lueur sur les bordures
  disableAnimations = false,
  spotlightRadius   = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount     = DEFAULT_PARTICLE_COUNT,
  enableTilt        = true,   // active l'effet de tilt 3D
  glowColor         = DEFAULT_GLOW_COLOR,
  clickEffect       = true,   // active le ripple au clic
  enableMagnetism   = false,
}) => {
  const gridRef                 = useRef(null)
  const isMobile                = useMobileDetection()
  const shouldDisableAnimations = disableAnimations || isMobile

  return (
    <>
      {/* Spotlight global (suit la souris sur toute la grille) */}
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      {/* La grille de cartes */}
      <BentoCardGrid gridRef={gridRef}>
        {cardData.map((card, index) => {
          const baseClass = [
            'magic-bento-card',
            textAutoHide    ? 'magic-bento-card--text-autohide' : '',
            enableBorderGlow ? 'magic-bento-card--border-glow'   : '',
          ].join(' ')

          const cardStyle = {
            backgroundColor: '#0d1520',
            '--glow-color': glowColor,
          }

          // Avec particules
          if (enableStars) {
            return (
              <ParticleCard
                key={index}
                className={baseClass}
                style={cardStyle}
                disableAnimations={shouldDisableAnimations}
                particleCount={particleCount}
                glowColor={glowColor}
                enableTilt={enableTilt}
                clickEffect={clickEffect}
                enableMagnetism={enableMagnetism}
              >
                <div className="magic-bento-card__header">
                  <div className="magic-bento-card__label">{card.label}</div>
                </div>
                <div className="magic-bento-card__content">
                  <h3 className="magic-bento-card__title">{card.title}</h3>
                  <p  className="magic-bento-card__description">{card.description}</p>
                </div>
              </ParticleCard>
            )
          }

          // Sans particules (version allégée)
          return (
            <div key={index} className={baseClass} style={cardStyle}>
              <div className="magic-bento-card__header">
                <div className="magic-bento-card__label">{card.label}</div>
              </div>
              <div className="magic-bento-card__content">
                <h3 className="magic-bento-card__title">{card.title}</h3>
                <p  className="magic-bento-card__description">{card.description}</p>
              </div>
            </div>
          )
        })}
      </BentoCardGrid>
    </>
  )
}

export default MagicBento
