import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#16161a]" style={{ fontFamily: 'Outfit, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#ffffff] mb-8 text-start">About Me</h2>
        <div className="w-full">
          <p className="text-[#94a1b2] text-lg leading-relaxed mb-6">
            Hi I am Piolo Frances Enriquez and I am a passionate and aspiring software developer specializing in frontend development. 
            I’m committed to continuous learning and always stay updated with the latest industry trends to 
            improve my skills and deliver better user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
