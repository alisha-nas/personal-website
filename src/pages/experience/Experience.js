import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience-section" className="experience-container">
      <h1>Experience</h1>
      <div className="timeline">
      <div className="timeline-item right">
          <div className="timeline-content">
            <h3>Incoming Software Developer Intern</h3>
            <p className="experience-date">06/25 - 08/25</p>
            <p className="experience-description">HubSpot</p>
          </div>
        </div>
      <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Software Developer Intern</h3>
            <p className="experience-date">01/24 - 04/24</p>
            <p className="experience-description">RBC</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>Software Developer Intern</h3>
            <p className="experience-date">05/24 - 08/24</p>
            <p className="experience-description">Bell</p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Code Sensei</h3>
            <p className="experience-date">01/24 - 04/24</p>
            <p className="experience-description">Code Ninjas</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>Bachelor of Science in Computer Science</h3>
            <p className="experience-date">Expected Graduation: May 2026</p>
            <p className="experience-description">University of Calgary</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
