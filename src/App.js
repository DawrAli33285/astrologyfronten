import React, { useEffect } from 'react';
import './App.css';
import fst from "./images/first.png";
import scnd from "./images/second.png";
import thd from "./images/thrd.png";
import four from "./images/fourth.png";
function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.async = true;
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-hero', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'grab' },
              onclick: { enable: true, mode: 'push' },
              resize: true
            },
            modes: {
              grab: { distance: 140, line_linked: { opacity: 1 } },
              push: { particles_nb: 4 }
            }
          },
          retina_detect: true
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="App">
      
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        <div id="particles-hero" className="absolute inset-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <h1 className="text-5xl md:text-7xl font-light text-center mb-6 tracking-wide">
            SIDEREAL ASTROLOGY
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Using the visible constellations in the sky.
          </p>
          <button
  onClick={() => {
    const section = document.getElementById("true-sidereal-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="border-2 border-white px-8 py-3 text-lg hover:bg-white hover:text-black transition-colors duration-300"
>
  LEARN MORE
</button>
        </div>
      </section>

    
      <section id="true-sidereal-section" className="py-[40px] px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
            WHAT IS TRUE SIDEREAL ASTROLOGY?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Using the visible sky, as it really is.
          </p>
          <hr className="border-gray-300 mb-16" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-justify text-gray-800 leading-relaxed">
              <p>
                Almost everything online and in the West uses a system called tropical astrology. Most people aren't aware that tropical astrology does not use the visible sky. Instead, it uses the seasons.
              </p>
              <p>
                Roughly 2000 years ago the constellations in the sky matched the seasons. The Sun was in Aries (the first sign of the zodiac) during the spring equinox. But, the stars have changed position since then. Today the Sun is in Pisces, not Aries, during the spring equinox. There is now a difference of up to two zodiac signs between tropical astrology and the visible sky.
              </p>
              <p>
                For example, mainstream astrology might say someone's Sun is in Leo, while the Sun is actually in Cancer. True sidereal astrology maintains the link between ourselves and the sky, by using the stars as they truly are.
              </p>
              <p>
                Thanks to technology we can now see the visible sky in astrological chart form. With the internet, true sidereal astrology is gaining widespread adoption. Many now believe this is the most accurate form of astrology because it uses what is actually in the sky. A system we have been using far longer than the past 2000 years.
              </p>
              <p className="text-gray-600">
                Read more about <a href="#" className="text-indigo-600 hover:underline">sidereal astrology</a>.
              </p>
              <p className="text-gray-600">
                Discover your <a href="#" className="text-indigo-600 hover:underline">true sidereal signs</a>.
              </p>
            </div>
            <div className="flex items-center justify-center">
  <div className="w-full max-w-2xl aspect-video">
    <iframe
      className="w-full h-full rounded-lg shadow-xl"
     src="https://www.youtube.com/embed/nAjbllpV_sw"
      title="What is True Sidereal Astrology?"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
          </div>
        </div>
      </section>

      <section className="py-[40px] px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[26px] md:text-[30px] font-light text-center mb-16">
            IN THE MEDIA
          </h2>
          <hr className="border-gray-300 mb-16" />

          <div className="media-logos grid grid-cols-1 md:grid-cols-4 gap-8 items-center justify-around">
            <a href="https://www.refinery29.com/en-gb/stargazing-sky-watching-astrology-tips" target="_blank" rel="nofollow" className="grayscale hover:grayscale-0 py-[10px] px-[15px] transition-all flex justify-center items-center">
              <img src={fst} alt="Refinery29 logo" className="max-w-[150px]" />
            </a>
            <a href="https://www.womenshealthmag.com/life/a45468393/sidereal-astrology/" target="_blank" rel="nofollow" className="grayscale hover:grayscale-0 py-[10px] px-[15px] transition-all flex justify-center items-center">
              <img src={scnd} alt="Women's Health logo" className="max-w-[150px]" />
            </a>
            <a href="https://thoughtcatalog.com/january-nelson/2019/01/sidereal-astrology/" target="_blank" rel="nofollow" className="grayscale hover:grayscale-0 py-[10px] px-[15px] transition-all flex justify-center items-center">
              <img src={thd} alt="Thought Catalog logo" className="max-w-[150px]" />
            </a>
            <a href="https://en.wikipedia.org/wiki/Sidereal_and_tropical_astrology" target="_blank" rel="nofollow" className="grayscale hover:grayscale-0 py-[10px] px-[15px] transition-all flex justify-center items-center">
              <img src={four} alt="Wikipedia logo" className="max-w-[150px]" />
            </a>
          </div>
        </div>
      </section>

     
    
    </div>
  );
}

export default App;