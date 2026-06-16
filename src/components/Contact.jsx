import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', text: 'All fields are required.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', text: '' });

    // Simulate sending email
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ type: 'success', text: 'Message sent successfully! Monika will get back to you shortly.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/monikaaselvarajj/', label: 'LinkedIn', color: 'hover:text-blue-500 hover:border-blue-500/50 shadow-glow-primary/5' },
    { icon: <FaGithub />, url: 'https://github.com/monikaaselvarajj', label: 'GitHub', color: 'hover:text-white hover:border-white/50 shadow-glow-secondary/5' },
    { icon: <FaCode />, url: 'https://leetcode.com/u/Monikaselvaraj/', label: 'LeetCode', color: 'hover:text-yellow-500 hover:border-yellow-500/50 shadow-glow-accent/5' },
    { icon: <FaEnvelope />, url: 'mailto:monikaaselvarajj@gmail.com', label: 'Email', color: 'hover:text-primary hover:border-primary/50 shadow-glow-primary/5' }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative bg-[#0B071F] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase tracking-wider text-white">
            Get In <span className="text-primary text-neon-cyan">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Panel: Direct Connections */}
          <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
            <h3 className="font-display text-2xl font-bold text-white/95">
              Let's Connect &amp; Collaborate
            </h3>
            
            <p className="text-white/60 leading-relaxed text-sm md:text-base">
              I am open to internships, software engineering or testing roles, and interesting data projects. Whether you have a question, a project opportunity, or just want to say hi, feel free to drop a message!
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary text-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-widest font-semibold">Direct Email</div>
                  <a href="mailto:monikaaselvarajj@gmail.com" className="text-sm font-semibold text-white hover:text-primary transition-colors">
                    monikaaselvarajj@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Grid of Social Nodes */}
            <div className="flex gap-4 pt-6">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-white/70 transition-all duration-300 hover:-translate-y-1 ${item.color}`}
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Panel: Interactive Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6">
              
              {/* Form Validation Feedback */}
              {status.text && (
                <div className={`p-4 rounded-lg text-xs font-semibold uppercase tracking-wider ${
                  status.type === 'success' 
                    ? 'bg-accent/10 border border-accent/20 text-accent' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}>
                  {status.text}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-white/50 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-primary/50 text-white rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors font-medium"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-white/50 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-primary/50 text-white rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors font-medium"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-widest text-white/50 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 focus:border-primary/50 text-white rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors font-medium"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-white/50 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 focus:border-primary/50 text-white rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors font-medium resize-none"
                  placeholder="Enter your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-[#080415] font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 shadow-glow-primary hover:shadow-[0_0_25px_rgba(139,92,246,0.65)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane size={10} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
