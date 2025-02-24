import React from 'react';
import './About.css';
import python from '../../assets/python-5.svg';
import java from '../../assets/java-14.svg';
import js from '../../assets/logo-javascript.svg';
import ts from '../../assets/typescript.svg';
import react from '../../assets/react-2.svg';
import git from '../../assets/git.svg';
import figma from '../../assets/figma-icon.svg';
import sql from '../../assets/mysql-3.svg';
import mongo from '../../assets/mongodb-icon-1.svg';

const About = () => {

  return (
    <section id="about-section" className="about-container">
      <div className="about-content">
        <div className="about-card">
          <h2>Who am I?</h2>
          <p>
            Hi, I’m Alisha and I’m a lifelong learner! Enthralled by my very first Python class, I found my love for problem solving. The eagerness to begin, to take on a challenge that boasts itself; it’s what drives me. I want to create and being a software developer is fundamentally about creation.
          </p>

          <p>
            Naturally, I have found myself in various pursuits to support my goals, including my current internship at Bell as a software developer, participation in 'While She is True'—an organization fostering girls' interest in computer science—and my previous role as a software developer and business strategist at 'Techstart', a university club. I am naturally determined and eager to learn and grow.
          </p>
        </div>
        
        <div className="about-card">
          <h2>Tech Stack</h2>
          <div className="skill-icons">
            <div className="tech-flair">
              <img src={python} alt="Python Icon" />
              <span>Python</span>
            </div>
            <div className="tech-flair">
              <img src={java} alt="Java Icon" />
              <span>Java</span>
            </div>
            <div className="tech-flair">
              <img src={js} alt="JavaScript Icon" />
              <span>JavaScript</span>
            </div>
            <div className="tech-flair">
              <img src={ts} alt="TypeScript Icon" />
              <span>TypeScript</span>
            </div>
            <div className="tech-flair">
              <img src={react} alt="React Icon" />
              <span>React</span>
            </div>
            <div className="tech-flair">
              <img src={mongo} alt="MongoDB Icon" />
              <span>MongoDB</span>
            </div>
            <div className="tech-flair">
              <img src={sql} alt="SQL Icon" />
              <span>SQL</span>
            </div>
            <div className="tech-flair">
              <img src={git} alt="Git Icon" />
              <span>Git</span>
            </div>
            <div className="tech-flair">
              <img src={figma} alt="Figma Icon" />
              <span>Figma</span>
            </div>
          </div>
        </div>

        <div className="about-card">
          <h2>Hobbies</h2>
          <div className="hobby-icons">
            <div className="hobby">
              📚 <span className="hobby-title">Reading</span>
            </div>
            <div className="hobby">
              ✈️ <span className="hobby-title">Travel</span>
            </div>
            <div className="hobby">
              📷 <span className="hobby-title">Photography</span>
            </div>
            <div className="hobby">
              🎵 <span className="hobby-title">Music</span>
            </div>
            <div className="hobby">
              🍳 <span className="hobby-title">Cooking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
