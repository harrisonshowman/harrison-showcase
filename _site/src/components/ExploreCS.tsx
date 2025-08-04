import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../hooks/useNavigation';

interface ExploreCSProps {
  onNavigate: (destination: string) => void;
}

const ExploreCS: React.FC<ExploreCSProps> = ({ onNavigate }) => {
  const navigateWithSplash = useNavigation(onNavigate);

  return (
    <div className="container">
      <header>
        <motion.h1 
          className="glitch" 
          data-text="Explore CS"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore CS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Interactive data structures and algorithms
        </motion.p>
      </header>

      <main>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Computer Science Resources</h2>
          <p>This section will contain interactive data structures and algorithms content.</p>
          
          <button 
            className="button-accent"
            onClick={() => navigateWithSplash('home')}
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

export default ExploreCS; 