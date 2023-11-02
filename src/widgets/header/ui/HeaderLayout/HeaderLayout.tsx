import cn from "classnames/bind";
import React, { useState } from "react";

import { Button } from "@/shared/ui/Button";
import { AccountLayout } from "@/shared/ui/Layouts/AccountLayout";
import { Sidebar } from "@/shared/ui/Sidebar";

import { ReactComponent as IconBurger } from "../assets/buger_icon.svg";
import { ReactComponent as Icon } from "../dark_icon.svg";
import { HeaderLogo } from "../HeaderLogo";

import styles from "./HeaderLayout.module.scss";

const cx = cn.bind(styles);

const HeaderLayout: React.FC = () => {
  const isAuth = false;
  //   const isHomePage = true;
  const theme = "light";
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => setIsShow(true);
  const handleClose = () => setIsShow(false);

  return (
    <header className={cx("header")}>
      <HeaderLogo className={cx("header__logo")} theme={theme} />
      {/* if window size > 768 return Search */}
      <menu className={cx("header__menu")}>
        <AccountLayout className={cx("header__nav")} isAuth={isAuth} />
        <Button className={cx("header__button")} variant="menu" theme={theme}>
          <Icon />
        </Button>
      </menu>
      <IconBurger className={cx("header__icon-burger")} onClick={handleShow} />
      <Sidebar isShow={isShow} onClose={handleClose} theme={theme}>
        <Button className={cx("header__button")} variant="text" theme={theme}>
          <Icon />
          {theme} mode
        </Button>
        <AccountLayout isAuth={isAuth} />
      </Sidebar>
    </header>
  );
};

export default HeaderLayout;
