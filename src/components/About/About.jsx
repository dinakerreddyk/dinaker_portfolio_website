import styles from './About.module.css'

const skills = [
  'Python',
  'SQL',
  'Java',
  'Apache Kafka',
  'Apache Airflow',
  'AWS (S3, Glue, Lambda, Athena)',
  'Azure (ADF, Synapse, Databricks)',
  'Snowflake',
  'Amazon Redshift',
  'PySpark',
  'PostgreSQL',
  'MySQL',
  'Power BI',
  'Tableau',
  'Pandas / NumPy',
  'Scikit-Learn',
  'Git',
  'CI/CD (Bamboo, Jenkins)',
]

function About() {
  return (
    <div className={styles.about}>
      <h2>About Me</h2>
      <p className={styles.bio}>
        Data Engineer with over five years of experience building and
        optimizing scalable data solutions across healthcare and
        financial industries. I specialize in cloud-based data
        engineering, data architecture, and ETL pipeline development
        using AWS, Azure, and Snowflake, with a strong focus on
        delivering clean, reliable, and accessible data to support
        business intelligence and decision-making. I hold an M.S. in
        Computer Science from Florida International University.
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
