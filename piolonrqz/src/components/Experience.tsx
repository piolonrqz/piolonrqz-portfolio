import { Briefcase } from 'lucide-react'
import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

interface ExperienceItemProps {
  period: string
  title: string
  company: string
  details: string[]
}

function ExperienceItem({ period, title, company, details }: ExperienceItemProps) {
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
          <span>{title}</span>
          <span className="text-muted-foreground font-normal">at</span>
          <span className="text-muted-foreground font-semibold">{company}</span>
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

export default function Experience() {
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

  const experiences: ExperienceItemProps[] = [
    {
      period: 'Jan 2026 – Apr 2026',
      title: 'Quality Assurance & Backend Developer Internship',
      company: 'Metawatt LLC',
      details: [
        'Quality Assurance Engineer testing and validating surplus asset APIs built in NestJS.',
        'Backend Developer for KODA, implementing clean REST APIs, handling data integration, and database schema refinement.'
      ]
    },
    {
      period: 'Oct 2024 – Dec 2024',
      title: 'Quality Assurance Intern',
      company: 'Odysee.io',
      details: [
        'Conducted functional, regression, and integration testing on web features.',
        'Documented bug reports and collaborated closely with developers to resolve user experience discrepancies.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 border-t border-border/60">
      <div className="space-y-8">
        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-accent" />
          <h2 className="text-xl font-bold tracking-tight text-foreground uppercase tracking-widest text-xs">
            Work Experience
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

          {experiences.map((exp, idx) => (
            <ExperienceItem 
              key={idx}
              period={exp.period}
              title={exp.title}
              company={exp.company}
              details={exp.details}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
