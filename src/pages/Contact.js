import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the message via email or store it in a database
    alert(`Message sent: ${formData.message}`);
    setFormData({ name: '', contact: '', message: '' });
  };

  return (
    <section id="contact-section" className="contact-container">
      <h1>Contact</h1>
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="contact-input"
            required
          />
          <label htmlFor="contact" className="form-label">Email/Phone Number</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            placeholder="Email/Phone Number"
            className="contact-input"
            required
          />
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            className="message-input"
            required
          />
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> example@example.com</p>
          <p><strong>Location:</strong> Your Location</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
