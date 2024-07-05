import cn from "classnames/bind";
import React, { HTMLAttributes, useEffect } from "react";

import { ReactComponent as IconClose } from "../../assets/close_icon.svg";
import { ReactComponent as IconError } from "../../assets/error_icon.svg";

import styles from "./Toast.module.scss";

const cx = cn.bind(styles);

interface IToast extends HTMLAttributes<HTMLDivElement> {
  theme?: string;
  onClose: () => void;
  duration: number;
}

const Toast: React.FC<IToast> = ({
  theme = "light",
  duration,
  children,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), duration);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={cx("toast", `toast--${theme}`)}>
      <div className={cx("toast__title")}>
        <IconError className={cx("toast__icon-error")} />{" "}
        <p className={cx("toast__text")}>Error!</p>
      </div>
      <div className={cx("toast__message")}>{children}</div>
      <IconClose className={cx("toast__icon-close")} onClick={onClose} />
    </div>
  );
};

export default Toast;
