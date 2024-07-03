import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio-section" className="portfolio-container">
      <h1>Portfolio</h1>

      <div className="project-item">
        <div className="project-header">
          <h3>Project Title 1</h3>
          <a href="https://github.com/example/project1" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
        </div>
        <p className="project-description">A brief description of Project 1 goes here. This could include technologies used, key features, etc.</p>
      </div>

      <div className="project-item">
        <div className="project-header">
          <h3>Project Title 2</h3>
          <a href="https://github.com/example/project2" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
        </div>
        <p className="project-description">A brief description of Project 2 goes here. This could include technologies used, key features, etc.</p>
      </div>

      {/* Add more project items as needed */}
    </section>
  );
}

export default Portfolio;
