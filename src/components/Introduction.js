// Introduction.js
import React from 'react';
import '../styles/Introduction.css';
import profile from '../assets/self.png';

const Introduction = () => {
    const skills = ['Frontend Development', 'UI/UX Design', 'Mobile App Development'];
    const [currentSkill, setCurrentSkill] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkill((prev) => (prev + 1) % skills.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="introduction-section" id="home">
            <div className="intro-content">
                <div className="intro-text-content">
                    <div className="greeting-container">
                        <span className="greeting-tag">Welcome to my portfolio</span>
                        <h2 className="greeting">
                            Hi there! <span className="wave">👋</span>
                        </h2>
                    </div>
                    
                    <h1 className="name">
                        I'm <span className="highlight">Satish Awal</span>
                    </h1>
                    
                    <div className="typing-container">
                        <span className="typing-prefix">I specialize in</span>
                        <span className="typing-text">{skills[currentSkill]}</span>
                    </div>

                    <div className="description">
                        <p className="primary-text">
                            A Front-End Developer and student passionate about creating 
                            intuitive, user-centered digital experiences.
                        </p>
                        <p className="secondary-text">
                            With expertise in Industrial Design and UX Design, I combine 
                            creativity with technical skills to build seamless, engaging 
                            interfaces. I thrive on improving daily life through thoughtful 
                            design and excel in collaborative, agile environments.
                        </p>
                    </div>

                    <div className="cta-container">
                        <a href="#contact" className="cta-button primary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            Contact Me
                        </a>
                        <a href="#projects" className="cta-button secondary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                            </svg>
                            View Projects
                        </a>
                    </div>
                </div>

                <div className="profile-container">
                    <div className="profile-image-wrapper">
                        <img src={profile} alt="Satish Awal" className="profile-image" />
                        <div className="image-decoration"></div>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                            className="social-link">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" 
                            className="social-link">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;