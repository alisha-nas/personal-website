import './Homepage.css';
import greeting from '../assets/Greeting-pic.png';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Allisha Nasir";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 100; // Adjust typing speed in milliseconds for smoother effect

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
      setShowCursor(prev => !prev); // Toggle cursor visibility
    }, 500); // Adjust blinking speed in milliseconds

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

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
          <h2 className="subheading-text">I'm an aspiring Software Developer. I am currently interning at Bell and am incoming at Symend.</h2>
          <div className="availability">
            <label className="switch">
              <input type="checkbox" checked={true}/>
              <span className="slider"></span>
            </label>
            <span className="availability-text">Available for hire</span>
          </div>
        </div>
        <div className="landing-svg">
          <img src={greeting} alt="Waving hand" />
        </div>
      </div>
    </div>
  );
}
