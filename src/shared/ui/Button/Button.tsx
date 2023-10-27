import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

const cx = cn.bind(styles);

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  type?: "submit" | "button";
  isDarkTheme?: boolean;
  onClick?: () => void;
}

export function Button({ label, type, isDarkTheme, ...props }: IButton) {
  return (
    <button
      type={type}
      className={cx("Button", {
        "Button-dark": isDarkTheme,
      })}
      {...props}
    >
      {label}
    </button>
  );
}
