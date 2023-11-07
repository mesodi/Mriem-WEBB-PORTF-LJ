import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      &copy; Mariem {currentYear}
    </footer>
  );
}

export default Footer;
