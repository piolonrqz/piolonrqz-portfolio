import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with drag-and-drop interface, real-time updates, and team collaboration features.',
      tech: ['Next.js', 'MongoDB', 'Socket.io', 'Tailwind']
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation platform leveraging machine learning models for automated copywriting and image generation.',
      tech: ['Python', 'FastAPI', 'React', 'OpenAI API']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#16161a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#ffffff] mb-12 text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1f] border border-[#010101] rounded-xl overflow-hidden hover:border-[#7f5af0] transition-colors"
            >
              <div className="h-48 bg-gradient-to-br from-[#7f5af0]/20 to-[#2cb67d]/20 flex items-center justify-center">
                <Code2 size={64} className="text-[#7f5af0]" />
              </div>
              <div className="p-6">
                <h3 className="text-[#ffffff] text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-[#94a1b2] mb-4">{project.description}</p>
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
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex-1 bg-[#7f5af0] text-[#ffffff] px-4 py-2 rounded-lg hover:bg-[#6b48d6] transition-colors text-center text-sm font-medium flex items-center justify-center"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                  <a
                    href="#"
                    className="flex-1 border border-[#7f5af0] text-[#7f5af0] px-4 py-2 rounded-lg hover:bg-[#7f5af0]/10 transition-colors text-center text-sm font-medium flex items-center justify-center"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
