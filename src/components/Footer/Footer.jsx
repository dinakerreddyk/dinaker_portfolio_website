import styles from './Footer.module.css'

const socialLinks = [
  { href: 'https://github.com/', label: 'GitHub' },
  { href: 'https://linkedin.com/', label: 'LinkedIn' },
  { href: 'mailto:you@example.com', label: 'Email' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p>&copy; {year} Your Name. All rights reserved.</p>
      <ul className={styles.social}>
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
