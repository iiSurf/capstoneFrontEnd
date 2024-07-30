// imports
import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"

const NavBar = () => {
  return (
  <header>
    <nav>
      // links for navbar to go to other pages on website
      <Link to="/">Home</Link>
      <Link to="/progress">Progress</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/goals">Goals</Link>
    </nav>
  </header>
  )
};

export default NavBar;
