import React from "react";
import ThemeItem from "./ThemeItem";
import './ThemePage.css'

function ThemesPage({ themes, setThemes }) {
  return (
    <div className="theme">
      {themes &&
        themes.map((theme) => (
          <ThemeItem key={theme.id} theme={theme} setThemes={setThemes} />
        ))}
    </div>
  );
}

export default ThemesPage;
