import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Magnetic from './Magnetic'

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-border/60">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] }}
        className="rounded-2xl border border-border bg-card p-8 md:p-12 space-y-6 text-center max-w-3xl mx-auto hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500"
      >
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Interested in working together?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
            I'm currently looking for new opportunities. Feel free to reach out, whether to discuss project collaborations, roles, or just to say hi!
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Magnetic>
            <a
              href="mailto:piolofrances.enriquez@gmail.com"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-sm"
            >
              <Mail className="h-4 w-4" />
              Email Me
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </Magnetic>
          
          <Magnetic>
            <a
              href="https://www.linkedin.com/in/piolo-frances-enriquez-61663821b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground font-semibold text-sm hover:bg-muted active:scale-95 transition-all"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground" />
              LinkedIn
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="https://github.com/piolonrqz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground font-semibold text-sm hover:bg-muted active:scale-95 transition-all"
            >
              <Github className="h-4 w-4 text-muted-foreground" />
              GitHub
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  )
}
