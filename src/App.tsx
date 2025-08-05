import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
    // Trigger splash screen for page transitions
    setSplashDestination(newPage);
    setShowSplash(true);
    
    // Hide splash after animation completes
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  };

  return (
    <Router basename="/harrison-showcase">
      <div className="App">
        <FloatingOrbs />
        <Navigation onNavigate={handleNavigation} />
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        
        {showSplash && (
          <SplashScreen 
            destination={splashDestination}
            onComplete={() => setShowSplash(false)}
          />
        )}
        
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home onNavigate={handleNavigation} />} />
            <Route path="/explore" element={<ExploreCS onNavigate={handleNavigation} />} />
            <Route path="/portfolio" element={<Portfolio onNavigate={handleNavigation} />} />
            <Route path="/profile" element={<Profile onNavigate={handleNavigation} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
