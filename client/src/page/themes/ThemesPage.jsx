import React from "react";
import ThemeItem from "./ThemeItem";
import { NavLink } from "react-router-dom";

function ThemesPage({ themes, setThemes }) {
  return (
    <div>
      {themes &&
        themes.map((theme) => (
          <ThemeItem key={theme.id} theme={theme} setThemes={setThemes} />
        ))}
    </div>
  );
}

export default ThemesPage;
