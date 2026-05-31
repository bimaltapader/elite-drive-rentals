import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldExit(true);
    }, 2800);
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!shouldExit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', opacity: 0.9 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-luxury-black"
        >
          <div className="flex flex-col items-center space-y-6">
            {/* Animated Logo Shield SVG */}
            <svg
              className="w-24 h-24 text-gold-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon
                className="draw-svg"
                points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"
              />
              <path
                className="draw-svg"
                d="M12 22V2"
                style={{ animationDelay: '0.4s' }}
              />
            </svg>

            {/* Glowing Brand Text */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.15em' }}
              animate={{ opacity: 1, letterSpacing: '0.4em' }}
              transition={{ duration: 1.8, delay: 0.3, ease: 'easeOut' }}
              className="text-center"
            >
              <h2 className="font-serif text-2xl md:text-3xl text-gold-gradient font-bold uppercase">
                ELITE DRIVE
              </h2>
              <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 block mt-2.5">
                CURATORS OF AUTOMOTIVE PRIVILEGE
              </span>
            </motion.div>
          </div>

          {/* Loading line indicator at the bottom */}
          <div className="absolute bottom-20 left-0 right-0 max-w-xs mx-auto h-[1px] bg-white/5 overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 2.6, ease: 'easeInOut' }}
              className="w-full h-full bg-gradient-to-r from-gold-700 via-gold-400 to-gold-700"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
