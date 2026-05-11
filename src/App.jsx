// App.jsx
// CORRECTION DU BUG LOADER INFINI :
// Le problème était que window.addEventListener('load', ...) ne se déclenchait
// parfois jamais car l'événement 'load' était déjà passé avant que React monte.
// Solution : on vérifie d'abord si document.readyState === 'complete',
// ET on ajoute un timeout de sécurité de 3s qui force la fin du loader
// dans tous les cas.

import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar    from './components/Navbar'
import ScrollNav from './components/ScrollNav'
import Loader    from './components/Loader'
import Home      from './pages/Home'
import NotFound  from './pages/NotFound'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fonction qui arrête le loader
    const stopLoader = () => setIsLoading(false)

    // Timeout de sécurité : quoi qu'il arrive, le loader s'arrête après 3s
    // Ça évite le bug où window 'load' ne se déclenche jamais
    const fallback = setTimeout(stopLoader, 3000)

    if (document.readyState === 'complete') {
      // La page est déjà chargée → on attend juste un peu pour l'animation
      setTimeout(stopLoader, 2600)
    } else {
      // La page charge encore → on attend l'événement 'load'
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

      {/* Site principal — invisible pendant le chargement */}
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <Navbar />
        <ScrollNav />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="*"  element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}