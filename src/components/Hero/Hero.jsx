import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Dinaker Reddy</h1>
      <p className={styles.subtitle}>Data Engineer</p>
      <p className={styles.tagline}>
        I build scalable data pipelines and cloud-based data solutions
        across healthcare and financial industries, using AWS, Azure,
        Snowflake, and Python.
      </p>
      <div className={styles.actions}>
        <a href="#projects" className={styles.cta}>
          View My Work
        </a>
        <a href="/resume.pdf" className={styles.ctaSecondary} target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Hero
