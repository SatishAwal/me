import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "A full-stack e-commerce platform with user authentication, product management, cart functionality, and payment integration using Stripe.",
      image: "https://via.placeholder.com/600x400/667eea/ffffff?text=E-Commerce",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/username/ecommerce",
      demo: "https://demo-ecommerce.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      category: "web",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://via.placeholder.com/600x400/f093fb/ffffff?text=Task+Manager",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      github: "https://github.com/username/task-manager",
      demo: "https://demo-task-manager.com",
      featured: false
    },
    {
      id: 3,
      title: "AI Image Generator",
      category: "web",
      description: "An AI-powered image generation tool that creates unique artwork based on text descriptions using machine learning models.",
      image: "https://via.placeholder.com/600x400/4facfe/ffffff?text=AI+Generator",
      technologies: ["Python", "TensorFlow", "React", "Flask"],
      github: "https://github.com/username/ai-image-gen",
      demo: "https://demo-ai-image.com",
      featured: true
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      category: "mobile",
      description: "A comprehensive fitness tracking app with workout plans, progress tracking, and social features for motivation.",
      image: "https://via.placeholder.com/600x400/ff6b6b/ffffff?text=Fitness+App",
      technologies: ["React Native", "Firebase", "Redux", "Native Base"],
      github: "https://github.com/username/fitness-app",
      demo: "https://demo-fitness-app.com",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website Design",
      category: "design",
      description: "A modern portfolio website design system with reusable components and responsive layouts.",
      image: "https://via.placeholder.com/600x400/4ecdc4/ffffff?text=Portfolio+Design",
      technologies: ["Figma", "Adobe XD", "Prototyping", "Design System"],
      github: null,
      demo: "https://figma.com/portfolio-design",
      featured: false
    },
    {
      id: 6,
      title: "Weather Dashboard",
      category: "web",
      description: "A beautiful weather dashboard with real-time data, forecasts, and interactive charts using weather APIs.",
      image: "https://via.placeholder.com/600x400/45b7d1/ffffff?text=Weather+App",
      technologies: ["React", "Chart.js", "Weather API", "CSS Grid"],
      github: "https://github.com/username/weather-dashboard",
      demo: "https://demo-weather.com",
      featured: false
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
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                      Live Demo
                    </a>
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
