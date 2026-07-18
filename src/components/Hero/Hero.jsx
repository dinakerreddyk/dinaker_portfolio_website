import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Your Name</h1>
      <p className={styles.subtitle}>Software Engineer</p>
      <p className={styles.tagline}>
        I build things for the web. Replace this tagline with a short
        description of what you do.
      </p>
      <a href="#projects" className={styles.cta}>
        View My Work
      </a>
    </div>
  )
}

export default Hero
