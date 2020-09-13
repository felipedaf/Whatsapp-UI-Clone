import React, { useState } from "react";
import { THEMES } from "../utils/theme"

const ToggleButton = props => {
  const [currentTheme, setCurrentTheme] = useState(THEMES.LIGHT_THEME);

  const toggleTheme = () => {
    if (currentTheme === THEMES.LIGHT_THEME)
      setCurrentTheme(THEMES.DARK_THEME)
    else
      setCurrentTheme(THEMES.LIGHT_THEME)
  };

  const changeTheme = () => {
    toggleTheme();
    props.toggle(currentTheme);
  };

  return (
    <div style={{
      height: "20px",
      width: "40px",
      background: "black"
    }} onClick={changeTheme}>

    </div>
  )
};

export default ToggleButton;