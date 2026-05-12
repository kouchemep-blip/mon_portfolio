// Projects.jsx
// Les 3 cartes de projets avec miniature, tags, titre, description et lien.
// Les images viennent de public/photos/ (projet1.png, projet2.png, projet3.png).
// Le projet 2 a un vrai lien Netlify déployé, les autres pointent vers "#".

import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.12) {
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

const PROJECTS = [
  {
    thumb: '/photos/projet1.png',
    grad: 'linear-gradient(135deg, #060d20, #0b1a40)',
    tags: ['UI/UX', 'Design'],
    title: 'UI/UX Design Project',
    desc: 'Designing intuitive user interfaces with focus on usability, accessibility and visual hierarchy for modern digital products.',
    link: '#',
  },
  {
    thumb: '/photos/projet2.png',
    grad: 'linear-gradient(135deg, #060d14, #0a2030)',
    tags: ['Web', 'Frontend'],
    title: 'Web Application',
    desc: 'A responsive, full-featured web application with modern UI, real-time interactions, and clean code architecture.',
    link: 'https://margueriteoke-don-genial-officiel.netlify.app/',
  },
  {
    thumb: '/photos/projet3.png',
    grad: 'linear-gradient(135deg, #0a1005, #182a08)',
    tags: ['App', 'Mobile'],
    title: 'App Interface Design',
    desc: 'Mobile-first application interface designed for intuitive navigation, clean aesthetics, and seamless user flow.',
    link: '#',
  },
]

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" aria-labelledby="projects-title" ref={ref}>
      <div className="tag">Réalisations</div>

      <h2 className={`section-title reveal${inView ? ' up' : ''}`} id="projects-title">
        Latest <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {PROJECTS.map(({ thumb, grad, tags, title, desc, link }, i) => (
          <article
            key={title}
            className={`project-card reveal d${i + 1}${inView ? ' up' : ''}`}
            style={{ '--thumb-grad': grad }}
          >
            {/* Miniature du projet */}
            <div className="project-thumb">
              <div className="project-thumb-bg" />
              <div className="project-thumb-grid" />
              <div className="project-thumb-icon">
                <img src={thumb} alt={title} />
              </div>
            </div>

            {/* Corps de la carte */}
            <div className="project-body">
              <div className="project-meta">
                {tags.map(t => <span className="project-tag" key={t}>{t}</span>)}
              </div>
              <h3 className="project-title">{title}</h3>
              <p className="project-desc">{desc}</p>
              <a
                href={link}
                className="project-link"
                target={link !== '#' ? '_blank' : undefined}
                rel={link !== '#' ? 'noreferrer' : undefined}
              >
                View Project <i className="bx bx-link-external" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}