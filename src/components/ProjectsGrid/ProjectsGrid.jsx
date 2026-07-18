import projects from '../../data/projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectsGrid.module.css'

function ProjectsGrid() {
  return (
    <div>
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsGrid
