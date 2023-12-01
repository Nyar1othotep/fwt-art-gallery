import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import { TModalVariant } from "@/shared/model/types";

import { ReactComponent as Icon } from "../../assets/close_icon.svg";
import { TransitionWrapper } from "../Wrappers/TransitionWrapper";

import styles from "./Modal.module.scss";

const cx = cn.bind(styles);

interface IModal extends HTMLAttributes<HTMLDivElement> {
  theme?: string;
  isShow: boolean;
  variant?: TModalVariant;
  onClose: () => void;
  onExited?: () => void;
}

const Modal: React.FC<IModal> = ({
  theme = "light",
  isShow,
  variant = "default",
  onClose,
  onExited,
  children,
  className,
}) => (
  <TransitionWrapper
    enterDoneClass={cx("modal__enter-done")}
    isShow={isShow}
    onClose={onClose}
    onExited={onExited}
  >
    <div
      className={cx(className, "modal", `modal--${theme}`, `modal--${variant}`)}
    >
      <Icon className={cx("modal__icon")} onClick={onClose} />
      {children}
    </div>
  </TransitionWrapper>
);

export default Modal;
