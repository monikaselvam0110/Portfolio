import { FaAngleUp } from 'react-icons/fa';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-white/5 py-12 px-6 bg-[#080415] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
        
        <div>
          <div className="font-display font-bold text-white text-base mb-2">Monika Selvaraj</div>
          <p className="text-white/40 text-xs font-semibold">
            &copy; 2026 Monika Selvaraj. All rights reserved.
          </p>
        </div>

        <div className="text-xs text-white/30 font-semibold">
          Built with React • Tailwind CSS • Framer Motion
        </div>

        {/* Scroll back to top shortcut */}
        <button
          onClick={handleScrollToTop}
          className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 text-white/70 hover:text-primary transition-all duration-300 transform hover:-translate-y-1 shadow-md"
          aria-label="Scroll to top"
        >
          <FaAngleUp size={16} />
        </button>

      </div>
    </footer>
  );
}
