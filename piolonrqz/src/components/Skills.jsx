import React from 'react';

const Skills = () => {
  // Placeholder logo cards (replace src with your images)
  const logoCards = [
    { src: '/logos/logo1.png', alt: 'Logo 1' },
    { src: '/logos/logo2.png', alt: 'Logo 2' },
    { src: '/logos/logo3.png', alt: 'Logo 3' },
    { src: '/logos/logo4.png', alt: 'Logo 4' },
    { src: '/logos/logo5.png', alt: 'Logo 5' },
    { src: '/logos/logo6.png', alt: 'Logo 6' },
    { src: '/logos/logo7.png', alt: 'Logo 7' },
    { src: '/logos/logo8.png', alt: 'Logo 8' },
    { src: '/logos/logo9.png', alt: 'Logo 9' }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-[#ffffff] mb-8 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
          {logoCards.map((logo, idx) => (
            <div
              key={idx}
              className="bg-[#0f0f12] border border-[#010101] rounded-xl overflow-hidden flex items-center justify-center"
              aria-label={logo.alt}
            >
              <div className="relative w-full" style={{ paddingTop: '100%' }}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
