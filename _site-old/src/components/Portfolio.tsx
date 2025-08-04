import React from 'react';
import { motion } from 'framer-motion';

interface PortfolioProps {
  onNavigate: (destination: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  return (
    <div className="container">
      <header>
        <motion.h1 
          className="glitch" 
          data-text="Portfolio"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My projects and creative work
        </motion.p>
      </header>

      <main>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>My Projects</h2>
          <p>This section will contain all my project showcases and creative work.</p>
          
          <button 
            className="button-accent"
            onClick={() => onNavigate('home')}
            style={{ marginTop: '2rem' }}
          >
            Back to Home
          </button>
        </motion.div>
      </main>

      <footer>
        <p>&copy; 2025 Harrison Showman. Crafted with passion.</p>
      </footer>
    </div>
  );
};

export default Portfolio; 