import cn from "classnames/bind";
import React from "react";

import styles from "./GridLayout.module.scss";

const cx = cn.bind(styles);

interface IGridLayout extends React.HTMLAttributes<HTMLUListElement> {}

const GridLayout: React.FC<IGridLayout> = ({ children, className }) => (
  <ul className={cx(className, "grid-layout")}>{children}</ul>
);

export default GridLayout;
