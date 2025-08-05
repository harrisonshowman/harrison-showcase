import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationProps {
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠', path: '/' },
    { id: 'explore', label: 'Explore CS', icon: '📚', path: '/explore' },
    { id: 'portfolio', label: 'Portfolio', icon: '💡', path: '/portfolio' },
    { id: 'profile', label: 'About', icon: '👤', path: '/profile' }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    onNavigate(item.id);
    navigate(item.path);
  };

  const getCurrentPage = () => {
    const path = location.pathname;
    const item = navItems.find(nav => nav.path === path);
    return item ? item.id : 'home';
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <motion.div 
          className="nav-brand"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="nav-logo">HS</span>
          <span className="nav-title">Harrison Showman</span>
        </motion.div>
        
        <motion.div 
          className="nav-links"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              className={`nav-link ${getCurrentPage() === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation; 