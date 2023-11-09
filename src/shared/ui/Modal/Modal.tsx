import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import { TModalVarian } from "@/shared/model/types";

import { ReactComponent as Icon } from "../../assets/close_icon.svg";
import { TransitionWrapper } from "../TransitionWrapper";

import styles from "./Modal.module.scss";

const cx = cn.bind(styles);

interface IModal extends HTMLAttributes<HTMLDivElement> {
  theme?: string;
  variant?: TModalVarian;
  isShow: boolean;
  onClose: () => void;
}

const Modal: React.FC<IModal> = ({
  className,
  theme = "light",
  variant = "default",
  isShow,
  onClose,
  children,
}) => {
  return (
    <TransitionWrapper
      enterDoneClass={cx("modal__enter-done")}
      isShow={isShow}
      onClose={onClose}
    >
      <div
        className={cx(
          className,
          "modal",
          `modal--${theme}`,
          `modal--${variant}`,
        )}
      >
        <Icon className={cx("modal__icon")} onClick={onClose} />
        {children}
      </div>
    </TransitionWrapper>
  );
};

export default Modal;
