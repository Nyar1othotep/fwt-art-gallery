import cn from "classnames/bind";
import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import { AuthContext } from "@/features/auth";
import { ArtistsList } from "@/widgets/ArtistsList";

import styles from "./Page.module.scss";

const cx = cn.bind(styles);

const MainPage: React.FC = () => {
  const { isAuth } = useContext(AuthContext);
  // TODO: Add Filters context
  const [filters] = useState({ perPage: 6 });

  return (
    <div className={cx("main-page")}>
      <div className={cx("main-page__container")}>
        <ArtistsList isAuth={isAuth} filters={filters} />
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
