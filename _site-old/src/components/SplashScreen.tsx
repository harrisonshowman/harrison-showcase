import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  destination: string;
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ destination, onComplete }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [hideIcon, setHideIcon] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'slideIn' | 'hold' | 'slideOut'>('slideIn');

  const destinationMap: { [key: string]: string } = {
    'home': 'home',
    'explore': 'cs',
    'portfolio': 'portfolio',
    'profile': 'about'
  };

  const iconMap: { [key: string]: string } = {
    'home': '🏠',
    'cs': '📚',
    'portfolio': '💡',
    'about': '👤'
  };

  const colorMap: { [key: string]: string } = {
    'home': 'var(--chart-2)', // Purple for home
    'cs': 'var(--primary)', // Primary color for CS
    'portfolio': 'var(--accent)', // Accent color for portfolio
    'about': 'var(--chart-3)' // Chart color for about
  };

  useEffect(() => {
    // Show icon after pieces slide in (400ms)
    const iconTimer = setTimeout(() => {
      setShowIcon(true);
      setAnimationPhase('hold');
    }, 400);

    // Hide icon and start slide out (800ms - shorter static period)
    const hideIconTimer = setTimeout(() => {
      setHideIcon(true);
      setAnimationPhase('slideOut');
    }, 800);

    // Complete animation after slide out finishes (800ms + 0.8s animation + 0.4s stagger = 2.0s)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(iconTimer);
      clearTimeout(hideIconTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const pieces = Array.from({ length: 8 }, (_, i) => i);

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
          {pieces.map((piece, index) => {
            const isFromLeft = index % 2 === 0;
            
            // Define animation states
            const slideInX = '0%';
            const slideOutX = isFromLeft ? '100%' : '-100%';
            
            let animateX = slideInX;
            if (animationPhase === 'slideOut') {
              animateX = slideOutX;
            }
            
            return (
              <motion.div
                key={piece}
                className="splash-piece"
                style={{
                  position: 'absolute',
                  top: `${(index * 12.5)}%`,
                  left: '0',
                  width: '100%',
                  height: '12.5vh',
                  background: colorMap[destinationMap[destination]],
                  zIndex: 1000 + index
                }}
                initial={{ x: isFromLeft ? '-100%' : '100%' }}
                animate={{ x: animateX }}
                transition={{
                  duration: animationPhase === 'slideOut' ? 0.8 : 0.4, // Longer slide-out animation
                  delay: index * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />
            );
          })}
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
          transition={{ duration: 0.2 }}
        >
          {iconMap[destinationMap[destination]]}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen; 