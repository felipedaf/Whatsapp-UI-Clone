import './App.css'
import React, { useState } from "react";
import ThemeContext, { Theme } from "./utils/theme";
import ToggleButton from "./components/ToggleButton";
import Background from "./components/Background"

const App = () => {
  const [theme, setTheme] = useState(Theme.getTheme());

  const changeTheme = newTheme => {
    setTheme(() => {
      Theme.updateTheme(newTheme);
      return newTheme;
    });
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Background>
          <ToggleButton toggle={changeTheme}/>
          <p>O tema é: {theme}</p>
        </Background>
      </ThemeContext.Provider>
    
    </>
  );
}

export default App;
