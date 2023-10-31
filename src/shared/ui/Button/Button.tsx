import React from "react";

import cn from "classnames/bind";

import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type TButtonVariant = "default" | "text" | "menu" | "icon" | "back-to-top";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: string;
  variant?: TButtonVariant;
}

const Button: React.FC<IButton> = ({
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
