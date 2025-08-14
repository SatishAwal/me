import React from 'react';
import SkillCard from './SkillCard.js';
import '../styles/SkillList.css';

const SkillList = () => {
    const skillsData = [
        {
            id: 1,
            title: 'Languages',
            icon: 'fas fa-code',
            color: '#4834d4',
            skills: [
                { name: 'C#', level: 90 },
                { name: 'Java', level: 85 },
                { name: 'Swift', level: 80 },
                { name: 'JavaScript', level: 95 },
                { name: 'Python', level: 85 }
            ]
        },
        {
            id: 2,
            title: 'Frameworks',
            icon: 'fas fa-layer-group',
            color: '#2ecc71',
            skills: [
                { name: '.NET MAUI', level: 85 },
                { name: 'React Native', level: 90 },
                { name: 'AngularJS', level: 80 },
                { name: 'Firebase', level: 85 },
                { name: 'Node.js', level: 90 }
            ]
        },
        {
            id: 3,
            title: 'Tools',
            icon: 'fas fa-tools',
            color: '#e17055',
            skills: [
                { name: 'GitHub', level: 95 },
                { name: 'Figma', level: 85 },
                { name: 'Azure DevOps', level: 80 },
                { name: 'Visual Studio', level: 90 },
                { name: 'Android Studio', level: 85 }
            ]
        }
    ];

    return (
        <section className="skills-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-container">
                {skillsData.map((category) => (
                    <SkillCard 
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        color={category.color}
                        skills={category.skills}
                    />
                ))}
            </div>
        </section>
    );
};

export default SkillList;
