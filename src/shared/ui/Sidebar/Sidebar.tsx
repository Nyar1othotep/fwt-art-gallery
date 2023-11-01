import cn from "classnames/bind";
import React from "react";

import styles from "./Sidebar.module.scss";

const cx = cn.bind(styles);

interface ISidebar extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar: React.FC<ISidebar> = ({ className, children }) => {
  return <div className={cx(className, "sidebar")}>{children}</div>;
};

export default Sidebar;
