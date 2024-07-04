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
            <p className="experience-date">Summer 2023</p>
            <p className="experience-description">Worked on frontend development using React.js and backend APIs using Node.js and Express.</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>Freelance Web Developer</h3>
            <p className="experience-date">2021 - 2022</p>
            <p className="experience-description">Developed responsive websites for small businesses using HTML, CSS, and JavaScript.</p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Teaching Assistant</h3>
            <p className="experience-date">2020 - 2021</p>
            <p className="experience-description">Assisted in teaching introductory programming courses and helped students with their assignments and projects.</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>Volunteer Coordinator</h3>
            <p className="experience-date">2019 - 2020</p>
            <p className="experience-description">Organized and managed community service events, coordinating with volunteers and local organizations.</p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Intern</h3>
            <p className="experience-date">Summer 2018</p>
            <p className="experience-description">Shadowed professionals in the tech industry, gaining insight into various roles and responsibilities.</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>High School Student</h3>
            <p className="experience-date">2014 - 2018</p>
            <p className="experience-description">Participated in coding clubs, science fairs, and other extracurricular activities related to technology and science.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
