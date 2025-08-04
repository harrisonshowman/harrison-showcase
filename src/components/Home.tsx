import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../hooks/useNavigation';

interface HomeProps {
  onNavigate: (destination: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const navigateWithSplash = useNavigation(onNavigate);

  return (
    <div className="container">
      <header>
        <div className="brush-highlight">
          <svg 
            className="cloud-svg" 
            width="100%" 
            height="100%" 
            viewBox="0 0 700 140" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
              pointerEvents: 'none'
            }}
          >
            <path 
              d="M50,100 Q120,30 350,50 Q600,30 650,100 Q700,120 600,130 Q350,140 100,130 Q0,120 50,100 Z" 
              fill="#A5B4FC" 
              fillOpacity="0.92" 
              className="cloud-shape-dark"
            />
            <path 
              d="M50,100 Q120,30 350,50 Q600,30 650,100 Q700,120 600,130 Q350,140 100,130 Q0,120 50,100 Z" 
              fill="#7C3AED" 
              fillOpacity="0.32" 
              className="cloud-shape-light"
              style={{ display: 'none' }}
            />
          </svg>
          <motion.h1 
            className="glitch" 
            data-text="Harrison Showman"
            style={{ position: 'relative', zIndex: 1 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Harrison Showman
          </motion.h1>
        </div>
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
              onClick={() => navigateWithSplash('explore')}
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
              onClick={() => navigateWithSplash('portfolio')}
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
            onClick={() => navigateWithSplash('profile')}
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