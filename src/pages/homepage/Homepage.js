import './Homepage.css';
import greeting from '../../assets/Greeting-pic.png';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Allisha Nasir";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 100; 

    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(prev => prev + fullText.charAt(currentIndex));
        currentIndex++;
      }
    };

    const interval = setInterval(() => {
      typeWriter();
    }, typingSpeed);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev); 
    }, 500); 

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  const handleEmailRedirect = () => {
    window.location.href = 'mailto:al.alishanasir@gmail.com'; 
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home-section" className="landing-container">
      <div className="overlay"></div>
      <div className="landing-content">
        <div className="landing-text">
          <p className="hello-text">Hello 👋, I'm</p>
          <h1 className="greeting-text">
            {displayedText}
            <span className={`blinking-cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
          </h1>
          <h2 className="subheading-text">I'm an aspiring software developer, and currently an SDE intern at Bell. Explore my projects and journey in the tech world.</h2>
          <div className="homepage-buttons">
            <button className="view-work" onClick={() => handleScroll('portfolio-section')}>View My Work</button>
            <button className="contact-me" onClick={handleEmailRedirect}>Contact Me</button>
          </div>
        </div>
        <div className="landing-svg">
          <img src={greeting} alt="Waving hand" />
        </div>
      </div>
    </div>
  );
}
