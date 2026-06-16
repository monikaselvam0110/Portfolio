import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';

// Styling and icons
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from 'react-icons/fa';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';
import Cursor from './components/Cursor';
import Loader from './components/Loader';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Scroll Animations
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quad',
    });
  }, []);

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/monikaaselvarajj/', label: 'LinkedIn', color: 'hover:bg-blue-600 text-white' },
    { icon: <FaGithub />, url: 'https://github.com/monikaaselvarajj', label: 'GitHub', color: 'hover:bg-white hover:text-black text-white/80' },
    { icon: <FaCode />, url: 'https://leetcode.com/u/Monikaselvaraj/', label: 'LeetCode', color: 'hover:bg-yellow-500 hover:text-black text-white/80' },
    { icon: <FaEnvelope />, url: 'mailto:monikaaselvarajj@gmail.com', label: 'Email', color: 'hover:bg-primary hover:text-black text-white/80' },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative text-white min-h-screen selection:bg-primary/20 selection:text-primary">
          {/* Custom Trail Cursor */}
          <Cursor />

          {/* Interactive Background Particles */}
          <Particles />

          {/* Header Navigation */}
          <Navbar />

          {/* Floating Sidebar Social Nodes */}
          <div className="hidden md:flex fixed left-6 bottom-0 flex-col items-center gap-6 z-30">
            <div className="flex flex-col gap-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full border border-white/10 bg-[#130D2B]/80 backdrop-blur-md flex items-center justify-center text-base transition-all duration-300 transform hover:-translate-y-1 hover:border-primary/50 shadow-md ${item.color}`}
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="w-[1px] h-24 bg-gradient-to-t from-transparent via-white/20 to-white/20" />
          </div>

          {/* Main Content Sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Achievements />
            <Contact />
          </main>

          {/* Footer Component */}
          <Footer />
        </div>
      )}
    </>
  );
}
