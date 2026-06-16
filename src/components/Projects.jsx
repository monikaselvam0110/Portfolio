import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaCode, FaTimes, FaCarBattery, FaLeaf } from 'react-icons/fa';

// Import banners
import evvisionBanner from '../assets/evvision_banner.png';
import plantDiseaseBanner from '../assets/plant_disease_banner.png';

// Import logos (used as primary card images)
import mailmindLogo from '../assets/mailmind_logo.jpg';
import testforgeLogo from '../assets/testforge_logo.png';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'MailMind AI',
      category: 'AI & Data Science',
      banner: mailmindLogo, // Use violet picture as card image
      description: 'MailMind AI is an intelligent email management platform that automatically categorizes emails, creates smart folders, prioritizes messages, detects important communications, and improves productivity through AI-powered organization.',
      features: [
        'Smart Folder Creation',
        'Email Categorization',
        'Priority Detection',
        'AI Suggestions',
        'Productivity Dashboard'
      ],
      tagColor: 'bg-primary/10 text-primary border-primary/20',
      demoUrl: 'https://github.com/monikaaselvarajj/mailmind-ai',
    },
    {
      id: 2,
      title: 'EV Vision AI',
      category: 'AI & Data Science',
      icon: <FaCarBattery className="text-secondary" />,
      banner: evvisionBanner,
      description: 'An AI-powered EV Battery Intelligence Platform that analyzes electric vehicle battery performance, predicts battery health, estimates range, and provides intelligent recommendations.',
      features: [
        'Battery Health Prediction',
        'EV Analytics Dashboard',
        'Performance Monitoring',
        'Predictive Intelligence',
        'Data Visualization'
      ],
      tagColor: 'bg-secondary/10 text-secondary border-secondary/20',
      demoUrl: 'https://github.com/monikaaselvarajj/EVision_AI',
    },
    {
      id: 3,
      title: 'Plant Disease Classification',
      category: 'AI & Data Science',
      icon: <FaLeaf className="text-primary" />,
      banner: plantDiseaseBanner,
      description: 'An AI-powered image recognition platform that detects crop and plant leaf diseases automatically using Deep Learning CNN models, helping farmers diagnose plant health issues and providing recovery solutions.',
      features: [
        'CNN Model Integration',
        'Leaf Disease Detection',
        'High Accuracy Classification',
        'Recovery Recommendations',
        'Real-time Analysis'
      ],
      tagColor: 'bg-primary/10 text-primary border-primary/20',
      demoUrl: 'https://github.com/monikaaselvarajj/Plant-Disease-Classification',
    },
    {
      id: 4,
      title: 'TestForge AI',
      category: 'Software Testing',
      banner: testforgeLogo, // Use blue picture as card image
      description: 'An intelligent AI-powered software testing platform that automatically generates test cases, analyzes requirements, predicts risks, assigns priorities and severities, integrates with Jira, GitHub, and Postman, and generates Selenium and Playwright automation scripts.',
      features: [
        'Requirement Analysis',
        'Test Case Generation',
        'Risk Prediction',
        'Priority Prediction',
        'Severity Prediction',
        'Jira Integration',
        'GitHub Integration',
        'Postman Integration',
        'Selenium Script Generation',
        'Playwright Script Generation',
        'QA Assistant'
      ],
      tagColor: 'bg-accent/10 text-accent border-accent/20',
      demoUrl: 'https://github.com/monikaaselvarajj/AI-TestCase-Generator',
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 relative bg-[#0B071F] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase tracking-wider text-white">
            Featured <span className="text-primary text-neon-cyan">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 rounded" />
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap" data-aos="fade-up" data-aos-delay="100">
          {['All', 'AI & Data Science', 'Software Testing'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                filter === tab
                  ? 'bg-gradient-to-r from-secondary to-primary text-[#080415] shadow-glow-primary'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-card flex flex-col h-full relative group overflow-hidden cursor-pointer rounded-2xl"
                onClick={() => setActiveProject(project)}
              >
                {/* Banner Image / Logo display */}
                <div className="h-44 overflow-hidden relative border-b border-white/5 bg-[#080415] flex items-center justify-center">
                  <img 
                    src={project.banner} 
                    alt={`${project.title} Visual`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080415] via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-grid-pattern opacity-15" />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col justify-between flex-grow relative z-10 bg-[#0B071F]/90">
                  
                  {/* Overlapping icon - only rendered if there is an icon and no specific brand logo banner */}
                  {project.icon && (
                    <div className="absolute -top-7 right-6 w-14 h-14 rounded-2xl bg-[#080415] border border-white/10 flex items-center justify-center text-2xl shadow-xl z-10 group-hover:scale-105 transition-transform duration-300">
                      {project.icon}
                    </div>
                  )}

                  <div>
                    {/* Category Tag */}
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border mb-4 ${project.tagColor}`}>
                      {project.category}
                    </span>

                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <span className="text-xs text-primary font-bold uppercase tracking-wider group-hover:underline">
                      View Specifications &gt;
                    </span>
                    <div className="text-white/40 hover:text-white transition-colors">
                      <FaExternalLinkAlt size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Details Modal overlay */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="w-full max-w-2xl bg-[#080415] border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-black/40 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors z-20"
                aria-label="Close modal"
              >
                <FaTimes size={16} />
              </button>

              {/* Modal Banner */}
              <div className="h-52 overflow-hidden relative border-b border-white/5 bg-[#080415]">
                <img 
                  src={activeProject.banner} 
                  alt={`${activeProject.title} Visual`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080415] via-[#080415]/40 to-transparent" />
                <div className="absolute inset-0 bg-grid-pattern opacity-25" />
                
                {/* Floating Logo/Icon overlay inside modal */}
                {activeProject.icon && (
                  <div className="absolute bottom-4 right-6 w-16 h-16 rounded-2xl bg-[#080415] border border-white/10 flex items-center justify-center text-3xl shadow-2xl overflow-hidden">
                    {activeProject.icon}
                  </div>
                )}
              </div>

              {/* Modal Content */}
              <div className="p-8 max-h-[60vh] overflow-y-auto">
                <span className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border mb-4 ${activeProject.tagColor}`}>
                  {activeProject.category}
                </span>

                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  {activeProject.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-6 font-medium">
                  {activeProject.description}
                </p>

                {/* Key Features Header */}
                <h4 className="font-display text-xs font-bold text-white/95 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Key Features
                </h4>

                {/* Features list */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {activeProject.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Links */}
                <div className="flex gap-4 border-t border-white/5 pt-6">
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-3 rounded-lg bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-[#080415] font-bold text-xs uppercase tracking-wider text-center transition-all duration-300 shadow-glow-primary flex items-center justify-center gap-2"
                  >
                    <FaCode size={14} /> View Source Code
                  </a>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-5 py-3 rounded-lg border border-white/15 hover:bg-white/5 text-white/80 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
