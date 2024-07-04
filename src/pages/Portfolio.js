import React from 'react';
import './Portfolio.css';
// import projectImage1 from '../assets/projectImage1.png'; // Example image imports
// import projectImage2 from '../assets/projectImage2.png';

const Portfolio = () => {
  return (
    <section id="portfolio-section" className="portfolio-container">
      <h1>Portfolio</h1>
      <div className="projects-grid">
        <div className="project-item">
          <div className="project-image">
            {/* <img src={projectImage1} alt="Project 1" /> */}
          </div>
          <div className="project-content">
            <h3>Project Title 1</h3>
            <p className="project-description">A brief description of Project 1 goes here. This could include technologies used, key features, etc.</p>
            <div className="tech-stack">
              <span className="tech-tag">HTML/CSS</span>
              <span className="tech-tag">JavaScript</span>
              {/* Add more tech tags as needed */}
            </div>
            <a href="https://github.com/example/project1" target="_blank" rel="noopener noreferrer" className="project-button">Visit Project</a>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            {/* <img src={projectImage2} alt="Project 2" /> */}
          </div>
          <div className="project-content">
            <h3>Project Title 2</h3>
            <p className="project-description">A brief description of Project 2 goes here. This could include technologies used, key features, etc.</p>
            <div className="tech-stack">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Node.js</span>
              {/* Add more tech tags as needed */}
            </div>
            <a href="https://github.com/example/project2" target="_blank" rel="noopener noreferrer" className="project-button">Visit Project</a>
          </div>
        </div>
        {/* Add more project items as needed */}
      </div>
    </section>
  );
}

export default Portfolio;
