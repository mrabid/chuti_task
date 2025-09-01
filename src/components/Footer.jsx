import React from 'react';
import './Footer.css';

const Footer = ({ scrolled }) => {
  return (
    <footer className={`footer ${scrolled ? 'compact-footer' : ''}`}>
      <div className="footer-content">
        <div className="footer-logo">
          <a href="https://chutiresort.com/" target="_blank" rel="noopener noreferrer"><img src="/images/chuti logo.jpg" alt="Chuti Resort Logo" className="chuti-logo-footer" /></a>
        </div>
        
        <div className="footer-copyright">
          <p>© 2025 Chuti Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
