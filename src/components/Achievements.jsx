import { FaAward, FaBriefcase, FaBrain, FaCode, FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';

export default function Achievements() {
  const achievements = [
    {
      icon: <FaBrain className="text-primary" />,
      title: 'AI Engineering Projects',
      description: 'Successfully developed and deployed multiple AI systems, including MailMind AI and EV Vision AI, resolving real-world productivity and forecasting requirements.',
      highlight: '3+ Systems Built'
    },
    {
      icon: <FaBriefcase className="text-secondary" />,
      title: 'Scout Edge Internship',
      description: 'Acquired practical engineering experience as an AI Engineer Intern, leading model investigations, test automation designs, and data processing solutions.',
      highlight: 'AI Engineer Intern'
    },
    {
      icon: <FaLaptopCode className="text-accent" />,
      title: 'Technical Learning',
      description: 'Mastered multiple technological paradigms across Machine Learning, Manual & Automated Software Testing practices, Quality Assurance methodologies, and Web Frameworks.',
      highlight: 'Dual Domain Proficiency'
    },
    {
      icon: <FaCode className="text-primary" />,
      title: 'LeetCode Profile',
      description: 'Active problem solver tackling complex algorithmic puzzles on data structures, recursion, and search matrices. Check out my profile to see coding milestones.',
      highlight: '50+ Algorithmic Solves',
      link: 'https://leetcode.com/u/Monikaselvaraj/'
    },
    {
      icon: <FaAward className="text-secondary" />,
      title: 'Academic Excellence',
      description: 'Maintaining a strong cumulative CGPA of 8.4 in B.Tech Artificial Intelligence and Data Science at Karpagam College of Engineering.',
      highlight: '8.4 Cumulative CGPA'
    }
  ];

  return (
    <section id="achievements" className="py-24 px-6 relative bg-background overflow-hidden">
      {/* Background ambient blur */}
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase tracking-wider text-white">
            Key <span className="text-primary text-neon-cyan">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 rounded" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 flex flex-col justify-between h-full relative group overflow-hidden rounded-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div>
                {/* Header Icon Node */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl mb-6 group-hover:scale-105 group-hover:bg-white/10 transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Highlight Tag & Action link */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                <span className="inline-block px-2 py-1 bg-white/5 border border-white/10 text-white/70 rounded-md text-xs font-semibold uppercase tracking-wider">
                  {item.highlight}
                </span>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
                  >
                    View <FaExternalLinkAlt size={10} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
