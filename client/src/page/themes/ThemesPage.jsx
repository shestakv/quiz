import React from "react";
import ThemeItem from "./ThemeItem";

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
