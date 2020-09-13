import React from "react";

const THEME_KEY = "color_theme";

export const DARK_MODE_COLORS = {

};

export const LIGHT_MODE_COLORS = {

};

export const THEMES = {
  DARK_THEME: "dark",
  LIGHT_THEME: "light"
};

export const Theme = {

  getTheme: () => {
    try {
      const theme = window.localStorage.getItem(THEME_KEY);

      if (!theme)
        throw new Error("There's no theme");
        
      return theme
    } catch(e) {
      Theme.updateTheme(THEMES.LIGHT_THEME);
      return window.localStorage.getItem(THEME_KEY);
    }
  },
  updateTheme: newTheme => {
    try {
      window.localStorage.setItem(THEME_KEY, newTheme);
      return true;
    } catch(e) {
      return false;
    }
  },
};

export default React.createContext();