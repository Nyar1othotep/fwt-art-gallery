import cn from "classnames/bind";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { useOutsideClick } from "@/shared/lib/useOutsideClick";
import { TTransitionWrapperVariant } from "@/shared/model/types";

import styles from "./TransitionWrapper.module.scss";

const cx = cn.bind(styles);

interface ITransitionWrapper extends React.HTMLAttributes<HTMLDivElement> {
  isShow: boolean;
  variant?: TTransitionWrapperVariant;
  onClose: () => void;
  onExited?: () => void;
  enterDoneClass?: string;
}

const TransitionWrapper: React.FC<ITransitionWrapper> = ({
  isShow,
  variant = "default",
  onClose,
  onExited,
  children,
  className,
  enterDoneClass,
}) => {
  const wrapperRef = useRef(null);
  const childrenRef = useRef(null);

  useOutsideClick(childrenRef, onClose);

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isShow]);

  return (
    <CSSTransition
      nodeRef={wrapperRef}
      in={isShow}
      appear={isShow}
      timeout={{ exit: 500 }}
      classNames={{
        enterActive: cx("enter-active"),
        enterDone: cx(enterDoneClass, "enter-done"),
        exitActive: cx("exit-active"),
        exitDone: cx("exit-done"),
      }}
      unmountOnExit
      onExited={onExited}
    >
      {() =>
        createPortal(
          <div
            ref={wrapperRef}
            className={cx(
              className,
              "transition-wrapper",
              `transition-wrapper--${variant}`,
            )}
          >
            <div
              ref={childrenRef}
              className={cx(
                "transition-wrapper__children",
                `transition-wrapper__children--${variant}`,
              )}
            >
              {children}
            </div>
          </div>,
          document.body,
        )
      }
    </CSSTransition>
  );
};

export default TransitionWrapper;
