import { motion } from 'framer-motion'

export default function Skills() {
  const skillGroups = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Spring Boot', 'REST APIs', 'NestJS']
    },
    {
      category: 'Database',
      skills: ['MySQL', 'PostgreSQL']
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'Railway', 'Vercel']
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.215, 0.610, 0.355, 1.000],
        staggerChildren: 0.04,
        delayChildren: 0.1
      }
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 180, damping: 14 }
    }
  }

  return (
    <section id="skills" className="py-16 border-t border-border/60">
      <div className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight text-foreground uppercase tracking-widest text-xs text-accent">
          Skills
        </h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              className="p-5 rounded-xl border border-border bg-card hover:border-accent/30 transition-all duration-300 group"
            >
              <h3 className="text-sm font-semibold tracking-tight text-foreground mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={badgeVariants}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-border/40 group-hover:border-accent/15 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
