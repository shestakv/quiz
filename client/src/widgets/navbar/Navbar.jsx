import React from "react";
import { NavLink } from "react-router-dom";
import ThemesPage from "../../page/themes/ThemesPage";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="quiz">
      <h1 className="quiz__main">
        <NavLink className="quiz__title" to="/themes">
          QUIZ
        </NavLink>
      </h1>
    </div>
  );
}

export default Navbar;
