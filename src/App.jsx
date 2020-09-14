import './App.css'
import React, { useState } from "react";
import ThemeContext, { Theme } from "./utils/theme";

import {
  Background,
  ChatWrapper,
  NavWrapper
} from "./components"

import {
  FSection,
  SSection

} from "./components/generalStyles"

const App = () => {
  const [theme, setTheme] = useState(Theme.getTheme());

  const changeTheme = newTheme => {
    setTheme(() => {
      Theme.updateTheme(newTheme);
      return Theme.getTheme()
    });
  };

  return (
    <>
      <ThemeContext.Provider value={theme || 'light'}>
        <Background>
          <FSection>
            <NavWrapper />
          </FSection>
          <SSection>
            <ChatWrapper />
          </SSection>
        </Background>
      </ThemeContext.Provider>
    
    </>
  );
}

export default App;
