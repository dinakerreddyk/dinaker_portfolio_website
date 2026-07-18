import styles from './ProjectCard.module.css'

function ProjectCard({ project }) {
  const { title, description, tech, repoUrl, liveUrl } = project

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.tech}>
        {tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className={styles.links}>
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noreferrer">
            Code
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
