import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView]
}

const JOIN_WORDS = [
  'What about working together ?',
  'You know what you should do ?',
  'Let me know your appreciation...',
  'Have a great day!',
]

function JoinTyping() {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    const word = JOIN_WORDS[wordIdx]

    if (!deleting) {
      if (text.length < word.length) {
        timer.current = setTimeout(() => setText(word.slice(0, text.length + 1)), 120)
      } else {
        timer.current = setTimeout(() => setDeleting(true), 1200)
      }
    } else if (text.length > 0) {
      timer.current = setTimeout(() => setText(text.slice(0, -1)), 60)
    } else {
      setDeleting(false)
      setWordIdx(i => (i + 1) % JOIN_WORDS.length)
    }

    return () => clearTimeout(timer.current)
  }, [text, deleting, wordIdx])

  return <p className="join-subtitle">{text}</p>
}

export default function Contact() {
  const [ref, inView] = useInView()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

  useEffect(() => {
    if (sessionStorage.getItem('focusContactName') !== 'true') return

    sessionStorage.removeItem('focusContactName')
    const timer = setTimeout(() => {
      const nameField = document.getElementById('c-nom')
      nameField?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      nameField?.focus({ preventScroll: true })
    }, 250)

    return () => clearTimeout(timer)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!formspreeEndpoint) {
      setError('Configurez VITE_FORMSPREE_ENDPOINT avec votre endpoint Formspree.')
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)
    setSubmitting(true)

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error('Formspree submission failed')
      }

      setSent(true)
      form.reset()
      setTimeout(() => setSent(false), 4000)
    } catch {
      setError("Le message n'a pas pu être envoyé. Réessayez dans un instant.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="join" id="contact" aria-labelledby="contact-title" ref={ref}>
      <div className="tag">Collaboration</div>

      <h2 className={`section-title reveal${inView ? ' up' : ''}`} id="contact-title">
        Join <span>Me</span>
      </h2>

      <div className="join-grid">
        <div className={`reveal d1${inView ? ' up' : ''}`}>
          <JoinTyping />

          <p className="join-desc">
            I'm currently open to freelance opportunities, collaborations, and
            innovative projects in web development, UI/UX, and app design. I'm
            always eager to learn, improve, and contribute to impactful
            projects.<br /><br />
            Feel free to reach out - let's discuss how I can help bring your
            ideas to life.
          </p>

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

          <div className="prev-work reveal d2" style={{ display: 'none' }}>
            <div className="prev-work-title">Previously built -&gt;</div>
          </div>
        </div>

        <form
          className={`contact-form reveal d2${inView ? ' up' : ''}`}
          onSubmit={handleSubmit}
          aria-label="Formulaire de contact"
        >
          <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="c-nom">Nom</label>
              <input
                className="form-input"
                type="text"
                id="c-nom"
                name="nom"
                placeholder="Mon Nom"
                autoComplete="name"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="c-email">E-mail</label>
              <input
                className="form-input"
                type="email"
                id="c-email"
                name="email"
                placeholder="exemple@gmail.com"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="c-tel">Contact</label>
            <input
              className="form-input"
              type="tel"
              id="c-tel"
              name="number"
              placeholder="00 00 00 00 00"
              autoComplete="tel"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="c-msg">Message</label>
            <textarea
              className="form-textarea"
              id="c-msg"
              name="message"
              placeholder="Je vous contacte pour..."
              required
            />
          </div>

          <button type="submit" className="btn btn-primary form-submit" disabled={submitting}>
            {submitting ? 'Envoi...' : sent ? 'Envoyé !' : <>Envoyer <i className="fa fa-paper-plane" /></>}
          </button>

          {sent && (
            <div className="form-success" role="alert">
              Message envoyé ! Je vous répondrai dans les 24h.
            </div>
          )}

          {error && (
            <div className="form-error" role="alert">
              {error}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
