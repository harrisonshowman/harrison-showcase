import React from 'react';
import { motion } from 'framer-motion';

interface HomeProps {
  onNavigate: (destination: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="container">
      <header>
        <motion.h1 
          className="glitch" 
          data-text="Harrison Showman"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Harrison Showman
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Software Developer & Creative Technologist
        </motion.p>
      </header>

      <motion.div 
        className="home-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="home-sections">
          <motion.div 
            className="home-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="home-card-icon">📚</div>
            <div className="home-card-title">Explore CS</div>
            <div className="home-card-desc">
              Interactive data structures and algorithms. Learn, visualize, and master core computer science concepts.
            </div>
            <button 
              className="button-accent home-card-btn"
              onClick={() => onNavigate('explore')}
            >
              Explore CS
            </button>
          </motion.div>

          <motion.div 
            className="home-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="home-card-icon">💡</div>
            <div className="home-card-title">Portfolio</div>
            <div className="home-card-desc">
              Browse my projects in web, mobile, and creative development. See what I've built and what I'm passionate about.
            </div>
            <button 
              className="button-accent home-card-btn"
              onClick={() => onNavigate('portfolio')}
            >
              View Portfolio
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="brush-highlight-btn"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <button 
            className="button-accent about-btn"
            onClick={() => onNavigate('profile')}
          >
            About Me
          </button>
        </motion.div>
      </motion.div>

      <footer>
        <p>&copy; 2025 Harrison Showman. Crafted with passion.</p>
      </footer>
    </div>
  );
};

export default Home; 