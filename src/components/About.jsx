import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiCpu } from 'react-icons/fi'
import './About.css'

const highlights = [
  { icon: <FiCpu />, label: 'AI & Data Science', detail: 'B.Tech graduate, 2022–2026' },
  { icon: <FiCode />, label: 'Web Development', detail: 'React, NodeJS, Express, JavaScript, REST APIs' },
  { icon: <FiDatabase />, label: 'Programming', detail: 'Python, Java, JavaScript, SQL' },
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          01 · About
        </motion.span>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          A little about me
        </motion.h2>

        <div className="about-grid">
          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Hello! I'm Kaviya, a B.Tech graduate in Artificial Intelligence &amp; Data
            Science. I enjoy creating responsive web applications and continuously
            improving my programming and problem-solving skills. I have experience
            working with MERN stack, JavaScript, Python, Java, SQL, and REST APIs. I'm eager
            to contribute to meaningful projects while expanding my technical expertise.
          </motion.p>

          <div className="about-highlights">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className="glass-card highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
              >
                <div className="highlight-icon">{h.icon}</div>
                <div>
                  <p className="highlight-label">{h.label}</p>
                  <p className="highlight-detail">{h.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
