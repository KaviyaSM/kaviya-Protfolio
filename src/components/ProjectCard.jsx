import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './ProjectCard.css'

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="glass-card project-card"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.6 }}
      whileHover={{ y: -6 }}
    >
      <div className="project-image" aria-hidden="true">
        <span>{project.title.charAt(0)}</span>
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="mono-tag">
              {t}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <FiGithub /> GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
