import React from 'react';

import './App.css';
import Navbar from './components/Navbar.js';
import Introduction from './components/Introduction.js';
import RecentProjects from './components/RecentProjects.js';
import SkillList from './components/SkillList';
import Footer from './components/Footer';
import Contact from './components/Contact';
import WorkHistory from './components/WorkHistory.js';
import Certifications from './components/Certifications.js';

function App() {
  return (
    <div className="container">
      <Navbar />

      <Introduction />

      <RecentProjects />

      <WorkHistory />

      <SkillList />

      <Certifications />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
