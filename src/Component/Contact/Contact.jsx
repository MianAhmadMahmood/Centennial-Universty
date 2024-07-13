import React from 'react';
import './Contact.css';
import message from '../../assets/message.png';
import mail from '../../assets/mail.png';
import call from '../../assets/call.png';
import location from '../../assets/location.png'; // Fixed typo from 'loction' to 'location'
import white from '../../assets/white.png';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={message} alt="Message icon" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
        </p>
        <ul>
          <li>
            <img src={mail} alt="Mail icon" /> Contact@CentennialUniversity@gmail.com {/* Fixed email format */}
          </li>
          <li>
            <img src={call} alt="Call icon" /> +1 153-426-7790
          </li>
          <li>
            <img src={location} alt="Location icon" /> 77 Massachusetts Ave, Cambridge MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" required />
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder="Write your message here" required></textarea>
          <button type="submit" className="btn">
            Submit now <img src={white} alt="Submit icon" />
          </button>
        </form>
        <span></span>
      </div>
    </div>
  );
};

export default Contact;
