import React, { ReactNode } from "react";

import cn from "classnames/bind";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.scss";

const cx = cn.bind(styles);

interface ILayout {
  headerSlot: ReactNode;
  footerSlot: ReactNode;
}

const Layout: React.FC<ILayout> = ({ headerSlot, footerSlot }) => {
  return (
    <div className={cx("base-layout")}>
      {headerSlot}
      <main className={cx("base-layout__container")}>
        <div className={cx("base-layout__content")}>
          <Outlet />
        </div>
      </main>
      {footerSlot}
    </div>
  );
};

export default Layout;
