import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../hooks/useNavigation';

interface ProfileProps {
  onNavigate: (destination: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ onNavigate }) => {
  const navigateWithSplash = useNavigation(onNavigate);

  return (
    <div className="container">
      <header>
        <motion.h1 
          className="glitch" 
          data-text="About Me"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get to know Harrison Showman
        </motion.p>
      </header>

      <main>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>About Harrison</h2>
          <p>This section will contain my bio, skills, and personal information.</p>
          
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

export default Profile; 