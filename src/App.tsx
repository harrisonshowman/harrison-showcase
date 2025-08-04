import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
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
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const triggerSplash = (destination: string) => {
    setSplashDestination(destination);
    setShowSplash(true);
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <Router>
      <div className="App">
        <FloatingOrbs />
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        
        {showSplash && (
          <SplashScreen 
            destination={splashDestination}
            onComplete={handleSplashComplete}
          />
        )}
        
        <Routes>
          <Route path="/" element={<Home onNavigate={triggerSplash} />} />
          <Route path="/explore" element={<ExploreCS onNavigate={triggerSplash} />} />
          <Route path="/portfolio" element={<Portfolio onNavigate={triggerSplash} />} />
          <Route path="/profile" element={<Profile onNavigate={triggerSplash} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
