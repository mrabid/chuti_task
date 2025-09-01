import React from 'react';
import './Header.css';

const Header = ({ scrolled }) => {
  return (
    <header className={`header ${scrolled ? 'shrink' : ''}`}>
      <div className="logo">
        <a href="https://chutiresort.com/" target="_blank" rel="noopener noreferrer"><img src="/images/chuti logo.jpg" alt="Chuti Resort Logo" className="chuti-logo" /></a>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#user-complain">User Complain</a></li>
          <li><a href="#features-information">Features Information</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
