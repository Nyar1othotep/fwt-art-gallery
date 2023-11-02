import React, { HTMLAttributes, useState } from "react";

import { TTheme } from "../model/types";

interface IThemeContext {
  theme: TTheme;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<IThemeContext>(
  {} as IThemeContext,
);

const ThemeProvider: React.FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>("light");

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
