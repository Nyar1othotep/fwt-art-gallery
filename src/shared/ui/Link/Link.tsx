import cn from "classnames/bind";
import React from "react";
import { Link as RouterLink, type LinkProps } from "react-router-dom";

import styles from "./Link.module.scss";

const cx = cn.bind(styles);

interface ILink extends LinkProps {
  theme?: string;
}

const Link: React.FC<ILink> = ({
  className,
  to,
  theme = "light",
  children,
  onClick,
}) => {
  return (
    <RouterLink
      className={cx(className, "link", [`link--${theme}`])}
      onClick={onClick}
      to={to}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
