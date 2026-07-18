import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section id="home" className={styles.section}>
          <h1>Hero section placeholder</h1>
        </section>
        <section id="about" className={styles.section}>
          <h2>About section placeholder</h2>
        </section>
        <section id="projects" className={styles.section}>
          <h2>Projects section placeholder</h2>
        </section>
        <section id="contact" className={styles.section}>
          <h2>Contact section placeholder</h2>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
