import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience-section" className="experience-container">
      <h1>Experience</h1>
      <div className="experience-item">
        <h3>Software Developer Intern</h3>
        <p className="experience-date">Summer 2023</p>
        <p className="experience-description">Worked on frontend development using React.js and backend APIs using Node.js and Express.</p>
      </div>
      <div className="experience-item">
        <h3>Freelance Web Developer</h3>
        <p className="experience-date">2021 - 2022</p>
        <p className="experience-description">Developed responsive websites for small businesses using HTML, CSS, and JavaScript.</p>
      </div>
      {/* Add more experience items as needed */}
    </section>
  );
}

export default Experience;
