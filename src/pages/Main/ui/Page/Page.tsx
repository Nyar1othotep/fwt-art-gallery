import cn from "classnames/bind";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import { AuthContext } from "@/features/auth";
import { FiltersContext } from "@/features/filters";
import { ArtistsList } from "@/widgets/artists";

import styles from "./Page.module.scss";

const cx = cn.bind(styles);

const MainPage: React.FC = () => {
  const { isAuth } = useContext(AuthContext);
  const { filters } = useContext(FiltersContext);

  return (
    <div className={cx("main-page")}>
      <div className={cx("main-page__container")}>
        <section>
          <ArtistsList isAuth={isAuth} filters={filters} />
        </section>
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
