import React from 'react';

import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import ProjectList from './components/ProjectList';
import SkillList from './components/SkillList';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    
    <div className="container">

      <Navbar />

      {/* Header Section */}
      <Header />

      {/* Recent Projects */}
      <div id="projects">
        <h3>Recent Projects</h3>
        <ProjectList />
      </div>


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
      
      <Footer />
    </div>
  );
}


export default App;
