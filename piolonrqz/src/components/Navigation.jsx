import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-[#16161a]/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-5">
        <div className="flex justify-between items-center h-16">
          <span className="press-start-2p-regular text-[#ffffff] text-xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>NRQZ</span>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="text-[#94a1b2] hover:text-[#7f5af0] transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#ffffff]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="block w-full text-left py-2 text-[#94a1b2] hover:text-[#7f5af0] transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
