import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import abc from '../../assets/abc.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'sticky' : ''}`}>
      <div className="nav-content">
        <Link to="/" className="logo-link">
          <img src={abc} alt="Centennial University Logo" className="logo" />
          <h1 className="site-title">Centennial University</h1>
        </Link>
        <img src={menu} alt="Menu Icon" className="menu" onClick={toggleMenu} />
      </div>
      <ul className={`nav-links ${mobileMenu ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/program">Program</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/campus">Campus</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/contact" className="btn">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
