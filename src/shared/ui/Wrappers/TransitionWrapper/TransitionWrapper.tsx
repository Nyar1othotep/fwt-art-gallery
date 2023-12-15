import cn from "classnames/bind";
import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { useOutsideClick } from "../../../lib/useOutsideClick";
import { useToggleScroll } from "../../../lib/useToggleScroll";
import { TTransitionWrapperVariant } from "../../../model/types";

import styles from "./TransitionWrapper.module.scss";

const cx = cn.bind(styles);

interface ITransitionWrapper extends React.HTMLAttributes<HTMLDivElement> {
  isShow: boolean;
  variant?: TTransitionWrapperVariant;
  onClose: () => void;
  onExited?: () => void;
  isTransition?: boolean;
  childrenClass?: string;
  enterDoneClass?: string;
}

const TransitionWrapper: React.FC<ITransitionWrapper> = ({
  isShow,
  variant = "default",
  onClose,
  onExited,
  children,
  className,
  isTransition = true,
  childrenClass,
  enterDoneClass,
}) => {
  const wrapperRef = useRef(null);
  const bgRef = useRef(null);
  const debounce = isTransition ? 500 : 0;

  useOutsideClick(bgRef, onClose);
  useToggleScroll(isShow, debounce + 20);

  return (
    <CSSTransition
      nodeRef={wrapperRef}
      in={isShow}
      appear={isShow}
      timeout={{ exit: debounce }}
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
            <div ref={bgRef} className={cx("transition-wrapper__bg")} />
            <div
              className={cx(
                childrenClass,
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
