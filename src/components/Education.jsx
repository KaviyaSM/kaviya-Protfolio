import { motion } from 'framer-motion'
import './Education.css'

const timeline = [
  {
    degree: 'Bachelor of Technology',
    field: 'Artificial Intelligence & Data Science',
    period: '2022 – 2026',
    detail: 'CGPA: 8.34',
  },
]

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <span className="section-tag">04 · Education</span>
        <h2 className="section-heading">Academic background</h2>
        <p className="section-sub">The formal foundation behind the projects and skills above.</p>

        <div className="timeline">
          {timeline.map((item, i) => (
            <motion.div
              className="timeline-item"
              key={item.degree}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="timeline-marker" />
              <div className="glass-card timeline-card">
                <span className="mono-tag timeline-period">{item.period}</span>
                <h3 className="timeline-degree">{item.degree}</h3>
                <p className="timeline-field">{item.field}</p>
                <p className="timeline-detail">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
