import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about-section" className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>A little bit about me</h1>
          <p>Hello! I'm Alisha, an aspiring software developer passionate about creating innovative solutions. I love exploring new technologies and applying them to solve real-world problems.</p>
        </div>
        <div className="skills-graphic">
          <div className="skill">
            <div className="skill-name">HTML/CSS</div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">JavaScript</div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">React.js</div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '90%' }}></div>
            </div>
          </div>
          {/* Add more skills with similar structure */}
        </div>
      </div>
    </section>
  );
}

export default About;
