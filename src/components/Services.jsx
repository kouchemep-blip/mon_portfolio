// Services.jsx
// Les 3 cartes de services : UI/UX Design, Web Design, App Design.
// Chaque carte a une icône, un titre, une description et un bouton.
// L'animation d'apparition (reveal) se déclenche quand la section est visible.

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
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

const SERVICES = [
  {
    icon: "fa fa-paint-brush",
    title: "UI/UX Design",
    desc: "Creating intuitive and visually engaging interfaces that enhance user experience. Focused on usability, simplicity, and consistency — each design is functional and user-centered.",
  },
  {
    icon: "fa fa-globe",
    title: "Web Design",
    desc: "Modern, responsive websites with a strong focus on aesthetics and UX. Clean, engaging, and functional interfaces that deliver a seamless experience on all devices.",
  },
  {
    icon: "fa fa-mobile-alt",
    title: "App Design",
    desc: "Intuitive mobile application interfaces with a focus on usability. Clean, functional, and visually consistent designs that make interaction simple and efficient.",
  },
];

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" aria-labelledby="services-title" ref={ref}>
      <div className="tag">Ce que je fais</div>

      <h2
        className={`section-title reveal${inView ? " up" : ""}`}
        id="services-title"
      >
        My <span>Services</span>
      </h2>

      <div className="services-grid">
        {SERVICES.map(({ icon, title, desc }, i) => (
          <article
            key={title}
            className={`service-card reveal d${i + 1}${inView ? " up" : ""}`}
          >
            <div className="service-icon">
              <i className={icon} />
            </div>
            <h3 className="service-title">{title}</h3>
            <p className="service-desc">{desc}</p>
            <a href="#contact" className="btn btn-ghost">
              Learn More
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
