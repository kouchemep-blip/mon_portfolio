// NotFound.jsx  (dans src/pages/)
// La page 404 — s'affiche quand l'URL ne correspond à aucune route.
// Simple et sobre, dans les couleurs du portfolio.

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#060d14',
      color: '#e8f0f8',
      fontFamily: 'Outfit, sans-serif',
      gap: '1rem',
    }}>
      <h1 style={{ fontSize: '5rem', fontWeight: 800, color: '#00abf0', lineHeight: 1 }}>
        404
      </h1>
      <p style={{ color: '#5a7080', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>
        $ page introuvable
      </p>
      <a
        href="/"
        style={{
          marginTop: '1.5rem',
          color: '#00abf0',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.8rem',
          textDecoration: 'none',
          border: '1.5px solid rgba(0,180,255,0.4)',
          padding: '0.6rem 1.4rem',
          borderRadius: '50px',
          transition: 'background 0.3s',
        }}
      >
        ← Retour à l'accueil
      </a>
    </div>
  )
}