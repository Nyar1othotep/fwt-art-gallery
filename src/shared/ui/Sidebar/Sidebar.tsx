import cn from "classnames/bind";
import React, { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { useOutsideClick } from "@/shared/lib/useOutsideClick";

import { ReactComponent as Icon } from "./assets/close_icon.svg";
import styles from "./Sidebar.module.scss";

const cx = cn.bind(styles);

interface ISidebar extends React.HTMLAttributes<HTMLDivElement> {
  theme?: string;
  isShow: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<ISidebar> = ({
  className,
  theme = "light",
  isShow,
  onClose,
  children,
}) => {
  const sidebarRef = useRef(null);
  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, onClose);

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isShow]);

  return (
    <CSSTransition
      nodeRef={sidebarRef}
      in={isShow}
      timeout={{ exit: 500 }}
      classNames={{
        enterActive: cx("enter-active"),
        enterDone: cx("enter-done"),
        exitActive: cx("exit-active"),
        exitDone: cx("exit-done"),
      }}
      unmountOnExit
    >
      {() => (
        <div ref={sidebarRef} className={cx(className, "sidebar")}>
          <div className={cx("sidebar__background")} />
          <div
            ref={wrapperRef}
            className={cx("sidebar__wrapper", `sidebar__wrapper--${theme}`)}
          >
            <Icon className={cx("sidebar__icon")} onClick={onClose} />
            {children}
          </div>
        </div>
      )}
    </CSSTransition>
  );
};

export default Sidebar;
