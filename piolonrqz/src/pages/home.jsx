import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Portfolio = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#16161a] text-[#94a1b2] min-h-screen">
      <Navigation scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default Portfolio;