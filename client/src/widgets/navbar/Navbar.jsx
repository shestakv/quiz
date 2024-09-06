import React from "react";
import { NavLink } from "react-router-dom";
import ThemesPage from "../../page/themes/ThemesPage";
function Navbar() {
  return (
    <div>
      <h1>
        <NavLink to="/themes">QUIZ</NavLink>
      </h1>
    </div>
  );
}

export default Navbar;
