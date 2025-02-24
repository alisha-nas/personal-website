import React from 'react';
import './Portfolio.css';
import lifeline from '../../assets/Lifeline.png'; 
import copilot from '../../assets/copilot.png';
import giveback from '../../assets/Giveback.png';
import checkout from '../../assets/checkout.png';

const Portfolio = () => {
  return (
    <section id="portfolio-section" className="portfolio-container">
      <h1>Portfolio</h1>
      <div className="projects-grid">
        <div className="project-item">
          <div className="project-image">
            <img src={lifeline} alt="Project 1" />
          </div>
          <div className="project-content">
            <h3>Lifeline</h3>
            <p className="project-description">Lifeline takes the stress out of managing important deadlines for your courses. In just a few clicks, compile your deadlines from your course outlines 📄, into calendar reminders ⏰ and a spreadsheet to-do list 📈.</p>
            <div className="tech-stack">
              <span className="tech-tag">Typescript</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Javascript</span>
              <span className="tech-tag">HTML/CSS</span>
              <span className="tech-tag">Figma</span>
            </div>
            <a href="https://github.com/techstartucalgary/lifeline" target="_blank" rel="noopener noreferrer" className="project-button">Visit Project</a>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src={copilot} alt="Project 2" />
          </div>
          <div className="project-content">
            <h3>Flight Copilot</h3>
            <p className="project-description">CoPilot streamlines group flight booking and planning by enabling real-time collaboration. Users create, edit, and manage trip plans together, ensuring seamless coordination and comfort for family and friends.</p>
            <div className="tech-stack">
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">ExpressJS</span>
              <span className="tech-tag">ReactJS</span>
            </div>
            <a href="https://github.com/mairakhan419/571Project" target="_blank" rel="noopener noreferrer" className="project-button">Visit Project</a>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src={giveback} alt="Project 1" />
          </div>
          <div className="project-content">
            <h3>Giveback Gateways</h3>
            <p className="project-description">Giveback Gateways is a full-stack application aimed at connecting volunteers and organizations. Inspired by social media platforms, it features forums, user profiles with key information, and organization follow capabilities to streamline communication and centralize opportunities.</p>
            <div className="tech-stack">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">ReactJS</span>
              <span className="tech-tag">Typescript</span>
              <span className="tech-tag">MySQL</span>
              {/* Add more tech tags as needed */}
            </div>
            <a href="https://github.com/ColtG5/Giveback-Gateways" target="_blank" rel="noopener noreferrer" className="project-button">Visit Project</a>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src={checkout} alt="Project 1" />
          </div>
          <div className="project-content">
            <h3>Self Checkout Machine</h3>
            <p className="project-description">In three iterations, I collaborated with a team of up to 20 members to develop a Java-based self-checkout machine tailored to client specifications.</p>
            <div className="tech-stack">
              <span className="tech-tag">Java</span>
              <span className="tech-tag">JUnit</span>
              <span className="tech-tag">Git</span>
            </div>
            <a href="https://github.com/Amasil/SENG-300" target="_blank" rel="noopener noreferrer" className="project-button">Visit Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
