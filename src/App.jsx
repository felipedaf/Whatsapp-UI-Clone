import './App.css'
import React, { useState } from "react";
import ThemeContext, { Theme } from "./utils/theme";

import {
  Background,
  ChatWrapper,
  NavWrapper,
  SectionManager
} from "./components"

import {
  FSection,
  SSection

} from "./components/generalStyles"

const App = () => {
  const [theme, setTheme] = useState(Theme.getTheme());
  const [section, setSection] = useState(null);

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
            <SectionManager current="test" show={section}/>
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
