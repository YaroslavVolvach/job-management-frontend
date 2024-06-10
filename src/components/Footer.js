import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <h3>
        Calgary 2024 |{' '}
        <a style={{ textDecoration: 'none', color: 'white' }} href="about-me">
          Yaroslav Volvach
        </a>
      </h3>
    </div>
  );
};

export default Footer;
