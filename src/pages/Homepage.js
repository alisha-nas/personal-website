import './Homepage.css';
import greeting from '../assets/Greeting-pic.png';
import { useEffect, useState, useRef } from 'react';

export default function HomePage() { 
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hi, I'm Alisha";
  const timeoutRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 150;

    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(currentIndex));
        currentIndex++;
        timeoutRef.current = setTimeout(typeWriter, typingSpeed);
      }
    };

    typeWriter();

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div id="home-section"  className='landing-container'>
      <div className='landing-text'>
        <h1 className='greeting-text'>{displayedText}</h1>
        <h2 className='subheading-text'>I'm an aspiring Software Developer. I am currently interning at Bell and am incoming at Symend.</h2>
      </div>
      <div className='landing-svg'>
        <img src={greeting} alt="Waving hand" />
      </div>
    </div>
  );
}
