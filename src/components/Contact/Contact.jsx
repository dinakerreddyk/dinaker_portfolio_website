import styles from './Contact.module.css'

function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Get In Touch</h2>
      <p className={styles.text}>
        I'm always open to discussing data engineering roles, projects,
        or collaboration. Feel free to reach out.
      </p>
      <a href="mailto:k.dinakerreddy9@gmail.com" className={styles.email}>
        k.dinakerreddy9@gmail.com
      </a>
    </div>
  )
}

export default Contact
