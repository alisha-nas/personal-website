import './navbar.css';
import { Link } from 'react-scroll';
import linkedin from '../assets/linkedIn-icon.svg';
import github from '../assets/github-icon.svg';

const Navbar = () => {
  const text = "<Alisha Nasir/>";

  return (
    <nav className="navbar">
      <div className="left-section">
        <Link to="home-section" spy={true} smooth={true} offset={-50} duration={500}>{text}</Link>
      </div>
      <ul className="navLinks">
        <li>
          <Link to="about-section" spy={true} smooth={true} offset={-50} duration={500}>About</Link>
        </li>
        <li>
          <Link to="experience-section" spy={true} smooth={true} offset={-50} duration={500}>Experience</Link>
        </li>
        <li>
          <Link to="portfolio-section" spy={true} smooth={true} offset={-50} duration={500}>Portfolio</Link>
        </li>
        <li>
          <Link to="contact-section" spy={true} smooth={true} offset={-50} duration={500}>Contact</Link>
        </li>
      </ul>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/alisha-nasir/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/alisha-nas" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
