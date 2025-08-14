import React, { useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: '⚡' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'design', name: 'Design', icon: '🎯' },
    { id: 'tools', name: 'Tools', icon: '🛠️' }
  ];

  const skills = [
    {
      name: 'React',
      category: 'frontend',
      icon: '⚛️',
      level: 'Advanced',
      description: 'Building interactive user interfaces with modern React patterns',
      color: '#61dafb'
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      icon: '🟨',
      level: 'Advanced',
      description: 'ES6+, modern JavaScript features and best practices',
      color: '#f7df1e'
    },
    {
      name: 'HTML5',
      category: 'frontend',
      icon: '🌐',
      level: 'Expert',
      description: 'Semantic HTML and accessibility best practices',
      color: '#e34f26'
    },
    {
      name: 'CSS3',
      category: 'frontend',
      icon: '🎨',
      level: 'Expert',
      description: 'Modern CSS, Flexbox, Grid, and animations',
      color: '#1572b6'
    },
    {
      name: 'Node.js',
      category: 'backend',
      icon: '🟢',
      level: 'Intermediate',
      description: 'Server-side JavaScript and API development',
      color: '#339933'
    },
    {
      name: 'Python',
      category: 'backend',
      icon: '🐍',
      level: 'Intermediate',
      description: 'Data processing and automation scripts',
      color: '#3776ab'
    },
    {
      name: 'UI/UX Design',
      category: 'design',
      icon: '🎯',
      level: 'Advanced',
      description: 'User-centered design principles and prototyping',
      color: '#ff6b6b'
    },
    {
      name: 'Figma',
      category: 'design',
      icon: '🎨',
      level: 'Advanced',
      description: 'Design systems and collaborative design',
      color: '#f24e1e'
    },
    {
      name: 'Git',
      category: 'tools',
      icon: '📚',
      level: 'Advanced',
      description: 'Version control and collaborative development',
      color: '#f05032'
    },
    {
      name: 'VS Code',
      category: 'tools',
      icon: '💻',
      level: 'Expert',
      description: 'Code editor and development environment',
      color: '#007acc'
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <div className="skill-icon" style={{ backgroundColor: skill.color }}>
                  {skill.icon}
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level">{skill.level}</span>
                </div>
              </div>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      backgroundColor: skill.color,
                      width: skill.level === 'Expert' ? '100%' : 
                             skill.level === 'Advanced' ? '85%' : '70%'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon">🚀</div>
            <div className="summary-content">
              <h3>Always Learning</h3>
              <p>I'm constantly expanding my skill set and staying updated with the latest technologies</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">💡</div>
            <div className="summary-content">
              <h3>Problem Solver</h3>
              <p>I approach challenges creatively and find efficient solutions using the right tools</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🤝</div>
            <div className="summary-content">
              <h3>Team Player</h3>
              <p>I love collaborating and sharing knowledge with other developers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
