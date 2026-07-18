import styles from './About.module.css'

const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git']

function About() {
  return (
    <div className={styles.about}>
      <h2>About Me</h2>
      <p className={styles.bio}>
        Replace this with a short bio: your background, what you're
        interested in, and what kind of work you're looking for.
      </p>
      <ul className={styles.skills}>
        {skills.map((skill) => (
          <li key={skill} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default About
