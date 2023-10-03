import { Nav } from "./components";
import { Hero, AboutMe, PersonalProjects, ContactMe, Footer } from "./sections";

const App = () => (
  <main className="relative">
    <Nav />
    <section id="home" className="sm:px-24 px-5 sm:pb-20 pb-10 sm:pt-32 pt-28 min-h-full">
      <Hero />
    </section>
    <section id="about" className="sm:px-24 px-5 /*sm:py-20 py-10*/ sm:pb-20 pb-10 sm:pt-24 pt-24">
      <AboutMe />
    </section>
    <section id="projects" className="sm:px-24 px-5 /*sm:py-20 py-10*/ sm:pb-20 pb-10 sm:pt-24 pt-24">
      <PersonalProjects />
    </section>
    <section id="contact-me" className="sm:px-24 px-5 sm:py-20 py-10 bg-[#FAFAFA]">
      <ContactMe />
    </section>
    <section className="sm:px-24 px-5 sm:py-20 py-10 bg-[#363636]">
      <Footer />
    </section>
  </main>
)

export default App