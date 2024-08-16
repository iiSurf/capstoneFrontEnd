import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import placeholderLogo from "../assets/placeholderLogo.svg";
import "../styles/NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbar-container"></div>
          <Link to="/" className="navbar-logo">
            <img src={placeholderLogo} alt="logo" />
            Nick
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} size="lg" />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu} />
              Home
            </li>
            <li className="nav-item">
              <Link
                to="/progress"
                className="nav-links"
                onClick={closeMobileMenu}
              />
              Progress
            </li>
            <li className="nav-item">
              <Link
                to="/goals"
                className="nav-links"
                onClick={closeMobileMenu}
              />
              Goals
            </li>
            <li className="nav-item">
              <Link
                to="/videos"
                className="nav-links"
                onClick={closeMobileMenu}
              />
              Videos
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              />
              Sihn Up
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
