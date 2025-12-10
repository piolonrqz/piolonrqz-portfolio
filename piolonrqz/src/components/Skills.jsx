import React from 'react';

const shake = `
  /* Hover behavior applied to the image only: rotate instead of shake */
  .logo-hover {
    transition: transform 220ms cubic-bezier(.2,.8,.2,1), filter 160ms ease;
    will-change: transform;
    transform-origin: center;
  }

  /* rotate slightly and scale up on hover */
  .logo-hover:hover {
    transform: rotate(8deg) scale(1.03);
  }

  /* accessible focus state for keyboard users */
  .logo-hover:focus-visible {
    outline: 2px solid rgba(127,90,240,0.18);
    transform: rotate(8deg) scale(1.03);
  }
`;

const Skills = () => {
  // Use images from the `public` folder (served from root)
  const logoCards = [
    { src: '/react.png', alt: 'React' },
    { src: '/js.png', alt: 'JavaScript' },
    { src: '/vite.svg', alt: 'Vite' },
    { src: '/tailwind.png', alt: 'Tailwind CSS' },
    { src: '/python.png', alt: 'Python' },
    { src: '/java.png', alt: 'Java' },
    { src: '/springboot.png', alt: 'Spring Boot' },
    { src: '/firebase.png', alt: 'Firebase' },
    { src: '/mysql.png', alt: 'MySQL' },
    { src: '/github.png', alt: 'Github' },
    { src: '/express.png', alt: 'Express' },
    { src: '/node.png', alt: 'Node JS' }

    
    
  ];

  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <style>{shake}</style>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-[#ffffff] mb-8 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>My Skills</h2>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {logoCards.map((logo, idx) => (
            <div
              key={idx}
              className="bg-gray-600 border border-[#010101] rounded-xl overflow-hidden flex flex-col items-center justify-center"
              aria-label={logo.alt}
            >
              <div className="relative w-full" style={{ paddingTop: '100%' }}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="absolute object-contain w-1/2 -translate-x-1/2 -translate-y-1/2 logo-hover left-1/2 top-1/2 h-1/2"
                  loading="lazy"
                />
              </div>
              <div className="w-full text-center py-2 text-lg px-4 text-[#94a1b2]">{logo.alt}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
