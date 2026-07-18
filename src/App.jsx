import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import ProjectsGrid from './components/ProjectsGrid/ProjectsGrid'
import Contact from './components/Contact/Contact'
import styles from './App.module.css'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className={styles.main}>
        <section id="home" className={styles.section}>
          <Hero />
        </section>
        <section id="about" className={styles.section}>
          <About />
        </section>
        <section id="projects" className={styles.section}>
          <ProjectsGrid />
        </section>
        <section id="contact" className={styles.section}>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
