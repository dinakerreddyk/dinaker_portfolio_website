import styles from './Navbar.module.css'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="#home" className={styles.logo}>
        Dinaker Reddy
      </a>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
