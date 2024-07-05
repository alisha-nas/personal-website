import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact-section" className="contact-container">
      <h1>Contact</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> example@example.com</p>
          <p><strong>Location:</strong> Your Location</p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            {/* Add more social media links as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
