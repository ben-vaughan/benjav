import { createContext } from "react";

export const themes = {
  dark: "",
  light: "light-mode"
}

export const ThemeContext = createContext({
    theme: themes.dark,
  changeTheme: () => {}
})