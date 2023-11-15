import cn from "classnames/bind";
import React, { HTMLAttributes, useContext } from "react";

import { TButtonVariant } from "@/shared/model/types";
import { Button } from "@/shared/ui/Button";

import { ThemeContext } from "../../lib/ThemeProvide";
import { ReactComponent as IconDark } from "../assets/dark_icon.svg";
import { ReactComponent as IconLight } from "../assets/light_icon.svg";

import styles from "./ToggleTheme.module.scss";

const cx = cn.bind(styles);

interface IToggleTheme extends HTMLAttributes<HTMLElement> {
  variant: TButtonVariant;
}

const ToggleTheme: React.FC<IToggleTheme> = ({ variant, children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button
      className={cx("toggle-theme__button")}
      theme={theme}
      variant={variant}
      onClick={toggleTheme}
    >
      {theme === "light" ? <IconDark /> : <IconLight />}
      {children}
    </Button>
  );
};

export default ToggleTheme;
