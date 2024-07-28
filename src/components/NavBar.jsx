import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/progress">Progress</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/resources">Resources</Link>
    </nav>
  </header>
);

export default NavBar;
