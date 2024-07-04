import React from 'react';
import './About.css';
// import htmlLogo from '../assets/html-logo.png'; // Example logo imports
// import cssLogo from '../assets/css-logo.png';
// import jsLogo from '../assets/js-logo.png';
// import reactLogo from '../assets/react-logo.png';
// import hobbyIcon1 from '../assets/hobby-icon1.png'; // Example hobby icons
// import hobbyIcon2 from '../assets/hobby-icon2.png';
// import hobbyIcon3 from '../assets/hobby-icon3.png';

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
            {/* <img src={htmlLogo} alt="HTML Logo" />
            <img src={cssLogo} alt="CSS Logo" />
            <img src={jsLogo} alt="JavaScript Logo" />
            <img src={reactLogo} alt="React Logo" />
            Add more logos as needed */}
          </div>
        </div>
        <div className="about-card">
          <h2>Hobbies</h2>
          <div className="hobby-icons">
            {/* <img src={hobbyIcon1} alt="Hobby Icon 1" />
            <img src={hobbyIcon2} alt="Hobby Icon 2" />
            <img src={hobbyIcon3} alt="Hobby Icon 3" />
            Add more hobby icons as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
