import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

export default function About() {
  const infoDetails = [
    { icon: <FaGraduationCap className="text-primary" />, label: 'Education', value: 'B.Tech AI & Data Science' },
    { icon: <FaBriefcase className="text-secondary" />, label: 'Current Role', value: 'AI Engineer Intern' },
    { icon: <FaMapMarkerAlt className="text-accent" />, label: 'Location', value: 'Coimbatore, Tamil Nadu' },
    { icon: <FaCalendarAlt className="text-primary" />, label: 'Graduation Year', value: '2027' },
  ];

  return (
    <section id="about" className="py-24 px-6 relative bg-[#0B071F] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase tracking-wider text-white">
            About <span className="text-primary text-neon-cyan">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 rounded" />
        </div>

        {/* Bio Details - Single Column stretched layout */}
        <div className="space-y-8" data-aos="fade-up">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white/95 text-center">
            Aspiring AI Engineer &amp; Software Quality Professional
          </h3>
          
          <p className="text-white/60 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
            I am a passionate Artificial Intelligence and Data Science student at Karpagam College of Engineering with a strong interest in AI Engineering, Software Testing, and Data Visualization. I enjoy building intelligent applications, analyzing data, and ensuring software quality through effective testing methodologies.
          </p>
          
          <p className="text-white/60 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
            Through internships, academic projects, and continuous learning, I have developed skills in artificial intelligence, machine learning, testing practices, and data-driven problem solving. My goal is to become a successful AI Engineer and Software Testing Professional who develops innovative and reliable solutions that create real-world impact.
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-3xl mx-auto">
            {infoDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
              >
                <div className="text-lg p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                  {detail.icon}
                </div>
                <div>
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider">{detail.label}</div>
                  <div className="text-xs font-semibold text-white/90">{detail.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
