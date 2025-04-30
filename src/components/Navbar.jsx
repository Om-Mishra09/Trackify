import React, { useEffect, useState } from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [passedHome, setPassedHome] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      setPassedHome(scrollY > window.innerHeight - 100); // After video ends
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <nav className={`glass-navbar ${scrolled ? 'blurred' : ''} ${passedHome ? 'solid' : ''}`}>

      <div className="logo">
        <Link to="/">Trackify</Link>
      </div>

      <ul className="nav-center">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/analysis">Analysis</Link></li>
        <li><Link to="/addData">Add Data</Link></li>
      </ul>

      <ul className="nav-right">
        <li><a href="#features" onClick={(e)=>{
          e.preventDefault();
          document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' });
        }}>Features</a></li>
        <li><a href="#aboutus" onClick={(e)=>{
          e.preventDefault();
          document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
        }}>About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
