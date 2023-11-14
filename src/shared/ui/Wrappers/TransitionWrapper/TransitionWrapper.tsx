import cn from "classnames/bind";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { useOutsideClick } from "@/shared/lib/useOutsideClick";

import styles from "./TransitionWrapper.module.scss";

const cx = cn.bind(styles);

interface ITransitionWrapper extends React.HTMLAttributes<HTMLDivElement> {
  enterDoneClass?: string;
  isShow: boolean;
  onClose: () => void;
}

const TransitionWrapper: React.FC<ITransitionWrapper> = ({
  className,
  enterDoneClass,
  isShow,
  onClose,
  children,
}) => {
  const wrapperRef = useRef(null);
  const childrenRef = useRef(null);

  useOutsideClick(childrenRef, onClose);

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isShow]);

  return (
    <CSSTransition
      nodeRef={wrapperRef}
      in={isShow}
      timeout={{ exit: 500 }}
      classNames={{
        enterActive: cx("enter-active"),
        enterDone: cx(enterDoneClass, "enter-done"),
        exitActive: cx("exit-active"),
        exitDone: cx("exit-done"),
      }}
      unmountOnExit
    >
      {() =>
        createPortal(
          <div ref={wrapperRef} className={cx(className, "transition-wrapper")}>
            <div
              ref={childrenRef}
              className={cx("transition-wrapper__children")}
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
