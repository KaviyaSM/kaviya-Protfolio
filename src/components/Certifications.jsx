import { motion } from 'framer-motion'
import { FiAward, FiCheckCircle } from 'react-icons/fi'
import './Certifications.css'

const certifications = [
  'React Development',
  'Python Programming',
  'Data analysis with python',
  'Introduction to MongoDB',
  'Data Structures & Algorithms',
  'JLPT N5 certification'
]

const achievements = [
  // { value: 200, suffix: '+', label: 'Coding problems solved' },
  // { value: 4, suffix: '', label: 'React projects built' },
  { value: 1, suffix: '', label: 'AI & Data Science degree' },
  { value: 5, suffix: '+', label: 'Core frontend technologies' },
]

function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <span className="section-tag">05 · Certifications</span>
        <h2 className="section-heading">Certifications &amp; achievements</h2>
        <p className="section-sub">Credentials earned and milestones reached along the way.</p>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              className="glass-card cert-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <FiAward className="cert-icon" />
              <span>{cert}</span>
            </motion.div>
          ))}
        </div>

        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              className="achievement-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <p className="achievement-value">
                {item.value}
                <span>{item.suffix}</span>
              </p>
              <p className="achievement-label">
                <FiCheckCircle /> {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
