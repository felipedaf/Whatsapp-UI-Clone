import React from "react";

const THEME_KEY = "color_theme";

export const THEMES = {
  DARK_THEME: "dark",
  LIGHT_THEME: "light"
};

export const THEME_MODE_COLORS = {
  [THEMES.DARK_THEME]: {
    bgColor: "#090e11",
    bgGradient: "none",
    navHeader: "#2a2f32",
    headerIconsColor: "#b1b3b5"
  },
  [THEMES.LIGHT_THEME]: {
    bgColor: "#dddbd1",
    bgGradient: "linear-gradient(180deg,#dddbd1,#d2dbdc)",
    navHeader: "#ededed",
    headerIconsColor: "#919191"
  }
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
      if (!Object.keys(THEME_MODE_COLORS).includes(newTheme))
        throw new Error("This theme doesn't exist!")

      window.localStorage.setItem(THEME_KEY, newTheme);

      return true;
    } catch(e) {
      
      return false;
    }
  },
};

export default React.createContext();