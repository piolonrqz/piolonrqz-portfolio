import React from 'react';
import CardNav from '../components/CardNav';
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

  const navItems = [
    {
      label: "About",
      bgColor: "#2cb67d",
      textColor: "#fff",
      links: [
        { label: "About", id: "about", ariaLabel: "Go to About section" },
        { label: "Skills", id: "skills", ariaLabel: "Go to Skills section" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#7f5af0",
      textColor: "#fff",
      links: [
        { label: "Projects", id: "projects", ariaLabel: "Go to Projects section" }
      ]
    },
    {
      label: "Experience",
      bgColor: "#e45858",
      textColor: "#fff",
      links: [
        { label: "Experience", id: "experience", ariaLabel: "Go to Experience section" },
        { label: "Contact", id: "contact", ariaLabel: "Go to Contact section" }
      ]
    }
  ];

  return (
    <div className="bg-[#16161a] text-[#94a1b2] min-h-screen overflow-x-hidden">
      <CardNav items={navItems} onNavigate={scrollToSection} />
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
