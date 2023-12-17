// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css'; // Import your CSS file for Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Company name on the left */}
        <span className="company-name">
          <span className="flex-text">FLEX</span>
          <span className="yoga-text">YOGA</span>
        </span>
      </div>
      <div className="navbar-right">
        {/* Booking page option on the right */}
        <Link to="/booking" className="booking-link">Booking</Link>
        {/* Add more navigation links or options as needed */}
      </div>
    </nav>
  );
};

export default Navbar;
