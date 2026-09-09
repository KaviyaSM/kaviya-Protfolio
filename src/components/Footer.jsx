import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Footer.css'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-logo">
            Kaviya<span> S M</span>
          </p>
          <p className="footer-tagline">AI &amp; Data Science Graduate · Passionate about Development</p>
        </div>

        <nav className="footer-links">
          {quickLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          <a href="https://github.com/KaviyaSM" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/kaviya-s-m/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:kaviya.01114@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>

      <p className="footer-copyright">© 2026 Kaviya S M. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
