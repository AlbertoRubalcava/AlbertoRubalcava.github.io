import React from 'react';
import './ContactMe.css'; 

const ContactMe = () => {
  return (
    <div className="contact-container" id='contact'>
      <h1 className="contact-header">Contact Me</h1>
      <p className="contact-description">Hello!  Please feel free to reach out to me!</p>

      <form className="contact-form" action="https://formspree.io/f/myzzlvzw" method="POST">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your contact email" required />
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>
      </div>

      <button type="submit">Send</button>
    </form>
    </div>
  );
};

export default ContactMe;