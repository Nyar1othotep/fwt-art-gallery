import cn from "classnames/bind";
import React from "react";

import { TransitionWrapper } from "../TransitionWrapper";

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
  return (
    <TransitionWrapper
      className={className}
      enterDoneClass={cx("sidebar__enter-done")}
      isShow={isShow}
      onClose={onClose}
    >
      <div className={cx("sidebar__wrapper", `sidebar__wrapper--${theme}`)}>
        <Icon className={cx("sidebar__icon")} onClick={onClose} />
        {children}
      </div>
    </TransitionWrapper>
  );
};

export default Sidebar;
