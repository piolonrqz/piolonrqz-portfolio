import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }
    }
  }

  return (
    <section id="about" className="py-16 border-t border-border/60">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-4"
      >
        <motion.h2 
          variants={childVariants}
          className="text-xl font-bold tracking-tight text-foreground uppercase tracking-widest text-xs text-accent"
        >
          About Me
        </motion.h2>
        <motion.p 
          variants={childVariants}
          className="text-lg text-muted-foreground leading-relaxed max-w-2xl font-light"
        >
          I'm a Bachelor of Science in Information Technology graduate passionate about building software that solves real-world problems. I enjoy learning new technologies and continuously improving my skills in both frontend and backend development.
        </motion.p>
      </motion.div>
    </section>
  )
}
