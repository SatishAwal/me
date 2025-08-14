import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading Portfolio...</p>
      </div>
    );
  }

<<<<<<< HEAD

      {/* Working History Section */}
      <section className="work-history">
        <h3>Working History</h3>
        <div className="work-cards">

          <div className="work-card">
            <h4>Junior Software Developer</h4>
            <p>Novelty | Oct 2020 - Aug 2022</p>
            <p>Collaborated with senior developers to build and enhance user interfaces for web applications using AngularJs framework.
            </p>
            <p>Assisted in implementing responsive design and optimizing UI components for better performance.
            </p>
            <p>Contributed to code reviews, addressing feedback and ensuring adherence to coding standards.
            </p>
            <p>Participated in team meetings,discussing project progress and brainstorming solutions.
            </p>
          </div>
          <div className="work-card">
            <h4>Intern FrontEnd Developer</h4>
            <p>Novelty | July 2018 - Sep 2018</p>
            <p>Collaborated with senior developers to build and enhance user interfaces for web applications using AngularJs framework.
            </p>
            <p>Assisted in implementing responsive design and optimizing UI components for better performance.
            </p>
            <p>Contributed to code reviews, addressing feedback and ensuring adherence to coding standards.
            </p>
            <p>Participated in team meetings,discussing project progress and brainstorming solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <header>
        <h1>My Skills</h1>
      </header>
      <SkillList />


      {/* Education & Certifications Section */}
      <section className="education-certifications">
        <h3>Certifications</h3>
        <div className="certification-card">
          <h4>Machine Learning</h4>
          <p>Coursera | Mar 2018 - Jun 2019</p>
        </div>

        <div className="certification-card">
          <h4>Mobile Application Development</h4>
          <p>Cambrian College | Jan 2024</p>
        </div>
        
        <div className="certification-card">
          <h4>Business Analytics</h4>
          <p>Cambrian College | Jan 2025</p>
        </div>
        
      </section>

      <Contact />
      
=======
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
>>>>>>> edit
      <Footer />
    </div>
  );
}

export default App;
