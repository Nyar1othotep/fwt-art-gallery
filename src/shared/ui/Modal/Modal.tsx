import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import { ReactComponent as Icon } from "../../assets/close_icon.svg";
import { TModalVariant } from "../../model/types";
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
    isShow={isShow}
    onClose={onClose}
    onExited={onExited}
    childrenClass={className}
    enterDoneClass={cx("modal__enter-done")}
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
