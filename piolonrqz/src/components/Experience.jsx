import React from 'react';

const Experience = () => {
  const experience = [
    {
      role: 'Software Developer Intern',
      company: 'Odysse Innovations',
      companyUrl: 'https://odysse.io',
      period: 'Oct 2024 - Dec 2024',
    }
  ];

  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#ffffff] mb-12 text-center">Experience</h2>
        
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#7f5af0]"></div>
          
          {experience.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              <div className="md:flex md:flex-row">
                <div className="md:w-1/2 md:px-8">
                  <div className="bg-[#1a1a1f] border border-[#010101] rounded-xl p-6 relative">
                    <div className="absolute top-6 -left-2 md:-right-2 w-4 h-4 bg-[#7f5af0] rounded-full border-4 border-[#16161a]"></div>
                    <h3 className="text-[#ffffff] text-xl font-bold mb-2">{exp.role}</h3>
                    
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2cb67d] font-medium mb-2 inline-block hover:underline"
                    >
                      {exp.company}
                    </a>

                    <p className="text-[#72757e] text-sm mb-4">{exp.period}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
