import React from 'react';
import './index.css'; 

const Footer = (props) => {
    const { change } = props;

  return (
    <footer className={change ? 'footer dark-mode' : 'footer light-mode'}>
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We are a team of passionate individuals dedicated to making fashion a better experience for everyone.</p>
        </div>
        <div className='section-con'>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@clothing.com</p>
          <p>Phone: (044) 2456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className={change ? 'social-links dark-mode' : 'social-links light-mode'} >
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
       </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
