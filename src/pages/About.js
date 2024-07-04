import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about-section" className="about-container">
      <div className="about-content">
        <div className="about-card">
          <h2>Who I am</h2>
          <p>Hello! I'm Alisha, an aspiring software developer passionate about creating innovative solutions. I love exploring new technologies and applying them to solve real-world problems.</p>
        </div>
        <div className="about-card">
          <h2>Technologies I've used</h2>
          <div className="skill-icons">
            {/* Add your technology icons here */}
          </div>
        </div>
        <div className="about-card">
          <h2>Hobbies</h2>
          <div className="hobby-icons">
            {/* Add your hobby icons here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
