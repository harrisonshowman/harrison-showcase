import React from 'react';
import { motion } from 'framer-motion';

const FloatingOrbs: React.FC = () => {
  return (
    <>
      <motion.div
        className="orb orb1"
        animate={{
          x: [0, 100, -100, 50, 0],
          y: [0, -100, 100, 50, 0],
          scale: [1, 1.1, 0.9, 1.05, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="orb orb2"
        animate={{
          x: [0, -100, 100, -50, 0],
          y: [0, 100, -100, -50, 0],
          scale: [1, 0.9, 1.1, 0.95, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      <motion.div
        className="orb orb3"
        animate={{
          x: [0, 50, -50, 25, 0],
          y: [0, -50, 50, -25, 0],
          scale: [1, 1.05, 0.95, 1.02, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
      />
    </>
  );
};

export default FloatingOrbs; 