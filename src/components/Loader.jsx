// Loader.jsx
// La balle fait de vrais bonds (arcs) entre les lettres.
// On anime X et Y séparément avec framer-motion :
//   - X : position de la lettre cible
//   - Y : monte au milieu du bond, descend sur la lettre
// Pour les lettres P r ı n c e : la balle atterrit en HAUT (comme un point de i)
// Pour le "."                  : la balle atterrit en BAS (à la hauteur du point)

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, animate } from 'framer-motion'
import MagicRings from './MagicRings'

const LETTERS = ['P','r','ı','n','c','e','.']
// Séquence : part du ı (2), va vers . (6), revient vers P (0), retour ı (2)
const SEQUENCE = [2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0, 1, 2]

export default function Loader({ isLoading }) {
  const letterRefs   = useRef([])
  const containerRef = useRef(null)
  const [positions, setPositions] = useState(null) // {x, yTop, yDot} pour chaque lettre

  const ballX = useMotionValue(0)
  const ballY = useMotionValue(0)

  // Mesure les positions réelles après chargement de la fonte
  useEffect(() => {
    const id = setTimeout(() => {
      if (!containerRef.current) return
      const cRect = containerRef.current.getBoundingClientRect()

      const pos = letterRefs.current.map((el, i) => {
        if (!el) return { x: 0, yTop: -10, yDot: 0 }
        const r = el.getBoundingClientRect()
        const x = r.left - cRect.left + r.width / 2  // centre horizontal
        const yTop = r.top  - cRect.top  + 20        // juste au-dessus de la lettre
        const yDot = r.bottom - cRect.top - r.height * 0.15 // hauteur du point "."
        return { x, yTop, yDot }
      })

      setPositions(pos)
    }, 350)
    return () => clearTimeout(id)
  }, [])

  // Lance les bonds dès que les positions sont connues
  useEffect(() => {
    if (!positions) return

    let stepIdx = 0
    let cancelled = false

    // Place la balle sur la position initiale (lettre ı, index 2)
    const startPos = positions[SEQUENCE[0]]
    ballX.set(startPos.x)
    ballY.set(startPos.yTop)

    const jump = () => {
      if (cancelled) return

      const nextIdx = (stepIdx + 1) % SEQUENCE.length
      const from    = positions[SEQUENCE[stepIdx]]
      const to      = positions[SEQUENCE[nextIdx]]

      // Y de départ et d'arrivée selon si c'est le "." ou une lettre normale
      const fromY = SEQUENCE[stepIdx] === 6 ? from.yDot : from.yTop
      const toY   = SEQUENCE[nextIdx]  === 6 ? to.yDot  : to.yTop

      // Hauteur du pic du bond : monte entre les deux positions Y
      const peakY = Math.min(fromY, toY) - 10

      const duration = 0.30 // secondes par bond

      // Anime X : va directement à la destination
      animate(ballX, to.x, {
        duration,
        ease: 'easeInOut',
      })

      // Anime Y : monte d'abord au pic, puis descend sur la lettre cible
      animate(ballY, peakY, {
        duration: duration * 0.5,
        ease: 'easeOut',
        onComplete: () => {
          if (cancelled) return
          animate(ballY, toY, {
            duration: duration * 0.95,
            ease: 'easeIn',
            onComplete: () => {
              if (cancelled) return
              stepIdx = nextIdx
              // Petite pause sur le "." et sur le "P"
              const pause = (SEQUENCE[nextIdx] === 6 || SEQUENCE[nextIdx] === 0) ? 400 : 60
              setTimeout(jump, pause)
            }
          })
        }
      })
    }

    // Démarre après un court délai
    const startId = setTimeout(jump, 200)
    return () => {
      cancelled = true
      clearTimeout(startId)
    }
  }, [positions])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#060d14',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Anneaux WebGL */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <MagicRings
              color="#00b4ff" colorTwo="#00ffb0"
              ringCount={6} speed={0.9} attenuation={10}
              lineThickness={2} baseRadius={0.3} radiusStep={0.09}
              scaleRate={0.12} opacity={1} noiseAmount={0.08}
              ringGap={1.5} fadeIn={0.7} fadeOut={0.5}
              followMouse={false} hoverScale={1.0} parallax={0} clickBurst={false}
            />
          </div>

          {/* Contenu centré */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
              pointerEvents: 'none',
            }}
          >
            {/* Mot + balle */}
            <div
              ref={containerRef}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              {/* La balle — unique point bleu */}
              {positions && (
                <motion.div
                  style={{
                    position: 'absolute',
                    top: -10,
                    left: 0,
                    width: 7,
                    height: 7,
                    marginLeft: -3.5,
                    background: '#00b4ff',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px #00b4ff, 0 0 22px rgba(0,180,255,0.5)',
                    x: ballX,
                    y: ballY,
                    zIndex: 2,
                  }}
                />
              )}

              {/* "Prınce." — ı sans point, . invisible */}
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '3rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#e8f0f8',
                display: 'flex',
                alignItems: 'baseline',
                userSelect: 'none',
              }}>
                {LETTERS.map((char, i) => (
                  <span
                    key={i}
                    ref={el => letterRefs.current[i] = el}
                    style={{
                      display: 'inline-block',
                      opacity: char === '.' ? 0 : 1,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>

            {/* Texte mono */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                color: 'rgba(0,180,255,0.5)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              $ chargement
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >_</motion.span>
            </motion.p>

            {/* Barre de progression */}
            <div style={{
              width: '180px', height: '2px',
              background: 'rgba(0,180,255,0.1)',
              borderRadius: '10px', overflow: 'hidden',
            }}>
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.4, ease: [0.23, 1, 0.32, 1] }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #00b4ff, #00ffb0)',
                  borderRadius: '10px',
                  boxShadow: '0 0 8px rgba(0,180,255,0.6)',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}