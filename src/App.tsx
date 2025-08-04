import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import ExploreCS from './components/ExploreCS';
import Portfolio from './components/Portfolio';
import Profile from './components/Profile';
import SplashScreen from './components/SplashScreen';
import ThemeToggle from './components/ThemeToggle';
import FloatingOrbs from './components/FloatingOrbs';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showSplash, setShowSplash] = useState(false);
  const [splashDestination, setSplashDestination] = useState('');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleNavigation = (newPage: string) => {
    if (newPage === currentPage) return;
    
    // Trigger splash screen for page transitions
    setSplashDestination(newPage);
    setShowSplash(true);
    
    // Change page content when splash is fully covering the screen (after all pieces slide in)
    setTimeout(() => {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400); // Wait for all 5 pieces to fully slide in (0.4s total with 0.05s stagger)
    
    // Hide splash after animation completes
    setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Updated to match splash screen duration
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigation} />;
      case 'explore':
        return <ExploreCS onNavigate={handleNavigation} />;
      case 'portfolio':
        return <Portfolio onNavigate={handleNavigation} />;
      case 'profile':
        return <Profile onNavigate={handleNavigation} />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="App">
      <FloatingOrbs />
      <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      
      {showSplash && (
        <SplashScreen 
          destination={splashDestination}
          onComplete={() => setShowSplash(false)}
        />
      )}
      
      <main className="relative">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
