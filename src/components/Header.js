import React from 'react';
import profile from '../assets/self.png'

const Header = () => {
    return (
        <header className="header" id="home">
            <div className="intro">
                <h1>
                    <span>Hi there! 👋</span>
                    <br />
                    <span>I'm Satish</span>
                </h1>
                <p>
                    I'm a <strong>Front-End Developer</strong> and <strong>Mobile Application Development student</strong> with a solid foundation in creating intuitive, user-centered digital experiences.
                </p>
                <p>
                    With a background in <strong>Industrial Design and UX Design</strong>, I bring a unique blend of creativity and technical expertise to crafting seamless, engaging interfaces. I'm passionate about improving daily life through thoughtful design, and my ability to collaborate effectively in agile environments allows me to contribute to diverse teams and projects.
                </p>
                <p>
                    Currently focused on honing my skills in mobile app development, I'm excited to innovate and create impactful digital solutions for the next generation of products.
                </p>
                <a href="#contact" className="btn primary-btn">Let's Connect</a>
            </div>

            <div className="profile-image">
                <img src={profile} alt="Satish - Front-End & Mobile App Developer" />
            </div>
        </header>

    )
}

export default Header;
