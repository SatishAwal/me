import React from 'react';
import '../styles/About.css';

const About = () => {
  const skills = [
    { name: "React", level: 90, color: "#61dafb" },
    { name: "JavaScript", level: 85, color: "#f7df1e" },
    { name: "HTML/CSS", level: 90, color: "#e34f26" },
    { name: "Node.js", level: 75, color: "#339933" },
    { name: "UI/UX Design", level: 80, color: "#ff6b6b" },
    { name: "Python", level: 70, color: "#3776ab" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better and understand what drives my passion for development
          </p>
        </div>

        <div className="about-content">
          <div className="about-text fade-in-left">
            <div className="about-card">
              <h3>Who I Am</h3>
              <p>
                I'm Satish Awal, a passionate Frontend Developer and UI/UX Designer based in Nepal. 
                I love creating digital experiences that are not only beautiful but also functional 
                and user-centered.
              </p>
              <p>
                With a background in Industrial Design and UX Design, I bring a unique perspective 
                to web development. I believe that great design is invisible - it just works, 
                and users don't even notice it's there.
              </p>
            </div>

            <div className="about-card">
              <h3>My Approach</h3>
              <p>
                I approach every project with a user-first mindset. I start by understanding 
                the problem, then design the solution, and finally implement it with clean, 
                maintainable code.
              </p>
              <p>
                I'm always learning and staying up-to-date with the latest technologies and 
                design trends to deliver the best possible solutions.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-icon">🎯</div>
                <div className="stat-content">
                  <h4>Problem Solver</h4>
                  <p>I love tackling complex challenges and finding elegant solutions</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🚀</div>
                <div className="stat-content">
                  <h4>Fast Learner</h4>
                  <p>Quick to adapt to new technologies and frameworks</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🤝</div>
                <div className="stat-content">
                  <h4>Team Player</h4>
                  <p>Great at collaborating and communicating with team members</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-skills fade-in-right">
            <h3>Technical Skills</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: `${skill.level}%`, 
                        backgroundColor: skill.color 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="education-section">
              <h4>Education</h4>
              <div className="education-item">
                <div className="education-icon">🎓</div>
                <div className="education-content">
                  <h5>Business Analytics</h5>
                  <p>Cambrian College • 2024 - 2025</p>
                </div>
              </div><div className="education-item">
                <div className="education-icon">🎓</div>
                <div className="education-content">
                  <h5>Mobile Application Development</h5>
                  <p>Cambrian College • 2024 - 2025</p>
                </div>
              </div>
              <div className="education-item">
                <div className="education-icon">🎓</div>
                <div className="education-content">
                  <h5>Bachelor in Computer Science</h5>
                  <p>Tribhuvan University • 2013 - 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
