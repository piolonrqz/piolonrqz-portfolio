import { useState } from 'react'
import { Github, ExternalLink, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
  image?: string
  isGradientImage?: boolean
  primaryCategory: string
  categories: string[]
  featured?: boolean
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Web', 'Mobile', 'Internship Experience', 'Thesis', 'Blockchain']

  const projects: Project[] = [
    {
      title: 'ALLY Legal Platform',
      description: 'ALLY is a digital platform that connects clients with legal professionals, simplifying consultations and virtual legal processes to provide accessible, efficient, and secure legal services.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Express', 'MySQL'],
      github: 'https://github.com/piolonrqz/Capstone-ALLY',
      image: '/ally.jpg',
      primaryCategory: 'Thesis',
      categories: ['Thesis', 'Web'],
      featured: true
    },
    {
      title: 'KODA',
      description: 'A monitoring ecosystem that combines GitHub events and progress reports to provide data-driven evaluation and verification.',
      tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'GitHub Webhooks'],
      github: 'https://github.com/mw-koda/koda',
      isGradientImage: true,
      primaryCategory: 'Internship Experience',
      categories: ['Internship Experience', 'Web'],
      featured: true
    },
    {
      title: 'Seagle',
      description: 'A full-stack ed-tech platform integrating PDF textbooks with interactive 3D model annotations. Features a React Native (Expo) student client, an Express API, and a React (Vite) admin portal rendering 3D models with Three.js.',
      tags: ['React Native', 'Expo', 'Three.js', 'Express', 'MySQL', 'Firebase', 'Supabase'],
      github: 'https://github.com/seagle-dev/seagle-dev',
      isGradientImage: true,
      primaryCategory: 'Mobile',
      categories: ['Mobile', 'Web'],
      featured: true
    },
    {
      title: 'Notes App (Team JKWELEYN)',
      description: 'A Hybrid Web3 Notes Application combining the speed of Web2 with the permanence and ownership of the Cardano blockchain. Features Zero-Knowledge Auth via Nami/Lace, blockchain note storage on Cardano Preview, and optimistic UI syncing.',
      tags: ['Cardano', 'MeshSDK', 'Blockfrost', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/piolonrqz/notes-app',
      image: '/cardano.jpg',
      primaryCategory: 'Blockchain',
      categories: ['Blockchain', 'Web'],
      featured: true
    },
    {
      title: 'StudySpace',
      description: 'A collaborative study space booking and seat management system designed to optimize study space efficiency and scheduling.',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com/piolonrqz/IT342G6-StudySpace',
      live: 'https://it-342-g6-study-space-i6r8.vercel.app',
      image: '/studyspace.jpg',
      primaryCategory: 'Web',
      categories: ['Web', 'Thesis'],
      featured: true
    },
    {
      title: 'Manito Manita',
      description: 'A modern, interactive web application for managing gift exchanges, Secret Santa events, and wishlist registries.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      github: 'https://github.com/SeanVenz/manito-manita',
      live: 'https://manito-manita.vercel.app',
      image: '/manito-manita.jpg',
      primaryCategory: 'Web',
      categories: ['Web'],
      featured: true
    },
    {
      title: 'CampusXperience',
      description: 'A centralized campus portal for students to discover events and engage in campus life activities.',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com/sytrusz/campusxperience',
      image: '/campus.jpg',
      primaryCategory: 'Web',
      categories: ['Web'],
      featured: false
    },
    {
      title: 'Galactic Pulse Challenge',
      description: 'A high-performance hackathon submission for the Proweaver Hackathon, featuring dynamic visualizations and interactions.',
      tags: ['React', 'Tailwind CSS', 'GSAP', 'WebGL'],
      github: 'https://github.com/hanzii00/Proweaver-Hackathon-Galactic-Pulse-Challenge',
      image: '/proweaver.jpg',
      primaryCategory: 'Web',
      categories: ['Web'],
      featured: false
    }
  ]

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'All') return true
    return project.primaryCategory === selectedCategory
  })

  // Sort featured projects to the top within their category
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  } as const

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 17 }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.15 }
    }
  } as const

  return (
    <section id="projects" className="py-16 border-t border-border/60">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-foreground uppercase tracking-widest text-xs text-accent">
            Projects
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            A curated portfolio of software products, mobile applications, thesis integrations, and blockchain platforms. Use the filters below to explore my work.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex overflow-x-auto pb-2 scrollbar-none -mx-6 px-6 sm:mx-0 sm:px-0 gap-1.5 scroll-smooth">
          {categories.map((category) => {
            const isActive = selectedCategory === category
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-300 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/50 ${
                  isActive
                    ? 'text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-accent rounded-lg -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {category}
              </button>
            )
          })}
        </div>

        {/* Unified Projects Grid */}
        <motion.div
          layout
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {sortedProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)' }}
                className={`group flex flex-col justify-between rounded-xl border bg-card overflow-hidden transition-all duration-300 h-full ${
                  project.featured ? 'border-accent/30 shadow-[0_0_12px_rgba(139,92,246,0.03)]' : 'border-border'
                } hover:border-accent/40`}
              >
                <div>
                  {/* Card Header (Image/Gradient Backdrop) */}
                  <div className="relative h-44 w-full overflow-hidden border-b border-border bg-muted flex items-center justify-center">
                    {/* Featured Star/Ribbon badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-accent/90 text-accent-foreground shadow-sm backdrop-blur-sm select-none">
                        <Star className="h-3 w-3 fill-current" />
                        Featured
                      </div>
                    )}

                    {project.isGradientImage ? (
                      project.title === 'Seagle' ? (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-950 to-purple-900 flex flex-col items-center justify-center">
                          <span className="text-4xl font-extrabold text-white/30 tracking-widest uppercase select-none font-mono">
                            SEAGLE
                          </span>
                        </div>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-zinc-950 flex items-center justify-center">
                          <span className="text-4xl font-extrabold text-indigo-500/20 tracking-widest select-none font-mono">
                            KODA
                          </span>
                        </div>
                      )
                    ) : project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const parent = e.currentTarget.parentElement
                          if (parent) {
                            const fallbackDiv = document.createElement('div')
                            fallbackDiv.className = 'absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center'
                            fallbackDiv.innerHTML = `<span class="text-lg font-bold text-muted-foreground">${project.title}</span>`
                            parent.appendChild(fallbackDiv)
                          }
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center">
                        <span className="text-lg font-semibold text-muted-foreground">{project.title}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      {/* Category Tags */}
                      <div className="flex flex-wrap gap-1">
                        {project.categories.map((cat) => (
                          <span
                            key={cat}
                            className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-accent/10 text-accent uppercase tracking-wider border border-accent/10"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-secondary text-secondary-foreground border border-border/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-5 pb-5 pt-3 flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-[11px] font-bold px-3 py-2 border border-border bg-card rounded-lg hover:bg-muted text-foreground transition-all duration-200"
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
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-[11px] font-bold px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-200"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
