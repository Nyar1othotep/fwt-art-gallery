import cn from "classnames/bind";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import { AddArtist } from "@/features/artists";
import { AuthContext } from "@/features/auth";
import { FiltersLayout } from "@/features/filters";
import { ArtistsList } from "@/widgets/artists";

import styles from "./Page.module.scss";

const cx = cn.bind(styles);

const MainPage: React.FC = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div className={cx("main-page")}>
      <div className={cx("main-page__container")}>
        <div className={cx("main-page__controls")}>
          <AddArtist />
          {isAuth && <FiltersLayout />}
        </div>
        <section>
          <ArtistsList isAuth={isAuth} />
        </section>
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
