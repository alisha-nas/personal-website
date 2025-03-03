import React from 'react';
import './About.css';
import Lottie from 'react-lottie';
import typingAnimation from '../../assets/typing-animation.json';
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
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: typingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section id="about-section" className="about-container">
      <div className="about-content">
        <div className="about-cards-container">
          <div className="about-card">
            <h2>Who am I?</h2>
            <p>
              About
            </p>
            <p>
              About
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
        <div className="animation-container">
          <Lottie options={defaultOptions} height={250} width={250} />
        </div>
      </div>
    </section>
  );
}

export default About;
