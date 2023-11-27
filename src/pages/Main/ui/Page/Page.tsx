import cn from "classnames/bind";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import { AuthContext } from "@/features/auth";
import { FiltersLayout } from "@/features/filters";
import { ThemeContext } from "@/features/theme";
import { Button } from "@/shared/ui/Button";
import { ArtistsList } from "@/widgets/artists";

import styles from "./Page.module.scss";

const cx = cn.bind(styles);

const MainPage: React.FC = () => {
  const { isAuth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cx("main-page")}>
      <div className={cx("main-page__container")}>
        <div className={cx("main-page__controls")}>
          <Button theme={theme} variant="text">
            Add artist
          </Button>
          <FiltersLayout />
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
