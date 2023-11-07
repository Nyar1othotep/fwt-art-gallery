import React, { HTMLAttributes, useEffect, useState } from "react";

import { TTheme } from "../model/types";

import { getTheme } from "./getTheme";

interface IThemeContext {
  theme: TTheme;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<IThemeContext>(
  {} as IThemeContext,
);

const ThemeProvider: React.FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
