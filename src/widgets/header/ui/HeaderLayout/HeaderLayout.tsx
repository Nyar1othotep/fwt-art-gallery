import cn from "classnames/bind";
import React, { useContext, useState } from "react";

import { ThemeContext } from "@/features/theme";
import { Button } from "@/shared/ui/Button";
import { Link } from "@/shared/ui/Link";
import { Sidebar } from "@/shared/ui/Sidebar";

import { ReactComponent as IconBurger } from "../assets/buger_icon.svg";
import { ReactComponent as IconTheme } from "../assets/dark_icon.svg";
import { ReactComponent as IconLogo } from "../assets/logo.svg";
import { HeaderAccount } from "../HeaderAccount";

import styles from "./HeaderLayout.module.scss";

const cx = cn.bind(styles);

const HeaderLayout: React.FC = () => {
  const isAuth = false; // Под будущий хук useAuth
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => setIsShow(true);
  const handleClose = () => setIsShow(false);

  return (
    <header className={cx("header", `header--${theme}`)}>
      <div className={cx("header__container")}>
        <div className={cx("header__content")}>
          <Link to="/" className={cx("header__logo")} theme={theme}>
            <IconLogo />
          </Link>
          {/* if (window size > 768 && page === !main) return Search */}
          <menu className={cx("header__menu")}>
            <HeaderAccount
              className={cx("header__nav")}
              isAuth={isAuth}
              role="navigation"
            />
            <Button variant="menu" theme={theme} onClick={toggleTheme}>
              <IconTheme />
            </Button>
          </menu>
          <IconBurger
            className={cx(
              "header__icon-burger",
              `header__icon-burger--${theme}`,
            )}
            onClick={handleShow}
          />
          <Sidebar isShow={isShow} onClose={handleClose} theme={theme}>
            <div className={cx("header__sidebar-content", "sidebar-content")}>
              <Button
                className={cx("sidebar-content__button")}
                variant="text"
                theme={theme}
                onClick={toggleTheme}
              >
                <IconTheme />
                {theme} mode
              </Button>
              <HeaderAccount isAuth={isAuth} />
            </div>
          </Sidebar>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
