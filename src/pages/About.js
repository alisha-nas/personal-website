import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about-section" className="about-container">
      <h1>About Me</h1>
      <p>Hello! I'm Alisha, an aspiring software developer passionate about creating innovative solutions. I love exploring new technologies and applying them to solve real-world problems.</p>
      <p>I have experience with:</p>
      <ul className="skills-list">
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
}

export default About;
