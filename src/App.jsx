import './App.css'
import React from "react";
import ThemeContext from "./utils/theme";
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

  return (
    <>
      <Provider store={store}>
        <ThemeContext.Provider value={'light'}>
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
