import { useMemo, useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import './Projects.css'

const projects = [
  {
    title: 'Movie Journal',
    description:
        'A Movie Journal web app built with React where users can search movies, manage favorites, and keep personal movie notes.',
    tech: ['React', 'JavaScript', 'CSS', 'TMDB API'],
    github:'https://github.com/KaviyaSM/Movie-Journal',
    demo: 'https://movie-journal-gold.vercel.app/',
  },
  {
  title: 'Community Chat Application',
  description:
    'A full-stack real-time chat application where users can register, communicate with other users, update their profiles, view online status, see typing indicators, and receive message read receipts.',
  tech: [
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Socket.IO',
    'JWT',
    'Bootstrap',
    'Cloudinary'
  ],
  github: 'https://github.com/KaviyaSM/real-time-chat-app',
  demo: 'https://real-time-chat-app-six-kappa.vercel.app/',
},
{ title: 'Personal Fitness Tracker', 
  description: 'A machine learning-based web application that predicts calories burned using user data. Built and optimized a Random Forest model, performed data cleaning and analysis using Pandas and NumPy, and deployed the solution as an interactive Streamlit application.',
  tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy', 'Random Forest'], 
  github: 'https://github.com/KaviyaSM/Personal_fitness_tracker.git',
  demo: 'https://personalfitnesstracker-kp9wnzin3w4paawhp6uwvy.streamlit.app',
 },
 { title: 'Talk to PDF', 
  description: 'An AI-powered Streamlit application that allows users to upload PDF documents and ask questions about their content. The app extracts text using PyMuPDF and uses the Groq API with openai/gpt-oss-20b to generate context-based answers.', 
  tech: ['Python', 'Streamlit', 'PyMuPDF', 'Groq API', 'openai/gpt-oss-20b', 'Requests'], 
  github: 'https://github.com/KaviyaSM/Talk_To_PDF.git', 
  demo: 'https://talk-to-pdf-application.streamlit.app/', },
  
  {
  title: 'MailMind: Smart Email Prioritizer and Gmail Assistant',
  description:
    'An AI-powered email assistant that integrates Gmail API and Gemini API to analyze emails, prioritize messages, generate intelligent replies, and manage attachments. The application uses SQLite for email data storage and Streamlit for an interactive user interface.',
  tech: [
    'Python',
    'Gemini API',
    'Gmail API',
    'SQLite',
    'Streamlit'
  ],
  github: 'https://github.com/KaviyaSM/MailMind_webapp',
  demo: 'https://mailmind-webapp.streamlit.app/',
},
{
  title: 'PDF to Audio Converter',
  description:
    'A web application that converts PDF documents into audio by extracting text and generating speech. It supports audio playback and download, providing an accessible and user-friendly reading experience.',
  tech: [
    'Python',
    'Flask',
    'HTML',
    'CSS',
    'JavaScript',
    'gTTS',
    'PyPDF2'
  ],
  github: 'https://github.com/KaviyaSM/PDF_to_audio_convertor',
  demo: 'https://pdf-to-audio-convertor-jv2x.onrender.com',
}
  
  // {
  //   title: 'Instagram Clone',
  //   description:
  //     'A responsive Instagram-inspired frontend featuring posts, stories, profile pages, likes, and navigation built with React.',
  //   tech: ['React', 'CSS', 'React Router'],
  //   github: 'https://github.com/',
  //   demo: 'https://example.com/',
  // },
]

function Projects() {
  const [filter, setFilter] = useState('All')

  const technologies = useMemo(() => {
    const set = new Set(['All'])
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)))
    return Array.from(set)
  }, [])

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.tech.includes(filter))
  }, [filter])

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="section-tag">03 · Projects</span>
        <h2 className="section-heading">Things I've built</h2>
        <p className="section-sub">
          A selection of projects spanning frontend applications, automation tooling, and
          full user experiences.
        </p>

        <div className="project-filters">
          {technologies.map((tech) => (
            <button
              key={tech}
              className={`filter-chip ${filter === tech ? 'active' : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
