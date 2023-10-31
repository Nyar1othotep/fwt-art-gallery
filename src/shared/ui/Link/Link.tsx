import React, { ReactNode } from "react";

import cn from "classnames/bind";
import { Link as RouterLink, type LinkProps } from "react-router-dom";

import styles from "./Link.module.scss";

const cx = cn.bind(styles);

interface ILink extends LinkProps {
  to: string;
  theme?: string;
  children: ReactNode;
  onClick?: () => void;
}

const Link: React.FC<ILink> = ({ to, theme = "light", children, onClick }) => {
  return (
    <RouterLink
      className={cx("link", [`link--${theme}`])}
      onClick={onClick}
      to={to}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
