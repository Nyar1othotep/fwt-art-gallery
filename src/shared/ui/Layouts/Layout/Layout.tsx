import cn from "classnames/bind";
import React, { HTMLAttributes, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.scss";

const cx = cn.bind(styles);

interface ILayout extends HTMLAttributes<HTMLDivElement> {
  theme?: string;
  headerSlot: ReactNode;
  footerSlot: ReactNode;
}

const Layout: React.FC<ILayout> = ({
  theme = "light",
  headerSlot,
  footerSlot,
}) => (
  <div className={cx("base-layout", `base-layout--${theme}`)}>
    {headerSlot}
    <main className={cx("base-layout__main")}>
      <Outlet />
    </main>
    {footerSlot}
  </div>
);

export default Layout;
