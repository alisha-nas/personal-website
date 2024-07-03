import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the message via email or store it in a database
    alert(`Message sent: ${message}`);
    setMessage('');
  };

  return (
    <section id="contact-section" className="contact-container">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <textarea
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          className="message-input"
          required
        />
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
