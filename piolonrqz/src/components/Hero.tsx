import { MouseEvent } from 'react'
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Magnetic from './Magnetic'

export default function Hero() {
  const handleScrollToProjects = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const elem = document.getElementById('projects')
    if (elem) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elemRect = elem.getBoundingClientRect().top
      const elemPosition = elemRect - bodyRect
      const offsetPosition = elemPosition - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 }
    }
  }

  return (
    <section id="top" className="py-20 md:py-28 flex flex-col items-start justify-center">
      {/* Text Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 max-w-2xl"
      >
        <div className="space-y-2">
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Hi, I'm <span className="text-accent">Piolo Frances Enriquez</span>.
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl font-medium text-muted-foreground"
          >
            Aspiring Software Engineer and Full Stack Developer.
          </motion.p>
        </div>
        
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          I build responsive and scalable web applications using modern technologies. Passionate about solving complex problems and constructing reliable software systems.
        </motion.p>

        {/* Action CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
          <Magnetic>
            <button
              onClick={handleScrollToProjects}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 active:scale-95 transition-all shadow-sm"
            >
              View Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </Magnetic>
          
          <Magnetic>
            <a
              href="/PioloFrances-Enriquez_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:bg-muted active:scale-95 transition-all"
            >
              <FileText className="h-4 w-4 text-muted-foreground" />
              Download Resume
            </a>
          </Magnetic>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
          <Magnetic>
            <a
              href="https://github.com/piolonrqz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted hover:border-foreground/20 transition-all active:scale-95 flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
          </Magnetic>
          
          <Magnetic>
            <a
              href="https://www.linkedin.com/in/piolo-frances-enriquez-61663821b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted hover:border-foreground/20 transition-all active:scale-95 flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Magnetic>
          
          <Magnetic>
            <a
              href="mailto:piolofrances.enriquez@gmail.com"
              className="p-2.5 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted hover:border-foreground/20 transition-all active:scale-95 flex items-center justify-center"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  )
}
