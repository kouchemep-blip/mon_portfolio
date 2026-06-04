// App.jsx

import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar        from './components/Navbar'
import ScrollNav     from './components/ScrollNav'
import ThemeToggle   from './components/ThemeToggle'
import Loader        from './components/Loader'
import Home          from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
import NotFound      from './pages/NotFound'

// ── HashScroll ────────────────────────────────────────────────────────────────
// Quand on navigue vers une URL comme /services/web#contact,
// ce composant fait défiler automatiquement jusqu'à l'ancre #contact
// après un petit délai (100ms) pour laisser la page se monter.

function HashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const timer = setTimeout(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
    return () => clearTimeout(timer)
  }, [pathname, hash])

  return null
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  // ── Thème clair / sombre ────────────────────────────────────────────────────
  // On lit la préférence sauvegardée dans localStorage au premier rendu.
  // Si rien n'est sauvegardé → mode sombre par défaut (isDark = true).
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved !== 'light'
  })

  // Chaque fois que isDark change :
  //   → on ajoute ou retire la classe "light-mode" sur <html>
  //   → on sauvegarde le choix dans localStorage
  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.remove('light-mode')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.add('light-mode')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  // ── Loader ──────────────────────────────────────────────────────────────────
  // Timeout de sécurité 3s pour éviter le bug où 'load' ne se déclenche jamais.
  useEffect(() => {
    const stopLoader = () => setIsLoading(false)
    const fallback   = setTimeout(stopLoader, 3000)

    if (document.readyState === 'complete') {
      setTimeout(stopLoader, 2600)
    } else {
      window.addEventListener('load', () => setTimeout(stopLoader, 2600), { once: true })
    }

    return () => clearTimeout(fallback)
  }, [])

  return (
    <>
      {/* Couche de bruit visuel décorative */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Loader — visible pendant isLoading = true */}
      <Loader isLoading={isLoading} />

      {/* Site principal — caché pendant le chargement */}
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <HashScroll />
        <Navbar />
        <ScrollNav />

        {/* Bouton thème — bas gauche, avec effet Magnet */}
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

        <Routes>
          <Route path="/"                        element={<Home />}          />
          <Route path="/services/:serviceId"     element={<ServiceDetail />} />
          <Route path="*"                        element={<NotFound />}      />
        </Routes>
      </div>
    </>
  )
}