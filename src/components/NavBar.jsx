import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/progress">Progress</Link></li>
      <li><Link to="/videos">Videos</Link></li>
      <li><Link to="/resources">Resources</Link></li>
    </ul>
  </nav>
);

export default NavBar;
