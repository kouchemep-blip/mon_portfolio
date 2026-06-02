import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";

const SERVICES = {
  "ui-ux-design": {
    icon: "fa fa-paint-brush",
    title: "UI/UX Design",
    eyebrow: "Experience utilisateur",
    intro:
      "Je conçois des interfaces qui restent simples a comprendre, agreables a parcourir et coherentes avec l'identite du projet.",
    body:
      "Le travail commence par la comprehension du besoin : qui va utiliser l'interface, dans quel contexte, et pour quelle action principale. Ensuite, je structure les ecrans, les priorites visuelles et les micro-interactions pour guider l'utilisateur sans le surcharger.",
    points: [
      "Architecture claire des ecrans et des parcours",
      "Interfaces modernes, lisibles et coherentes",
      "Design pense pour l'accessibilite et la facilite d'utilisation",
      "Prototypes ou maquettes prets a etre transformes en interface",
    ],
    result:
      "Une experience plus fluide, plus rassurante, et une interface qui donne envie d'aller jusqu'au bout de l'action.",
  },
  "web-design": {
    icon: "fa fa-globe",
    title: "Web Design",
    eyebrow: "Sites modernes et responsives",
    intro:
      "Je cree des sites web visuels, structurés et adaptes aux ecrans desktop, tablette et mobile.",
    body:
      "Chaque page est pensee pour presenter l'information avec clarte : une hierarchie visible, des sections bien rythmees, des appels a l'action accessibles et une navigation naturelle. Le design reste elegant, mais toujours au service du contenu.",
    points: [
      "Pages responsives pour tous les formats d'ecran",
      "Mise en page claire pour valoriser vos services ou projets",
      "Identite visuelle coherente avec votre univers",
      "Interfaces propres, rapides a lire et faciles a maintenir",
    ],
    result:
      "Un site professionnel qui presente votre activite avec impact et qui reste agreable a consulter sur n'importe quel appareil.",
  },
  "app-design": {
    icon: "fa fa-mobile-alt",
    title: "App Design",
    eyebrow: "Interfaces mobiles",
    intro:
      "Je dessine des interfaces d'applications mobiles simples, coherentes et pensees pour une utilisation quotidienne.",
    body:
      "Sur mobile, chaque detail compte : la taille des elements, la lisibilite, l'ordre des actions et la facilite de navigation. Je travaille des ecrans qui vont droit au but, avec des interactions naturelles et une experience confortable.",
    points: [
      "Ecrans mobiles organises autour des actions importantes",
      "Composants visuels coherents et reutilisables",
      "Navigation simple entre les differentes vues",
      "Design adapte aux contraintes d'un petit ecran",
    ],
    result:
      "Une application plus intuitive, plus confortable a utiliser, et une base visuelle solide pour le developpement.",
  },
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = SERVICES[serviceId];

  if (!service) {
    return <Navigate to="/#services" replace />;
  }

  function goToContactNameField() {
    sessionStorage.setItem("focusContactName", "true");
    navigate("/#contact");
  }

  return (
    <>
      <main className="service-page">
        <section className="service-hero" aria-labelledby="service-title">
          <Link to="/#services" className="service-back">
            <i className="fa fa-arrow-left" />
            Retour aux services
          </Link>

          <div className="service-page-grid">
            <div className="service-page-copy">
              <div className="tag">{service.eyebrow}</div>
              <h1 className="section-title" id="service-title">
                {service.title}
              </h1>
              <p className="service-lead">{service.intro}</p>
              <p className="service-body">{service.body}</p>

              <div className="service-actions">
                <button type="button" className="btn btn-primary" onClick={goToContactNameField}>
                  Discuter du projet <i className="fa fa-paper-plane" />
                </button>
                <Link to="/#services" className="btn btn-ghost">
                  Voir les services
                </Link>
              </div>
            </div>

            <aside className="service-detail-card" aria-label="Details du service">
              <div className="service-icon service-page-icon">
                <i className={service.icon} />
              </div>
              <h2>Ce que j'apporte</h2>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>
                    <i className="fa fa-check" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="service-result">
            <span>Resultat attendu</span>
            <p>{service.result}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
