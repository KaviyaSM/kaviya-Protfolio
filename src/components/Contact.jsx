// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import emailjs from '@emailjs/browser'
// import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
// import './Contact.css'

// function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
//   const [status, setStatus] = useState(null)

//   const handleChange = (e) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Hook this up to an email service (e.g. EmailJS, Formspree) or your own API.
//     setStatus('sent')
//     setForm({ name: '', email: '', subject: '', message: '' })
//     setTimeout(() => setStatus(null), 4000)
//   }

//   return (
//     <section id="contact" className="section contact">
//       <div className="container">
//         <span className="section-tag">06 · Contact</span>
//         <h2 className="section-heading">Let's work together</h2>
//         <p className="section-sub">
//           Have an opportunity, project, or question? My inbox is open.
//         </p>

//         <div className="contact-grid">
//           <motion.div
//             className="contact-info"
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="glass-card contact-info-card">
//               <p className="contact-name">Kaviya S M</p>

//               <div className="contact-line">
//                 <FiMail /> <a href="mailto:kaviya.01114@gmail.com">kaviya.01114@gmail.com</a>
//               </div>
//               <div className="contact-line">
//                 <FiPhone /> <a href="tel:+917550266713">+91 75502 66713</a>
//               </div>
//               <div className="contact-line">
//                 <FiMapPin /> <span>Tamil Nadu, India</span>
//               </div>

//               <div className="contact-socials">
//                 <a href="https://github.com/KaviyaSM" target="_blank" rel="noreferrer" aria-label="GitHub">
//                   <FiGithub />
//                 </a>
//                 <a href="https://www.linkedin.com/in/kaviya-s-m/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
//                   <FiLinkedin />
//                 </a>
//                 <a href="mailto:kaviya.01114@gmail.com" aria-label="Gmail">
//                   <FiMail />
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           <motion.form
//             className="glass-card contact-form"
//             onSubmit={handleSubmit}
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="form-row">
//               <label htmlFor="name">Name</label>
//               <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
//             </div>
//             <div className="form-row">
//               <label htmlFor="email">Email</label>
//               <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
//             </div>
//             <div className="form-row">
//               <label htmlFor="subject">Subject</label>
//               <input id="subject" name="subject" type="text" required value={form.subject} onChange={handleChange} placeholder="What's this about?" />
//             </div>
//             <div className="form-row">
//               <label htmlFor="message">Message</label>
//               <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} placeholder="Tell me about it..." />
//             </div>

//             <button type="submit" className="btn btn-primary">
//               <FiSend /> Send Message
//             </button>

//             {status === 'sent' && <p className="form-status">Message sent — thank you! I'll reply soon.</p>}
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contact


import { motion } from 'framer-motion'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="section-tag">06 · Contact</span>

        <h2 className="section-heading">Let's work together</h2>

        <p className="section-sub">
          Have an opportunity, project, or question? Feel free to reach out!
        </p>

        <motion.div
          className="contact-info contact-info-single"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card contact-info-card">
            <p className="contact-name">Kaviya S M</p>

            <div className="contact-line">
              <FiMail />
              <a href="mailto:kaviya.01114@gmail.com">
                kaviya.01114@gmail.com
              </a>
            </div>

            <div className="contact-line">
              <FiPhone />
              <a href="tel:+917550266713">
                +91 75502 66713
              </a>
            </div>

            <div className="contact-line">
              <FiMapPin />
              <span>Tamil Nadu, India</span>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/KaviyaSM"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kaviya-s-m/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>

              <a
                href="mailto:kaviya.01114@gmail.com"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact


