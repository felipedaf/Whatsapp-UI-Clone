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
      return window.localStorage.getItem(THEME_KEY);
    } catch(e) {
      return null
    }
  },
  updateTheme: value => {
    try {
      window.localStorage.setItem(THEME_KEY, value)
      return true
    } catch(e) {
      return false
    }
  },
};

