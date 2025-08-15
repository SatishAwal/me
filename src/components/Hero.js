import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import profile from '../assets/self.png';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const texts = [
    "Frontend Developer",
    "UI/UX Designer", 
    "Creative Problem Solver",
    "Passionate Learner"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="section-container">
        <div className="hero-content">
          <div className="hero-text fade-in-left">
            <div className="hero-badge">
              <span> Welcome to my portfolio</span>
            </div>
            
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Satish Awal</span>
            </h1>
            
            <div className="hero-subtitle">
              <span>I'm a </span>
              <span className="typing-text">{texts[currentText]}</span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-description">
              A passionate developer and designer who loves creating beautiful, 
              functional, and user-centered digital experiences. I combine creativity 
              with technical expertise to build solutions that make a difference.
            </p>
            
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Get In Touch
              </a>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image fade-in-right">
            <div className="image-container">
              <div className="image-background"></div>
              <img src={profile} alt="Satish Awal" className="profile-image" />
              <div className="floating-card">
                <div className="card-icon">💻</div>
                <div className="card-text">
                  <span>Available for</span>
                  <strong>New Projects</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
