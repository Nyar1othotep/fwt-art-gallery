import { TTheme } from "../model/types";

export const getTheme = () => {
  let theme = localStorage.getItem("theme");

  if (!theme) {
    localStorage.setItem("theme", "light");
    theme = "light";
  }

  return theme as TTheme;
};
