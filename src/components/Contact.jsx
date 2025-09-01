import React from 'react';
import './Contact.css';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:info@chutiresort.com">info@chutiresort.com</a></p>
          <p>Phone: <a href="tel:+880123456789">+880 123 456 789</a></p>
          <p>Address: 123 Resort Road, Gazipur, Bangladesh</p>
        </div>
        <div className="contact-social">
          <h2>Follow Us</h2>
          <div className="social-icons-contact">
            <a href="https://www.facebook.com/chutiresort" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon facebook-contact" />
            </a>
            <a href="https://www.linkedin.com/company/chuti-resort-coxs-bazar/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon linkedin-contact" />
            </a>
            <a href="https://www.instagram.com/chutiresortgazipur/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon instagram-contact" />
            </a>
            <a href="https://www.youtube.com/watch?v=9CFPdWbp-qU" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon youtube-contact" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
