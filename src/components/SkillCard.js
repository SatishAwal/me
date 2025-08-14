import React from 'react';
import '../styles/SkillCard.css';

const SkillCard = ({ title, icon, color, skills }) => {
    return (
        <div className="skill-card" style={{ '--accent-color': color }}>
            <div className="skill-header">
                <div className="skill-icon">
                    <i className={icon}></i>
                </div>
                <h3 className="skill-title">{title}</h3>
            </div>
            
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-progress">
                            <div 
                                className="progress-bar" 
                                style={{ 
                                    width: `${skill.level}%`,
                                    backgroundColor: color
                                }}
                            >
                                <div className="progress-glow"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;