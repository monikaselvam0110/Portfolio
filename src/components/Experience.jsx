import { FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import scoutedgeLogo from '../assets/scoutedge_logo.png';

export default function Experience() {
  const experiences = [
    {
      role: 'AI Engineer Intern',
      company: 'Scout Edge',
      website: 'https://www.scoutedge.in',
      duration: 'Present',
      description: 'Gained hands-on industry experience building intelligent solutions, conducting algorithmic tests, and deploying optimized data workflows.',
      bullets: [
        'AI Model Development',
        'Data Processing',
        'Machine Learning Solutions',
        'Research and Development'
      ],
      color: 'border-primary/20',
      iconBg: 'bg-primary/10 border-primary/20 text-primary shadow-glow-primary/20'
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative bg-background overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase tracking-wider text-white">
            Work <span className="text-primary text-neon-cyan">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 rounded" />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 pl-6 ml-4 space-y-12">
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative group" data-aos="fade-up">
              
              {/* Timeline Icon Node */}
              <div className={`absolute -left-[43px] top-1.5 w-8 h-8 rounded-full border flex items-center justify-center text-sm z-10 bg-[#080415] ${exp.iconBg}`}>
                <img src={scoutedgeLogo} alt="Logo Node" className="w-full h-full rounded-full object-cover" />
              </div>

              {/* Glass Details Card */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                
                {/* Duration Tag */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/50 bg-white/5 px-2.5 py-1 rounded-md">
                    <FaCalendarAlt size={10} className="text-primary" /> {exp.duration}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Internship
                  </span>
                </div>

                {/* Company Logo and Role Info Row */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl border border-white/10 overflow-hidden bg-black/40 flex items-center justify-center shrink-0">
                    <img src={scoutedgeLogo} alt="Scout Edge Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-0.5">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-primary hover:text-secondary transition-colors flex items-center gap-1.5">
                      <a href={exp.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 group">
                        {exp.company} 
                        <span className="text-white/40 text-xs font-normal group-hover:underline ml-1">
                          (www.scoutedge.in)
                        </span>
                        <FaExternalLinkAlt size={10} className="text-white/40 group-hover:text-primary transition-colors ml-1" />
                      </a>
                    </h4>
                  </div>
                </div>

                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Grid Responsibilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs font-semibold text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {bullet}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
