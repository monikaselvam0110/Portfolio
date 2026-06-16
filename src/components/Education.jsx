import { FaGraduationCap, FaCalendarAlt, FaAward } from 'react-icons/fa';

export default function Education() {
  const educationList = [
    {
      institution: 'Karpagam College of Engineering',
      degree: 'B.Tech Artificial Intelligence and Data Science',
      duration: '2023 - 2027',
      cgpa: '8.4',
      details: 'Focusing on algorithmic research, machine learning system architectures, data analytic dashboards, and quality assurance principles.',
      color: 'border-secondary/20',
      iconBg: 'bg-secondary/10 border-secondary/20 text-secondary shadow-glow-secondary/20'
    }
  ];

  return (
    <section id="education" className="py-24 px-6 relative bg-[#0B071F] overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase tracking-wider text-white">
            Academic <span className="text-primary text-neon-cyan">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 rounded" />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 pl-6 ml-4 space-y-12">
          
          {educationList.map((edu, index) => (
            <div key={index} className="relative group" data-aos="fade-up">
              
              {/* Timeline Icon Node */}
              <div className={`absolute -left-[43px] top-1.5 w-8 h-8 rounded-full border flex items-center justify-center text-sm z-10 bg-[#080415] ${edu.iconBg}`}>
                <FaGraduationCap size={14} />
              </div>

              {/* Glass Details Card */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-secondary/30 transition-colors">
                
                {/* Duration Tag */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/50 bg-white/5 px-2.5 py-1 rounded-md">
                    <FaCalendarAlt size={10} className="text-secondary" /> {edu.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-md">
                    <FaAward size={10} /> CGPA: {edu.cgpa}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <h4 className="text-sm font-semibold text-white/60 mb-4">
                  {edu.institution}
                </h4>

                <p className="text-sm text-white/50 leading-relaxed">
                  {edu.details}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
