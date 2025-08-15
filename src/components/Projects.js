import React, { useState } from 'react';
import '../styles/Projects.css';
import localBusinessExplorer from '../assets/localbusinessexplorer.png';
import localBusiness from '../assets/localbusiness.jpeg';
import travelBuddy from '../assets/travelbuddy.jpg';
import eGrocery from '../assets/egrocery.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' }
  ];

  const projects = [
    {
      id: 1,
      title: "Local Business Explorer",
      category: "mobile",
      description: "Built a cross-platform app to explore nearby businesses and local events. Integrated interactive map for live location tracking and business markers. Designed UI using Figma and implemented Firebase for real-time data and reviews. Worked collaboratively with a 3-person team using GitHub and Azure DevOps.",
      image: localBusinessExplorer,
      technologies: [".NET MAUI", "Firebase", "Azure DevOps", "Google Maps API", "Figma"],
      github: "https://github.com/sushanthapa52/LocalBusinessExplorer",
      featured: true
    },
    {
      id: 2,
      title: "E-Grocery",
      category: "mobile",
      description: "Developed a mobile shopping app with dynamic product listings using REST APIs. Implemented responsive and intuitive user interfaces, ensuring a seamless user experience. Integrated RESTful APIs to fetch and display dynamic data in the applications.",
      image: eGrocery,
      technologies: ["Java", "Firebase", "REST APIs"],
      github: "https://github.com/username/e-grocery",
      featured: false
    },
    {
      id: 3,
      title: "Eco-Fy",
      category: "mobile",
      description: "Fetched real-time weather data and enabled users to rate locations. Built in error handling and intuitive UX.",
      image: localBusinessExplorer,
      technologies: ["Java", "Weather API", "Firebase"],
      github: "https://github.com/sareek/Ecofy",
      featured: false
    },
    {
      id: 4,
      title: "Travel Buddy",
      category: "design",
      description: "An app for planning trips and adventures with friends.",
      image: travelBuddy,
      technologies: ["C#", "Google Map API", "Firebase"],
      github: "https://github.com/sushanthapa52/TravelBuddy",
      featured: false
    },
    {
      id: 5,
      title: "Local Business Explorer",
      category: "design",
      description: "Design UI for a cross-platform app to explore nearby businesses and local events using Figma.",
      image: localBusinessExplorer,
      technologies: [".NET MAUI", "Firebase", "Azure DevOps", "Google Maps API", "Figma"],
      github: "https://www.figma.com/design/F2im7TAefqt2iUCJ7AYXNQ/Untitled?node-id=0-1&p=f&t=7PLu9y2VDjHg7J4r-0",
      featured: true
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent works that showcase my skills and creativity
          </p>
        </div>

        <div className="projects-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && (
                <div className="featured-badge">
                  <span>⭐ Featured</span>
                </div>
              )}
              
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                        </svg>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-content">
            <h3>Have a project in mind?</h3>
            <p>Let's work together to bring your ideas to life!</p>
            <a href="#contact" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
