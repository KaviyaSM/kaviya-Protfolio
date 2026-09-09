import { motion } from 'framer-motion'
import './Skills.css'

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 88 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'React', level: 88 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
    {
    category: 'Backend',
    skills: [
      { name: 'NodeJS', level: 90 },
      { name: 'ExpressJs', level: 88 },
      { name: 'RESTful API Development', level: 85 },
      { name: 'JWT Authentication', level: 88 },
      { name: 'Mongoose', level: 70},
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'JavaScript', level: 80 },

    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'SQL', level: 82 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 70 },
      
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 84 },
      { name: 'GitHub', level: 86 },
      { name: 'VS Code', level: 92 },
      { name: 'Postman', level: 75 },
    ],
  },
  {
    category: 'Concepts',
    skills: [
      { name: 'Data Structures', level: 82 },
      { name: 'OOP', level: 85 },
      { name: 'REST API', level: 83 },
      { name: 'Responsive Design', level: 87 },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-tag">02 · Skills</span>
        <h2 className="section-heading">What I work with</h2>
        <p className="section-sub">
          A snapshot of the languages, frameworks, and tools I use to design, build, and
          ship applications.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="glass-card skill-category"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08, duration: 0.6 }}
            >
              <h3 className="skill-category-title">{group.category}</h3>
              <div className="skill-list">
                {group.skills.map((skill, si) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-item-head">
                      <span>{skill.name}</span>
                      <span className="skill-percent mono-tag">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1 + si * 0.06, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
