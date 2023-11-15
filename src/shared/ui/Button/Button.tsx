import cn from "classnames/bind";
import React, { ButtonHTMLAttributes } from "react";

import { TButtonVariant } from "@/shared/model/types";

import styles from "./Button.module.scss";

const cx = cn.bind(styles);

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: string;
  variant?: TButtonVariant;
}

const Button: React.FC<IButton> = ({
  theme = "light",
  variant = "default",
  className,
  ...props
}) => (
  <button
    className={cx(
      className,
      "button",
      `button--${variant}`,
      `button--${variant}--${theme}`,
    )}
    {...props}
  />
);

export default Button;
