import cn from "classnames/bind";
import React from "react";

import styles from "./GridLayout.module.scss";

const cx = cn.bind(styles);

const GridLayout: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  children,
}) => {
  return <ul className={cx("grid-layout")}>{children}</ul>;
};

export default GridLayout;
