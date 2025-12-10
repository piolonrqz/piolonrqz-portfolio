import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ALLY',
      description: 'A comprehensive platform built as a capstone project. Led frontend team in architecting responsive components and managing development workflow.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      github: 'https://ally-capstone-4ww6.vercel.app/',
      role: {src: '/ally.jpg', alt: 'React'}
    },
    {
      title: 'StudySpace',
      description: 'Collaborative study platform with intuitive UI for group learning. Implemented responsive design and interactive features for enhanced user engagement.',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      github: 'https://it-342-g6-study-space-i6r8.vercel.app',
      role: {src: '/studyspace.jpg', alt: 'Node JS'}
    },
    {
      title: 'Notes App - Cardano Integration',
      description: 'Backend blockchain application integrating Cardano blockchain and Lace wallet. Built API layer for secure smart contract interactions.',
      tech: ['Cardano', 'Lace Wallet', 'Backend API'],
      github: 'https://github.com/piolonrqz/notes-app',
      role: {src: '/cardano.jpg', alt: 'Express'}
    },
    {
      title: 'Manito Manita',
      description: 'Collaborative full-stack project built with team members. Developed responsive frontend using modern React patterns and best practices.',
      tech: ['React', 'JavaScript', 'Responsive Design'],
      github: 'https://manito-manita.vercel.app',
      role: {src: '/manito-manita.jpg', alt: 'Manito Manita'}
    },
    {
      title: 'Proweaver Hackathon - 3rd Place',
      description: 'Galactic Pulse Challenge hackathon project. Developed innovative solution in competitive environment and achieved 3rd place recognition.',
      tech: ['React', 'JavaScript', 'Hackathon'],
      github: 'https://hanz15-bacus-proweaver-hackathon-ga.vercel.app',
      role: {src: '/proweaver.jpg', alt: 'JavaScript'}
    },
    {
      title: 'Campus Xperience',
      description: 'Campus experience platform with engaging user interface. Implemented modern UI/UX design principles for optimal user experience.',
      tech: ['React', 'JavaScript', 'UI/UX'],
      github: 'https://github.com/sytrusz/campusxperience',
      role: {src: '/campus.jpg', alt: 'Tailwind CSS'}
    }
  ];

  const cardBackgrounds = [
    'bg-gradient-to-br from-blue-500/10 to-indigo-500/10',
    'bg-gradient-to-br from-green-500/10 to-teal-500/10',
    'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
    'bg-gradient-to-br from-red-500/10 to-orange-500/10',
    'bg-gradient-to-br from-yellow-500/10 to-amber-500/10',
    'bg-gradient-to-br from-cyan-500/10 to-blue-500/10',
  ];

  const headerGradients = [
    'bg-gradient-to-br from-blue-400/20 to-indigo-400/20',
    'bg-gradient-to-br from-green-400/20 to-teal-400/20',
    'bg-gradient-to-br from-purple-400/20 to-pink-400/20',
    'bg-gradient-to-br from-red-400/20 to-orange-400/20',
    'bg-gradient-to-br from-yellow-400/20 to-amber-400/20',
    'bg-gradient-to-br from-cyan-400/20 to-blue-400/20',
  ];


  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#16161a]">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#ffffff] mb-12 text-center">Featured Projects</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-[#1a1a1f] ${cardBackgrounds[index]} rounded-xl overflow-hidden hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out`}
            >
              <div className={`h-64 ${headerGradients[index]} flex flex-col items-center justify-center p-4`}>
                <img src={project.role.src} alt={project.role.alt} className="object-contain full" />
              </div>
              <div className="p-6">
                <h3 className="text-[#ffffff] text-xl font-bold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[#72757e] text-xs bg-[#72757e]/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#7f5af0] text-[#ffffff] px-4 py-2 rounded-lg hover:bg-[#6b48d6] transition-colors text-center text-sm font-medium flex items-center justify-center"
                >
                  <Github size={16} className="mr-2" />
                  
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
