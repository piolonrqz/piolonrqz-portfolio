import { GraduationCap } from 'lucide-react'
import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

interface EducationItemProps {
  period: string
  degree: string
  institution: string
  details: string[]
}

function EducationItem({ period, degree, institution, details }: EducationItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }}
      className="relative pl-8 pb-8 group last:pb-0"
    >
      {/* Circle point indicator */}
      <div className="absolute left-0 top-[6px] h-4 w-4 rounded-full border-2 border-border bg-background group-hover:border-accent group-hover:scale-110 transition-all duration-300" />
      
      <div className="space-y-1.5">
        <span className="text-xs font-semibold text-accent tracking-wider uppercase">
          {period}
        </span>
        
        <h3 className="text-base font-bold tracking-tight text-foreground flex flex-wrap items-center gap-1">
          <span>{degree}</span>
          <span className="text-muted-foreground font-normal">from</span>
          <span className="text-muted-foreground font-semibold">{institution}</span>
        </h3>
        
        <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground leading-relaxed">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  })

  const educations: EducationItemProps[] = [
    {
      period: '2022 – 2026',
      degree: 'Bachelor of Science in Information Technology',
      institution: 'University',
      details: [
        'Focused on core software development principles, systems architecture, and database design.',
        'Relevant Coursework: Web Development, Database Systems, Software Engineering, Systems Analysis and Design.'
      ]
    }
  ]

  return (
    <section id="education" className="py-16 border-t border-border/60">
      <div className="space-y-8">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-accent" />
          <h2 className="text-xl font-bold tracking-tight text-foreground uppercase tracking-widest text-xs">
            Education
          </h2>
        </div>
        
        <div ref={containerRef} className="relative max-w-xl">
          {/* Vertical background connector line */}
          <div className="absolute left-[7px] top-[8px] bottom-[20px] w-[2px] bg-border/30" />
          
          {/* Scroll-drawing vertical timeline connector */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-[7px] top-[8px] bottom-[20px] w-[2px] bg-accent origin-top"
          />

          {educations.map((edu, idx) => (
            <EducationItem 
              key={idx}
              period={edu.period}
              degree={edu.degree}
              institution={edu.institution}
              details={edu.details}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
