import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import { ReactComponent as IconClose } from "../../assets/close_icon.svg";
import { ReactComponent as IconError } from "../../assets/error_icon.svg";

import styles from "./Toast.module.scss";

const cx = cn.bind(styles);

interface IToast extends HTMLAttributes<HTMLDivElement> {
  theme?: string;
}

const Toast: React.FC<IToast> = ({ theme = "light", className, children }) => (
  <div className={cx(className, "toast", `toast--${theme}`)}>
    <div className={cx(className, "toast__title")}>
      <IconError className={cx(className, "toast__icon-error")} />{" "}
      <p className={cx(className, "toast__text")}>Error!</p>
    </div>
    <div className={cx(className, "toast__message")}>{children}</div>
    <IconClose className={cx(className, "toast__icon-close")} />
  </div>
);

export default Toast;
