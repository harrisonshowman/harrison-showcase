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
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        zIndex: 1000,
        background: 'var(--bg-card)',
        border: '2px solid var(--border-color)',
        borderRadius: '50px',
        padding: '0.75rem 1.5rem',
        color: 'var(--text-primary)',
        fontSize: '0.9rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
    >
      <span className="icon">
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </motion.button>
  );
};

export default ThemeToggle; 