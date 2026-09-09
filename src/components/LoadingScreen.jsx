import { motion, AnimatePresence } from 'framer-motion'
import './LoadingScreen.css'

function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <div className="loading-mark">
          <span>K</span>
          <span className="loading-dot" />
        </div>
        <p className="loading-text">compiling portfolio.jsx</p>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen
