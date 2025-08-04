import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  destination: string;
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ destination, onComplete }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [hideIcon, setHideIcon] = useState(false);

  const destinationMap: { [key: string]: string } = {
    'explore': 'cs',
    'portfolio': 'portfolio',
    'profile': 'about'
  };

  const iconMap: { [key: string]: string } = {
    'cs': '📚',
    'portfolio': '💡',
    'about': '👤'
  };

  const colorMap: { [key: string]: string } = {
    'cs': '#1e40af', // Deep blue for CS
    'portfolio': '#7C3AED', // Purple for portfolio
    'about': '#4F8CFF' // Blue for about
  };

  useEffect(() => {
    // Show icon after pieces slide in (500ms)
    const iconTimer = setTimeout(() => {
      setShowIcon(true);
    }, 500);

    // Hide icon before pieces slide out (950ms before end)
    const hideIconTimer = setTimeout(() => {
      setHideIcon(true);
    }, 1950);

    // Complete animation after 2.9 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2900);

    return () => {
      clearTimeout(iconTimer);
      clearTimeout(hideIconTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const pieces = Array.from({ length: 5 }, (_, i) => i);

  return (
    <AnimatePresence>
      <motion.div
        id="splash-overlay"
        className="splash-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          background: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        data-destination={destinationMap[destination]}
      >
        <div className="splash-pieces" style={{ position: 'relative', width: '100%', height: '100%' }}>
          {pieces.map((piece, index) => (
            <motion.div
              key={piece}
              className="splash-piece"
              style={{
                position: 'absolute',
                top: 0,
                left: `${(index * 20)}%`,
                width: '20%',
                height: '100%',
                background: colorMap[destinationMap[destination]],
                transform: 'translateX(-100vw)'
              }}
              initial={{ x: '-100vw' }}
              animate={{ x: '0vw' }}
              exit={{ x: '100vw' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          ))}
        </div>

        <motion.div
          className="splash-center-text"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '4rem',
            color: 'white',
            zIndex: 10000,
            textAlign: 'center'
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: showIcon && !hideIcon ? 1 : 0,
            scale: showIcon && !hideIcon ? 1 : 0.5
          }}
          transition={{ duration: 0.3 }}
        >
          {iconMap[destinationMap[destination]]}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen; 