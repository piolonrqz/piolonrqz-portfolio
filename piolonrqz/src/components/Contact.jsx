import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1f] border-t border-[#010101]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#ffffff] mb-8">Let's Connect</h2>
        <p className="text-[#94a1b2] text-lg mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="mailto:john.doe@example.com"
            className="flex items-center gap-3 bg-[#7f5af0] text-[#ffffff] px-6 py-3 rounded-lg hover:bg-[#6b48d6] transition-colors"
          >
            <Mail size={20} />
            jane.doe@example.com
          </a>
          <a
            href="#"
            className="flex items-center gap-3 border border-[#7f5af0] text-[#7f5af0] px-6 py-3 rounded-lg hover:bg-[#7f5af0]/10 transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="#"
            className="flex items-center gap-3 border border-[#7f5af0] text-[#7f5af0] px-6 py-3 rounded-lg hover:bg-[#7f5af0]/10 transition-colors"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>

        <div className="pt-8 border-t border-[#010101]">
          <p className="text-[#72757e]">
            © 2025 Piolo Frances Enriquez. Crafted with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
