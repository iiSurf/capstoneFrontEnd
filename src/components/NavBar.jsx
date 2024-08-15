import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import placeholderLogo from '../assets/placeholderLogo.svg';
import '../styles/NavBar.css';

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container"></div>
          <Link to="/" className="navbar-logo">
          <img src={placeholderLogo} alt="logo" className="logo" />
          Nick
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={ click ? faTimes : faBars } size='lg' />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}></ul>
      </div>
    </>
  );
};

export default NavBar;
