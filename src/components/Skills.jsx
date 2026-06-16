import { motion, useMotionValue, useTransform } from 'framer-motion';
import { 
  FaPython, FaJava, FaJs, FaDatabase,
  FaBrain, FaChartBar, FaChartPie, FaNetworkWired,
  FaBug, FaClipboardList, FaFileAlt, FaShieldAlt,
  FaHtml5, FaCss3Alt, FaReact, FaCode,
  FaGitAlt, FaGithub, FaTerminal, FaBookOpen
} from 'react-icons/fa';

// Reusable 3D Tilt Card Component
function TiltCard({ children, className, glowColor }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse coordinate bounds to degrees of rotation
  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card p-6 rounded-2xl border relative overflow-hidden group cursor-default transition-all duration-300 shadow-lg flex flex-col justify-between h-[360px] ${className}`}
      whileHover={{ y: -6, borderColor: glowColor }}
    >
      {/* Neon Radial Gradient Hover Glow */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" 
      />

      {/* Decorative Floating Micro-particles */}
      <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:animate-ping pointer-events-none z-0" />
      <div className="absolute bottom-4 left-6 w-1 h-1 rounded-full bg-secondary/30 group-hover:bg-secondary group-hover:scale-150 transition-all pointer-events-none z-0" />

      <div className="relative z-10 w-full">
        {children}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const categories = [
    {
      title: 'Programming',
      borderGlow: 'rgba(167, 139, 250, 0.35)',
      iconColor: 'text-primary',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 92 },
        { name: 'SQL', icon: <FaDatabase />, level: 88 },
      ],
    },
    {
      title: 'AI & Data Science',
      borderGlow: 'rgba(139, 92, 246, 0.35)',
      iconColor: 'text-secondary',
      skills: [
        { name: 'Machine Learning', icon: <FaBrain />, level: 90 },
        { name: 'Deep Learning', icon: <FaNetworkWired />, level: 82 },
        { name: 'Data Analytics', icon: <FaChartBar />, level: 88 },
        { name: 'Data Visualization', icon: <FaChartPie />, level: 91 },
      ],
    },
    {
      title: 'Software Testing',
      borderGlow: 'rgba(139, 92, 246, 0.35)',
      iconColor: 'text-accent',
      skills: [
        { name: 'Manual Testing', icon: <FaBug />, level: 95 },
        { name: 'Test Case Design', icon: <FaClipboardList />, level: 93 },
        { name: 'Bug Reporting', icon: <FaFileAlt />, level: 94 },
        { name: 'Quality Assurance', icon: <FaShieldAlt />, level: 90 },
      ],
    },
    {
      title: 'Web Development',
      borderGlow: 'rgba(167, 139, 250, 0.35)',
      iconColor: 'text-primary',
      skills: [
        { name: 'HTML & CSS', icon: <FaHtml5 />, level: 92 },
        { name: 'Vibe Coding', icon: <FaCode />, level: 99 },
      ],
    },
    {
      title: 'Tools & Platforms',
      borderGlow: 'rgba(139, 92, 246, 0.35)',
      iconColor: 'text-secondary',
      skills: [
        { name: 'Git & GitHub', icon: <FaGitAlt />, level: 90 },
        { name: 'VS Code & Jupyter', icon: <FaTerminal />, level: 92 },
        { name: 'Selenium API', icon: <FaClipboardList />, level: 85 },
        { name: 'Jupyter & Pandas', icon: <FaBookOpen />, level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative bg-background overflow-hidden">
      {/* Aurora visual glow backdrops */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase tracking-wider text-white">
            Technical <span className="text-primary text-neon-cyan">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 rounded" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <TiltCard
              key={index}
              glowColor={category.borderGlow}
              className="border-white/5"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <h3 className="font-display text-base font-bold text-white mb-6 border-b border-white/5 pb-3 uppercase tracking-wider">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2 group/skill">
                    
                    {/* Header: Icon, Name, and Percent level */}
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="flex items-center gap-2 text-white/70 group-hover/skill:text-white transition-colors">
                        <span className={`text-sm group-hover/skill:scale-110 transition-transform ${category.iconColor}`}>
                          {skill.icon}
                        </span>
                        {skill.name}
                      </span>
                      <span className="font-mono text-white/40 group-hover/skill:text-primary transition-colors">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Animated Progress Gauge */}
                    <div className="w-full bg-white/[0.04] h-[5px] rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-secondary to-primary rounded-full"
                      />
                    </div>

                  </div>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
