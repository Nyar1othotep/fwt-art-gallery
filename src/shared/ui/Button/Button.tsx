import React, { ButtonHTMLAttributes, FC } from "react";

import cn from "classnames/bind";

import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type TButtonTheme = "light" | "dark";
type TButtonVariant = "default" | "text" | "menu" | "icon" | "back-to-top";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: TButtonTheme;
  variant?: TButtonVariant;
}

const Button: FC<IButton> = ({
  theme = "light",
  variant = "default",
  ...props
}) => {
  return (
    <button
      className={cx(
        "button",
        [`button--${variant}`],
        [`button--${variant}--${theme}`],
      )}
      {...props}
    />
  );
};

export default Button;
