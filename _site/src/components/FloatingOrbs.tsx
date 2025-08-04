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
        style={{
          position: 'fixed',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)',
          top: '-200px',
          left: '-200px',
          borderRadius: '50%',
          filter: 'blur(40px)',
          opacity: 0.4,
          zIndex: -1
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
        style={{
          position: 'fixed',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, #4F8CFF 0%, transparent 70%)',
          bottom: '-150px',
          right: '-150px',
          borderRadius: '50%',
          filter: 'blur(40px)',
          opacity: 0.4,
          zIndex: -1
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
        style={{
          position: 'fixed',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, #A5B4FC 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          opacity: 0.4,
          zIndex: -1
        }}
      />
    </>
  );
};

export default FloatingOrbs; 