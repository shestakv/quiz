import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <h1>
        <NavLink to="/">QUIZ</NavLink>
      </h1>
    </div>
  );
}

export default Navbar;
