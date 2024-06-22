import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar () { 
  return ( 
    <nav class = "navBar">
      <ul class = "navLinks">
      <li>  
          <Link to="about-section" spy={true} smooth={true} offset={50} duration={500}>About</Link>
      </li>
      <li> 
          <Link to="experience-section" spy={true} smooth={true} offset={50} duration={500}>Experience</Link>
        </li>
        <li> 
          <Link to="portfolio-section" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link>
      </li>      
      <li> 
        <Link to="contact-section" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
      </li>
      </ul>
    </nav>
  )
}