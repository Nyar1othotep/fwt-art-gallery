import cn from "classnames/bind";
import React from "react";
import { Link as RouterLink, type LinkProps } from "react-router-dom";

import styles from "./Link.module.scss";

const cx = cn.bind(styles);

interface ILink extends LinkProps {
  theme?: string;
}

const Link: React.FC<ILink> = ({ className, theme = "light", ...props }) => (
  <RouterLink className={cx(className, "link", `link--${theme}`)} {...props} />
);

export default Link;
