import cn from "classnames/bind";
import React from "react";

import { Button } from "@/shared/ui/Button";

import { ReactComponent as Icon } from "../dark_icon.svg";
import Logo from "../Logo/Logo";

import styles from "./HeaderLayout.module.scss";

const cx = cn.bind(styles);

const HeaderLayout: React.FC = () => {
  //   const isAuth = false;
  //   const isHomePage = true;
  const theme = "light";

  return (
    <header className={cx("header")}>
      <Logo className={cx("header__logo")} theme={theme} />
      {/* if window size > 768 return Search */}
      <menu className={cx("header__menu")}>
        <div>Log in</div>
        <div>Sign up</div>
        <Button className={cx("header__button")} variant="menu" theme={theme}>
          <Icon />
        </Button>
        {/* <Button
          className={cx("header__button--menu")}
          variant="text"
          theme={theme}
        >
          <Icon />
          {theme === "light" ? "Light mode" : "Dark mode"}
        </Button> */}
      </menu>
    </header>
  );
};

export default HeaderLayout;
