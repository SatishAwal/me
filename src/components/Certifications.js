import React from 'react';
import '../styles/Certifications.css';

const certifications = [
    {
        id: 1,
        title: "Machine Learning",
        provider: "Coursera",
        date: "Mar 2018 - Jun 2019",
        icon: "fas fa-brain"
    },
    {
        id: 2,
        title: "Mobile Application Development",
        provider: "Cambrian College",
        date: "Jan 2024",
        icon: "fas fa-mobile-alt"
    }
];

const CertificationCard = ({ title, provider, date, icon }) => (
    <div className="certification-card">
        <div className="certification-icon">
            <i className={icon}></i>
        </div>
        <div className="certification-content">
            <h4>{title}</h4>
            <div className="certification-details">
                <span className="provider">{provider}</span>
                <span className="date">{date}</span>
            </div>
        </div>
    </div>
);

const Certifications = () => {
    return (
        <section className="education-certifications">
            <h3 className="section-title">Certifications</h3>
            <div className="certifications-grid">
                {certifications.map(cert => (
                    <CertificationCard
                        key={cert.id}
                        title={cert.title}
                        provider={cert.provider}
                        date={cert.date}
                        icon={cert.icon}
                    />
                ))}
            </div>
        </section>
    );
};

export default Certifications;