// About.jsx
// La section "À propos" avec ta photo à gauche et le texte à droite.
// Elle contient un compteur animé pour les statistiques (10 technologies, 15 projets, 2 ans).
// On utilise IntersectionObserver pour déclencher les animations quand la section
// entre dans le champ de vision — c'est ce que faisait ton script.js original.

import { useEffect, useRef, useState } from "react";

// Hook qui détecte quand un élément devient visible à l'écran
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// Compteur animé : passe de 0 à `target` en ~40 étapes de 30ms
function AnimatedCounter({ target, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      cur = Math.min(cur + step, target);
      setCount(Math.round(cur));
      if (cur >= target) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <>{count}+</>;
}

export default function About() {
  const [ref, inView] = useInView();

  const stats = [
    { count: 10, label: "Technologies" },
    { count: 15, label: "Projets" },
    { count: 2, label: "Ans d'XP" },
  ];

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="tag">Qui suis-je</div>

      <h2
        className={`section-title reveal${inView ? " up" : ""}`}
        id="about-title"
      >
        About <span>Me</span>
      </h2>

      <div className="about-grid" ref={ref}>
        {/* Photo gauche */}
        <div className={`about-img-wrap reveal d1${inView ? " up" : ""}`}>
          <div className="about-img-frame">
            <div className="about-img-placeholder">
              {/* /photos/ → public/photos/ dans Vite */}
              <img src="/photos/photo2.png" alt="Prince Koucheme" />
            </div>
          </div>
        </div>

        {/* Texte droite */}
        <div className={`about-text reveal d2${inView ? " up" : ""}`}>
          <h3>Passionate Developer &amp; Tech Enthusiast</h3>

          <p className="about-body">
            I am a passionate Full Stack Developer with a solid foundation in
            both frontend and backend technologies. I build functional web
            applications using JavaScript, React, PHP, and database systems.
            Through academic and personal projects, I've developed strong
            problem-solving skills, attention to detail, and the ability to work
            effectively in a team.
            <br />
            <br />
            I'm particularly interested in systems, networks, and cybersecurity,
            and I continuously strive to expand my knowledge by learning new
            technologies and working on practical, impactful projects.
          </p>

          {/* Statistiques avec compteur animé */}
          <div className="about-stats">
            {stats.map(({ count, label }) => (
              <div className="stat" key={label}>
                <div className="stat-n">
                  <AnimatedCounter target={count} inView={inView} />
                </div>
                <div className="stat-l">{label}</div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-gold">
            More About Me <i className="fa fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
