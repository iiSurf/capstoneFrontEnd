import React from 'react';
import { Link } from 'react-router-dom';
import placeholderLogo from '../assets/placeholderLogo.svg';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container"></div>
          <Link to="/" className="navbar-logo">
            NICK <img src={placeholderLogo} alt="logo" className="logo" />
          </Link>
          <div className="menu-icon"></div>
      </div>
    </>
  );
};

export default NavBar;
