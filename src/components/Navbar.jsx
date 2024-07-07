import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> <b>Renders</b></Link>
        </li>
        <li>
          <Link to="/favorites"><b>Favoritos</b></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
