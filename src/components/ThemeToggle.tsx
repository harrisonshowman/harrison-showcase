import React from 'react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <motion.button
      className="theme-toggle"
      onClick={onToggle}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="icon">
        {theme === 'dark' ? '☀️' : '🌙'}
      </span>
      {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
    </motion.button>
  );
};

export default ThemeToggle; 