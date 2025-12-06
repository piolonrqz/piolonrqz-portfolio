import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import Shuffle from './Shuffle';

const Hero = ({ scrollToSection }) => {
  return (
    <section className="pt-96 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="press-start-2p-regular" style={{ letterSpacing: '1.5em' }}>
                    <Shuffle
                    text="PIOLO"
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.2}
                    triggerOnce={true}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                    />
              </h1>
              <h1 className="press-start-2p-regular" style={{ letterSpacing: '1.5em' }}>
                    <Shuffle
                    text="FRANCES"
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.2}
                    triggerOnce={true}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                    />
              </h1>
              <h1 className="press-start-2p-regular" style={{ letterSpacing: '2em' }}>
                    <Shuffle
                    text="ENRIQUEZ"
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.2}
                    triggerOnce={true}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                    />
              </h1>
              <div className="flex items-center gap-3 mt-5">
                <a
                  href="https://www.linkedin.com/in/piolo-frances-enriquez-61663821b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="text-[#7f5af0] hover:text-[#6b48d6]"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://github.com/piolonrqz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="text-[#94a1b2] hover:text-[#ffffff]"
                >
                  <Github size={28} />
                </a>
              </div>
            </div>
              <a
                href="https://drive.google.com/file/d/1m1e5s04xkVss8JQd8vP8lpzCUdRi3T6f/view?usp=sharing"
                className="inline-block bg-[#7f5af0] text-[#ffffff] px-8 mt-12 py-3 rounded-lg hover:bg-[#6b48d6] mb-16 transition-colors font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
