import { createContext } from "react";

export const themes = {
  light: "",
  dark: "dark-mode"
}

export const ThemeContext = createContext({
    theme: themes.light,
  changeTheme: () => {}
})