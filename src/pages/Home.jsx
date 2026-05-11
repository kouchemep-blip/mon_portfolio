// Home.jsx  (dans src/pages/)
// Cette page assemble toutes les sections dans l'ordre.
// Elle ne fait rien d'autre — chaque section est son propre composant.
// Les imports avec "../components/" signifient : "remonte d'un niveau (de pages/ vers src/)
// puis entre dans components/".

import Hero     from '../components/Hero'
import Marquee  from '../components/Marquee'
import About    from '../components/About'
import Services from '../components/Services'
import Skills   from '../components/Skills'
import Projects from '../components/Projects'
import Contact  from '../components/Contact'
import Footer   from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}