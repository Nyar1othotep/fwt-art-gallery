import cn from "classnames/bind";
import React, { HTMLAttributes, useEffect } from "react";

import { ReactComponent as Icon } from "../../assets/close_icon.svg";
import { useBoolean } from "../../lib/useBoolean";
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
}) => {
  const [isModal, { on: handleModalOpen, off: handleModalClose }] =
    useBoolean(isShow);

  useEffect(() => {
    if (isShow) handleModalOpen();
  }, [isShow]);

  const handleExited = () => {
    onExited?.();
    handleModalClose();
  };

  return isModal ? (
    <TransitionWrapper
      isShow={isShow}
      onClose={onClose}
      onExited={handleExited}
      childrenClass={className}
      enterDoneClass={cx("modal__enter-done")}
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
  ) : null;
};

export default Modal;
