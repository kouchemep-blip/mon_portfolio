// Contact.jsx
// La section contact avec deux colonnes :
// - Gauche : texte animé (effet machine à écrire), tes infos de contact
// - Droite : formulaire avec nom, email, téléphone, message
//
// On reproduit en React l'effet de frappe du script.js original (joinType).
// La section "prev-work" est présente mais cachée (display:none) comme dans ton HTML.

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

// Phrases qui défilent dans la zone de typing du contact
const JOIN_WORDS = [
  'What about working together ?',
  'You know what you should do ?',
  'Let me know your appreciation...',
  'Have a great day!',
]

function JoinTyping() {
  const [text, setText]       = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDel]    = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    const word = JOIN_WORDS[wordIdx]
    if (!deleting) {
      if (text.length < word.length) {
        timer.current = setTimeout(() => setText(word.slice(0, text.length + 1)), 120)
      } else {
        timer.current = setTimeout(() => setDel(true), 1200)
      }
    } else {
      if (text.length > 0) {
        timer.current = setTimeout(() => setText(text.slice(0, -1)), 60)
      } else {
        setDel(false)
        setWordIdx(i => (i + 1) % JOIN_WORDS.length)
      }
    }
    return () => clearTimeout(timer.current)
  }, [text, deleting, wordIdx])

  return (
    <p className="join-subtitle">{text}</p>
  )
}

export default function Contact() {
  const [ref, inView] = useInView()
  const [sent, setSent] = useState(false)

  // Simule l'envoi du formulaire — affiche un message de succès 4 secondes
  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      e.target.reset()
    }, 4000)
  }

  return (
    <section className="join" id="contact" aria-labelledby="contact-title" ref={ref}>
      <div className="tag">Collaboration</div>

      <h2 className={`section-title reveal${inView ? ' up' : ''}`} id="contact-title">
        Join <span>Me</span>
      </h2>

      <div className="join-grid">

        {/* ── Colonne gauche ── */}
        <div className={`reveal d1${inView ? ' up' : ''}`}>

          {/* Texte animé style machine à écrire */}
          <JoinTyping />

          <p className="join-desc">
            I'm currently open to freelance opportunities, collaborations, and
            innovative projects in web development, UI/UX, and app design. I'm
            always eager to learn, improve, and contribute to impactful
            projects.<br /><br />
            Feel free to reach out — let's discuss how I can help bring your
            ideas to life.
          </p>

          {/* Coordonnées */}
          <div className="join-contacts">
            <div className="join-contact-item">
              <i className="bx bxl-gmail" />
              <span>kouchemep@gmail.com</span>
            </div>
            <div className="join-contact-item">
              <i className="bx bxs-phone" />
              <span>01 54 11 09 30</span>
            </div>
          </div>

          {/* Section "travaux précédents" — cachée comme dans le HTML original */}
          <div className="prev-work reveal d2" style={{ display: 'none' }}>
            <div className="prev-work-title">Previously built →</div>
          </div>
        </div>

        {/* ── Colonne droite : formulaire ── */}
        <form
          className={`contact-form reveal d2${inView ? ' up' : ''}`}
          onSubmit={handleSubmit}
          noValidate
          aria-label="Formulaire de contact"
        >
          {/* En React on n'utilise PAS <form> avec action — on gère tout en JS */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="c-nom">Nom</label>
              <input className="form-input" type="text" id="c-nom" name="nom"
                placeholder="Mon Nom" autoComplete="name" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="c-email">E-mail</label>
              <input className="form-input" type="email" id="c-email" name="email"
                placeholder="exemple@gmail.com" autoComplete="email" required />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="c-tel">Contact</label>
            <input className="form-input" type="tel" id="c-tel" name="number"
              placeholder="00 00 00 00 00" autoComplete="tel" />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="c-msg">Message</label>
            <textarea className="form-textarea" id="c-msg" name="message"
              placeholder="Je vous contacte pour..." required />
          </div>

          <button type="submit" className="btn btn-primary form-submit">
            {sent ? '✓ Envoyé !' : <>Envoyer <i className="fa fa-paper-plane" /></>}
          </button>

          {/* Message de succès */}
          {sent && (
            <div className="form-success" role="alert">
              ✓ Message envoyé ! Je vous répondrai dans les 24h.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}