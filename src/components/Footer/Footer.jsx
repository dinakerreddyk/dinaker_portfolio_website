import styles from './Footer.module.css'

const socialLinks = [
  { href: 'https://github.com/dinaker09', label: 'GitHub', external: true },
  { href: 'https://linkedin.com/in/dinaker09', label: 'LinkedIn', external: true },
  { href: 'mailto:k.dinakerreddy9@gmail.com', label: 'Email', external: false },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p>&copy; {year} Dinaker Reddy. All rights reserved.</p>
      <nav aria-label="Social links">
        <ul className={styles.social}>
          {socialLinks.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <span className="visually-hidden"> (opens in new tab)</span>
                </a>
              ) : (
                <a href={link.href}>{link.label}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
