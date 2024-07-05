import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience-section" className="experience-container">
      <h1>Experience</h1>
      <div className="timeline">
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Software Developer Intern</h3>
            <p className="experience-date">Bell</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>Programming Instructor</h3>
            <p className="experience-date">While She is True</p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Code Sensei</h3>
            <p className="experience-date">Code Ninjas</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>Bachelor of Science in Computer Science</h3>
            <p className="experience-date">University of Calgary</p>
            <p className="experience-description">Expected Graduation: May 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
