import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPython, FaDatabase, FaBrain, FaRobot, FaTerminal, FaChartBar } from 'react-icons/fa';
import { SiTensorflow, SiSelenium } from 'react-icons/si';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const titles = [
    'AI Engineer',
    'Software Tester',
    'Data Visualization Specialist',
    'QA Professional',
    'AI Innovator'
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    let timer;
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === currentTitle) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? currentTitle.substring(0, currentText.length - 1)
            : currentTitle.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 pb-20 px-6 relative overflow-hidden bg-background bg-grid-pattern"
    >
      {/* Background Aurora Glow Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] aurora-primary rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] aurora-secondary rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* Left Side Info - 55% space */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/10 bg-primary/[0.02] text-primary text-xs font-semibold uppercase tracking-widest mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            AI &amp; QA Portfolio
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-6xl xl:text-7xl leading-tight mb-4 tracking-tight text-white">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-white via-secondary to-primary bg-clip-text text-transparent text-neon-cyan">
              Monika Selvaraj
            </span>
          </h1>

          {/* Typing titles */}
          <div className="h-10 md:h-12 mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-white/95">
              I am passionate about <span className="text-primary typing-cursor text-neon-cyan font-mono">{currentText}</span>
            </h2>
          </div>

          <p className="text-white/50 text-sm md:text-base mb-8 max-w-xl leading-relaxed">
            Building intelligent AI solutions, ensuring software quality, and transforming complex data into meaningful insights. Passionate about machine learning pipelines, test automation, and interactive analytics.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScrollTo('#projects')}
              className="px-6 py-3 bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-[#080415] font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 shadow-glow-primary hover:shadow-[0_0_25px_rgba(139,92,246,0.45)] flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              View Projects <FaArrowRight size={10} />
            </button>
            <a
              href="https://drive.google.com/file/d/12oLLezQKT8f4vePLbAtFgc6CbM6HW2os/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/10 hover:border-primary/40 bg-white/[0.02] hover:bg-primary/5 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              Download Resume
            </a>
            <button
              onClick={() => handleScrollTo('#contact')}
              className="px-6 py-3 border border-primary/10 hover:border-primary/50 bg-primary/[0.02] hover:bg-primary/5 text-primary font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right Side Portrait & Orbit - 45% space */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center items-center relative min-h-[460px] md:min-h-[560px]"
        >
          {/* ==================== REDESIGNED TECH ORBIT SYSTEM ==================== */}

          {/* Outer Orbit Track (CCW) - Rendered Behind */}
          <div className="absolute w-[340px] h-[340px] md:w-[440px] md:h-[440px] rounded-full border border-white/5 pointer-events-none z-0 flex items-center justify-center animate-orbit-outer-parent">
            
            {/* Tag 1: TensorFlow (Top) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-outer-child">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-[#130D2B]/95 text-xs font-semibold text-white/80 shadow-md">
                <SiTensorflow className="text-[#FF6F00] text-sm" /> TensorFlow
              </div>
            </div>

            {/* Tag 2: Selenium (Right) */}
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 animate-orbit-outer-child">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-[#130D2B]/95 text-xs font-semibold text-white/80 shadow-md">
                <SiSelenium className="text-[#00B400] text-sm" /> Selenium
              </div>
            </div>

            {/* Tag 3: Playwright (Bottom) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animate-orbit-outer-child">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-[#130D2B]/95 text-xs font-semibold text-white/80 shadow-md">
                <FaTerminal className="text-[#2EAD33] text-sm" /> Playwright
              </div>
            </div>

            {/* Tag 4: Artificial Intelligence (Left) */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 animate-orbit-outer-child">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-[#130D2B]/95 text-xs font-semibold text-white/80 shadow-md">
                <FaRobot className="text-secondary text-sm" /> AI
              </div>
            </div>

          </div>

          {/* Inner Orbit Track (CW) - Rendered Behind */}
          <div className="absolute w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full border border-white/5 pointer-events-none z-0 flex items-center justify-center animate-orbit-inner-parent">
            
            {/* Tag 1: Python (Top-Left) */}
            <div className="absolute top-0 left-0 translate-x-1/3 translate-y-1/3 animate-orbit-inner-child">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-[#130D2B]/95 text-xs font-semibold text-white/80 shadow-md">
                <FaPython className="text-[#3776AB] text-sm" /> Python
              </div>
            </div>

            {/* Tag 2: Machine Learning (Top-Right) */}
            <div className="absolute top-0 right-0 -translate-x-1/3 translate-y-1/3 animate-orbit-inner-child">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-[#130D2B]/95 text-xs font-semibold text-white/80 shadow-md">
                <FaBrain className="text-primary text-sm" /> ML
              </div>
            </div>

            {/* Tag 3: SQL (Bottom-Left) */}
            <div className="absolute bottom-0 left-0 translate-x-1/3 -translate-y-1/3 animate-orbit-inner-child">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-[#130D2B]/95 text-xs font-semibold text-white/80 shadow-md">
                <FaDatabase className="text-primary text-sm" /> SQL
              </div>
            </div>

            {/* Tag 4: Power BI (Bottom-Right) */}
            <div className="absolute bottom-0 right-0 -translate-x-1/3 -translate-y-1/3 animate-orbit-inner-child">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-[#130D2B]/95 text-xs font-semibold text-white/80 shadow-md">
                <FaChartBar className="text-[#F2C811] text-sm" /> Power BI
              </div>
            </div>

          </div>

          {/* ====================================================================== */}

          {/* Portrait Container - Elevated on z-10 */}
          <div className="relative animate-float pointer-events-auto z-10">
            
            {/* Circular frame with glassmorphism ring and subtle glow */}
            <div className="relative w-[190px] h-[190px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden border border-primary/25 shadow-glow-primary p-1 bg-white/[0.03] backdrop-blur-md">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                {/* Renders python face-cropped image natively (face centered, background blurred) */}
                <img
                  src={profileImg}
                  alt="Monika Selvaraj Portrait"
                  className="w-full h-full object-cover filter contrast-[1.02] saturate-[1.01]"
                />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
