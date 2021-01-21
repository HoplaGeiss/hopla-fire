import "./Navbar.scss";

import { Link } from "gatsby";
import React from "react";

const Navbar = ({ title }) => {
  return (
    <div className="navbar">
      <Link to="/">{title}</Link>
    </div>
  );
};

export default Navbar;
