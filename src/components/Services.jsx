import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function useInView(threshold = 0.12) {
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

const SERVICES = [
  {
    icon: "fa fa-paint-brush",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    desc: "Conception d'interfaces claires, modernes et agreables a utiliser. Je travaille la hierarchie visuelle, les parcours utilisateurs et les details qui rendent une experience fluide.",
  },
  {
    icon: "fa fa-globe",
    title: "Web Design",
    slug: "web-design",
    desc: "Creation de sites responsives, elegants et coherents avec votre image. L'objectif est d'obtenir une interface lisible, rapide a comprendre et adaptee a tous les ecrans.",
  },
  {
    icon: "fa fa-mobile-alt",
    title: "App Design",
    slug: "app-design",
    desc: "Design d'applications mobiles simples a prendre en main, avec des ecrans organises, des interactions naturelles et une experience pensee pour l'usage quotidien.",
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
        Mes <span>Services</span>
      </h2>

      <div className="services-grid">
        {SERVICES.map(({ icon, title, slug, desc }, i) => (
          <article
            key={title}
            className={`service-card reveal d${i + 1}${inView ? " up" : ""}`}
          >
            <div className="service-icon">
              <i className={icon} />
            </div>
            <h3 className="service-title">{title}</h3>
            <p className="service-desc">{desc}</p>
            <Link to={`/services/${slug}`} className="btn btn-ghost">
              En savoir plus
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
