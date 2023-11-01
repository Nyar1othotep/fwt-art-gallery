import cn from "classnames/bind";
import React, { ReactNode } from "react";

import styles from "./GridLayout.module.scss";

const cx = cn.bind(styles);

interface IGridLayout extends React.ButtonHTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

const GridLayout: React.FC<IGridLayout> = ({ children }) => {
  return <ul className={cx("grid-layout")}>{children}</ul>;
};

export default GridLayout;
