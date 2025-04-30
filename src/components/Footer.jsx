import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-text">
        <p>© {new Date().getFullYear()} Trackify. Built with 💙 by Om.</p>
        <p>Empowering students with smart, data-driven insights.</p>
      </div>
    </footer>
  );
};

export default Footer;
