import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: 'blur(8px)',
    scale: 0.985
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as any // Custom luxury cubic-bezier (Apple-level smoothness)
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: 'blur(8px)',
    scale: 0.985,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1] as any
    }
  }
};

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {children}
    </motion.div>
  );
};
