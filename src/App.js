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
          <button className="border-2 border-white px-8 py-3 text-lg hover:bg-white hover:text-black transition-colors duration-300">
            LEARN MORE
          </button>
        </div>
      </section>

    
      <section className="py-[40px] px-4 bg-white">
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

     
      <section className="py-[40px] px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[26px] md:text-[30px] font-light text-center mb-16">
            OUR SERVICES
          </h2>
          <hr className="border-gray-300 mb-16" />

          <div className="grid md:grid-cols-3 gap-8 mb-16 justify-items-center">
          
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:bg-indigo-600 group transition-all w-80">
              <div className="bg-gray-300 group-hover:bg-indigo-500 h-44 flex items-center justify-center transition-colors">
                <svg className="w-12 h-12 text-gray-500 group-hover:text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="bg-gray-400 group-hover:bg-indigo-600 text-white p-6 text-center transition-colors h-52 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-3">WEEKLY HOROSCOPES</h3>
                <p className="mb-3 text-sm">Watch The Weekly Forecast</p>
                <p className="text-2xl font-bold">FREE</p>
              </div>
            </div>

            
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:bg-indigo-600 group transition-all w-80">
              <div className="bg-gray-300 group-hover:bg-indigo-500 h-44 flex items-center justify-center transition-colors">
                <svg className="w-12 h-12 text-gray-500 group-hover:text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                </svg>
              </div>
              <div className="bg-gray-400 group-hover:bg-indigo-600 text-white p-6 text-center transition-colors h-52 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-3">SIDEREAL CHART CALCULATOR</h3>
                <p className="mb-3 text-sm">View Your True Sidereal Birth Chart</p>
                <p className="text-2xl font-bold">FREE</p>
              </div>
            </div>

            
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:bg-indigo-600 group transition-all w-80">
              <div className="bg-gray-300 group-hover:bg-indigo-500 h-44 flex items-center justify-center transition-colors">
                <svg className="w-12 h-12 text-gray-500 group-hover:text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                </svg>
              </div>
              <div className="bg-gray-400 group-hover:bg-indigo-600 text-white p-6 text-center transition-colors h-52 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-3">CHART REPORT + E-READING</h3>
                <p className="mb-3 text-sm">Order Your Full Report & E-Reading</p>
                <p className="text-2xl font-bold">$95</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
         
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:bg-indigo-600 group transition-all w-80">
              <div className="bg-gray-300 group-hover:bg-indigo-500 h-44 flex items-center justify-center transition-colors">
                <svg className="w-12 h-12 text-gray-500 group-hover:text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div className="bg-gray-400 group-hover:bg-indigo-600 text-white p-6 text-center transition-colors h-52 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-3">ASTROLOGY READINGS</h3>
                <p className="mb-3 text-sm">Mp3 & Phone/Skype Readings</p>
                <p className="text-xl font-bold mb-3">$145 - $245</p>
                <button className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors text-sm font-medium">
                  GET READING
                </button>
              </div>
            </div>

       
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:bg-indigo-600 group transition-all w-80">
              <div className="bg-gray-300 group-hover:bg-indigo-500 h-44 flex items-center justify-center transition-colors">
                <svg className="w-12 h-12 text-gray-500 group-hover:text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                </svg>
              </div>
              <div className="bg-gray-400 group-hover:bg-indigo-600 text-white p-6 text-center transition-colors h-52 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-3">ASTROLOGY COURSES</h3>
                <p className="mb-3 text-sm">Learn True Sidereal Astrology</p>
                <p className="text-xl font-bold mb-3">$195 - $1495</p>
                <button className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors text-sm font-medium">
                  TAKE COURSE
                </button>
              </div>
            </div>

          
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:bg-indigo-600 group transition-all w-80">
              <div className="bg-gray-300 group-hover:bg-indigo-500 h-44 flex items-center justify-center transition-colors">
                <svg className="w-12 h-12 text-gray-500 group-hover:text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                </svg>
              </div>
              <div className="bg-gray-400 group-hover:bg-indigo-600 text-white p-6 text-center transition-colors h-52 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-3">ASTROLOGY SOFTWARE</h3>
                <p className="mb-3 text-sm">True Sky Online Software</p>
                <p className="text-xl font-bold mb-3">FREE - $15</p>
                <button className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors text-sm font-medium">
                  ACCESS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;