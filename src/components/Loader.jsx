import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('BOOTING PORTFOLIO CORE...');

  const messages = [
    'BOOTING PORTFOLIO CORE...',
    'ESTABLISHING NEURAL PIPELINES...',
    'LOADING DATABASES & ML MODELS...',
    'INITIALIZING QUALITY CORE...',
    'COMPILING DATA VISUALIZATION ENGINES...',
    'SYSTEM ONLINE. CORES ENGAGED.'
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 5;
        if (next >= 100) {
          clearInterval(interval);
          setMessage(messages[messages.length - 1]);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        
        // Update messages based on progress
        const targetMsgIndex = Math.min(
          Math.floor((next / 100) * messages.length),
          messages.length - 2
        );
        setMessage(messages[targetMsgIndex]);
        
        return next;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#080415] flex flex-col items-center justify-center font-mono px-6"
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <div className="w-full max-w-md p-6 rounded-lg border border-white/5 bg-white/[0.02] backdrop-blur-md relative overflow-hidden shadow-2xl">
        {/* Glow decorative rings */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

        <div className="flex justify-between items-center mb-6">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Core Loader
          </span>
          <span className="text-white/40 text-xs font-semibold">v1.0.0</span>
        </div>

        <div className="h-24 flex items-center justify-start text-sm text-white/80 leading-relaxed font-semibold">
          <div>
            <div className="text-white/40">&gt; npm run start-portfolio</div>
            <div className="text-accent mt-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-ping" />
              {message}
            </div>
          </div>
        </div>

        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary/10">
                Deploying Cores
              </span>
            </div>
            <div className="text-right">
              <span className="text-sm font-semibold inline-block text-primary">
                {progress}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 text-xs flex rounded bg-white/5 relative">
            <motion.div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-secondary to-primary"
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
