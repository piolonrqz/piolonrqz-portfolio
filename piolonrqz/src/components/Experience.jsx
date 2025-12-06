import React from 'react';

const Experience = () => {
  const experience = [
    {
      role: 'Senior Full Stack Developer',
      company: 'TechCorp Industries',
      period: 'Jan 2022 - Present',
      points: [
        'Led development of microservices architecture serving 500K+ daily active users',
        'Reduced application load time by 60% through optimization and caching strategies'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Solutions Inc',
      period: 'Jun 2020 - Dec 2021',
      points: [
        'Built responsive web applications using React and modern JavaScript frameworks',
        'Collaborated with UX team to implement pixel-perfect designs and improve user engagement by 40%'
      ]
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Innovations',
      period: 'Jan 2019 - May 2020',
      points: [
        'Developed and maintained RESTful APIs using Node.js and Express',
        'Participated in agile development cycles and code reviews'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#ffffff] mb-12 text-center">Experience</h2>
        
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#7f5af0]"></div>
          
          {experience.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 md:px-8">
                  <div className="bg-[#1a1a1f] border border-[#010101] rounded-xl p-6 relative">
                    <div className="absolute top-6 -left-2 md:-left-auto md:left-auto md:-right-2 w-4 h-4 bg-[#7f5af0] rounded-full border-4 border-[#16161a]"></div>
                    <h3 className="text-[#ffffff] text-xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-[#2cb67d] font-medium mb-2">{exp.company}</p>
                    <p className="text-[#72757e] text-sm mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-[#94a1b2] text-sm flex">
                          <span className="text-[#7f5af0] mr-2">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
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
