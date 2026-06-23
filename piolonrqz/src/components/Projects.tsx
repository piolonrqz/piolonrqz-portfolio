import { Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
  image?: string
  isGradientImage?: boolean
}

export default function Projects() {
  const featuredProjects: Project[] = [
    {
      title: 'ALLY Legal Platform',
      description: 'ALLY is a digital platform that connects clients with legal professionals, simplifying consultations and virtual legal processes to provide accessible, efficient, and secure legal services.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Express', 'MySQL'],
      github: 'https://github.com/piolonrqz/Capstone-ALLY',
      image: '/ally.jpg'
    },
    {
      title: 'KODA',
      description: 'A monitoring ecosystem that combines GitHub events and progress reports to provide data-driven evaluation and verification.',
      tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'GitHub Webhooks'],
      github: 'https://github.com/mw-koda/koda',
      isGradientImage: true
    },
    {
      title: 'StudySpace',
      description: 'A collaborative study space booking and seat management system designed to optimize study space efficiency and scheduling.',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com/piolonrqz/IT342G6-StudySpace',
      live: 'https://it-342-g6-study-space-i6r8.vercel.app',
      image: '/studyspace.jpg'
    },
    {
      title: 'Manito Manita',
      description: 'A modern, interactive web application for managing gift exchanges, Secret Santa events, and wishlist registries.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      github: 'https://github.com/SeanVenz/manito-manita',
      live: 'https://manito-manita.vercel.app',
      image: '/manito-manita.jpg'
    }
  ]

  const otherProjects: Project[] = [
    {
      title: 'CampusXperience',
      description: 'A centralized campus portal for students to discover events and engage in campus life activities.',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com/sytrusz/campusxperience',
      image: '/campus.jpg'
    },
    {
      title: 'Galactic Pulse Challenge',
      description: 'A high-performance hackathon submission for the Proweaver Hackathon, featuring dynamic visualizations and interactions.',
      tags: ['React', 'Tailwind CSS', 'GSAP', 'WebGL'],
      github: 'https://github.com/hanzii00/Proweaver-Hackathon-Galactic-Pulse-Challenge',
      image: '/proweaver.jpg'
    }
  ]

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 16 }
    }
  }

  return (
    <section id="projects" className="py-16 border-t border-border/60">
      <div className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-foreground uppercase tracking-widest text-xs text-accent">
            Featured Projects
          </h2>
          <p className="text-sm text-muted-foreground">
            A curated selection of applications I've developed, focusing on scalability and user experience.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card overflow-hidden hover:border-accent/40 transition-all duration-300"
            >
              {/* Project Image Header */}
              <div className="relative h-48 w-full overflow-hidden border-b border-border bg-muted flex items-center justify-center">
                {project.isGradientImage ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-zinc-950 flex items-center justify-center">
                    <span className="text-5xl font-extrabold text-indigo-500/25 tracking-widest select-none">
                      KODA
                    </span>
                  </div>
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallbackDiv = document.createElement('div');
                        fallbackDiv.className = 'absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center';
                        fallbackDiv.innerHTML = `<span class="text-xl font-bold text-muted-foreground">${project.title}</span>`;
                        parent.appendChild(fallbackDiv);
                      }
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center">
                    <span className="text-xl font-bold text-muted-foreground">{project.title}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech badging */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3 pt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 border border-border bg-card rounded-md hover:bg-muted text-foreground transition-all"
                    >
                      <Github className="h-3.5 w-3.5 text-muted-foreground" />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-all"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Section */}
        <div className="space-y-6 pt-8">
          <h3 className="text-sm font-semibold tracking-tight text-foreground uppercase tracking-widest text-xs text-muted-foreground">
            Other Projects
          </h3>
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)' }}
                className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/30 transition-all duration-300 group"
              >
                {project.image && (
                  <div className="h-20 w-full sm:w-28 flex-shrink-0 rounded-lg overflow-hidden border border-border bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                      {project.title}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors p-1"
                          aria-label={`GitHub for ${project.title}`}
                        >
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
