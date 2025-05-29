// WorkHistory.js
import React from 'react';
import '../styles/WorkHistory.css';

const WorkHistory = () => {
    const experiences = [
        {
            title: "Junior Software Developer",
            company: "Novelty",
            period: "Oct 2020 - Aug 2022",
            responsibilities: [
                "Collaborated with senior developers to build and enhance user interfaces for web applications using AngularJs framework.",
                "Assisted in implementing responsive design and optimizing UI components for better performance.",
                "Contributed to code reviews, addressing feedback and ensuring adherence to coding standards.",
                "Participated in team meetings, discussing project progress and brainstorming solutions."
            ]
        },
        {
            title: "Intern FrontEnd Developer",
            company: "Novelty",
            period: "July 2018 - Sep 2018",
            responsibilities: [
                "Collaborated with senior developers to build and enhance user interfaces for web applications using AngularJs framework.",
                "Assisted in implementing responsive design and optimizing UI components for better performance.",
                "Contributed to code reviews, addressing feedback and ensuring adherence to coding standards.",
                "Participated in team meetings, discussing project progress and brainstorming solutions."
            ]
        }
    ];

    return (
        <section className="work-history">
            <h2 className="section-title">Working History</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="experience-card">
                            <div className="experience-header">
                                <h3 className="role">{exp.title}</h3>
                                <div className="company-info">
                                    <span className="company">{exp.company}</span>
                                    <span className="period">{exp.period}</span>
                                </div>
                            </div>
                            <ul className="responsibilities">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkHistory;