import styles from './Contact.module.css'

function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Get In Touch</h2>
      <p className={styles.text}>
        Replace this with a short note inviting people to reach out, and
        update the email address below to your own.
      </p>
      <a href="mailto:you@example.com" className={styles.email}>
        you@example.com
      </a>
    </div>
  )
}

export default Contact
