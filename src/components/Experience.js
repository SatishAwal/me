import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Pek Academy",
      period: "2019 - 2023",
      location: "Kathmandu, Nepal",
      description: "Developing responsive web applications using React, TypeScript, and modern CSS. Collaborating with design and backend teams to implement user interfaces and ensure optimal user experience.",
      technologies: ["React", "TypeScript", "CSS3", "Git", "Agile"],
      type: "work"
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "Novelty Technology",
      period: "2017 - 2018",
      location: "Kathmandu, Nepal",
      description: "Created user interface designs and prototypes using Figma. Conducted user research and usability testing to improve product design and user experience.",
      technologies: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
      type: "work"
    },
    {
      id: 3,
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2017 - Present",
      location: "Remote",
      description: "Building custom websites and web applications for clients. Managing projects from concept to deployment, ensuring client satisfaction and project success.",
      technologies: ["React","AngularJs" ,"Node.js", "MongoDB", "WordPress", "Client Management"],
      type: "work"
    },
    {
      id: 4,
      title: "Bachelor in Computer Engineering",
      company: "Tribhuvan University",
      period: "2013 - 2017",
      location: "Pokhara, Nepal",
      description: "Studying computer science with focus on software engineering, web development, and user interface design. Maintaining excellent academic performance.",
      technologies: ["Computer Science", "Software Engineering", "Web Development", "UI/UX Design"],
      type: "education"
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      company: "Code Academy",
      period: "2021",
      location: "Online",
      description: "Intensive 6-month bootcamp covering full-stack web development. Learned modern web technologies and best practices through hands-on projects.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"],
      type: "education"
    },
    {
      id: 6,
      title: "Machine Learning Coursera",
      company: "Coursera",
      period: "2019",
      location: "Online",
      description: "Intensive 6-month online course covering machine learning and deep learning. Learned supervised and unsupervised learning and best practices through hands-on projects.",
      technologies: ["Python", "Octave", "Matlab", "Jupyter Notebook"],
      type: "education"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and educational background that shaped my career
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`timeline-item ${experience.type} ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div className="marker-icon">
                  {experience.type === 'work' ? '💼' : '🎓'}
                </div>
              </div>
              
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-title">{experience.title}</h3>
                  <div className="experience-meta">
                    <span className="company">{experience.company}</span>
                    <span className="period">{experience.period}</span>
                  </div>
                  <div className="experience-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {experience.location}
                  </div>
                </div>
                
                <p className="experience-description">{experience.description}</p>
                
                <div className="experience-technologies">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="experience-summary">
          <div className="summary-grid">
            <div className="summary-item">
              <div className="summary-icon">🎯</div>
              <h4>Career Focus</h4>
              <p>Frontend development and UI/UX design with a passion for creating user-centered digital experiences</p>
            </div>
            <div className="summary-item">
              <div className="summary-icon">🚀</div>
              <h4>Growth Mindset</h4>
              <p>Continuously learning new technologies and improving skills through practical projects and real-world experience</p>
            </div>
            <div className="summary-item">
              <div className="summary-icon">🤝</div>
              <h4>Collaboration</h4>
              <p>Experience working in teams, managing client relationships, and delivering projects on time and within scope</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
