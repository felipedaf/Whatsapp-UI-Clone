import './App.css'
import React, { useState } from "react";
import ThemeContext, { Theme } from "./utils/theme";
import store from "./redux/store";
import { Provider } from "react-redux";
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

window.store = store

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
      <Provider store={store}>
        <ThemeContext.Provider value={theme || 'light'}>
          <Background>
            <FSection>
              <SectionManager/>
              <NavWrapper />
            </FSection>
            <SSection>
              <ChatWrapper />
            </SSection>
          </Background>
        </ThemeContext.Provider>
      </Provider>
    </>
  );
}

export default App;
