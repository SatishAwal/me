// src/Navbar.js
import React from 'react';
import '../styles/navbar.css';
import satish from '../assets/satish.png';
import resume from '../assets/Cv.pdf';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img 
                        src={satish} 
                        alt="Satish Awal"
                    />
                    <span className="logo-text">Satish Awal</span>
                </div>

                <div className="nav-links">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#experience" className="nav-link">Experience</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#contact" className="nav-link">Contact</a>
                    <a 
                        href={resume} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="nav-link resume-button"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
