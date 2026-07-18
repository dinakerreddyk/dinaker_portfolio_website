import styles from './Footer.module.css'

const socialLinks = [
  { href: 'https://github.com/dinaker09', label: 'GitHub' },
  { href: 'https://linkedin.com/in/dinaker09', label: 'LinkedIn' },
  { href: 'mailto:k.dinakerreddy9@gmail.com', label: 'Email' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p>&copy; {year} Dinaker Reddy. All rights reserved.</p>
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
