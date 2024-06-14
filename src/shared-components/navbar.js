import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './navbar.css'

export default function Navbar () { 
  return ( 
    <nav class = "navBar">
      <ul class = "navLinks">
      <li> 
        <Link activeClass="active" smooth spy to="about">
                  About Me
          </Link>
      </li>
      <li> 
        <Link activeClass="active" smooth spy to="experience">
                  Experience
          </Link>
        </li>
        <li> 
        <Link activeClass="active" smooth spy to="portfolio">
                  Portfolio
          </Link>
      </li>      
      <li> 
        <Link activeClass="active" smooth spy to="contact">
                  Contact
          </Link>
      </li>
      </ul>
    </nav>
  )
}