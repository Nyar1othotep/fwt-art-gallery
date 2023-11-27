import cn from "classnames/bind";
import React, { useContext, useEffect, useState } from "react";

import { ThemeContext, ToggleTheme } from "@/features/theme";
import { Link } from "@/shared/ui/Link";
import { Sidebar } from "@/shared/ui/Sidebar";

import { useBreakpoint } from "../../lib/useBreakpoint";
import { ReactComponent as IconBurger } from "../assets/buger_icon.svg";
import { ReactComponent as IconLogo } from "../assets/logo.svg";
import { HeaderAccount } from "../HeaderAccount";

import styles from "./HeaderLayout.module.scss";

const cx = cn.bind(styles);

const HeaderLayout: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [isLargeView] = useBreakpoint(1440);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (isLargeView) setIsShow(false);
  }, [isLargeView]);

  const handleShow = () => setIsShow(true);
  const handleClose = () => setIsShow(false);

  return (
    <header className={cx("header", `header--${theme}`)}>
      <div className={cx("header__container")}>
        <div className={cx("header__content")}>
          <Link className={cx("header__logo")} to="/" theme={theme}>
            <IconLogo />
          </Link>
          {/* if (window size > 768 && page === !main) return Search */}
          <menu className={cx("header__menu")}>
            <HeaderAccount onClose={handleClose} role="navigation" />
            <ToggleTheme variant="menu" />
          </menu>
          <IconBurger
            className={cx(
              "header__icon-burger",
              `header__icon-burger--${theme}`,
            )}
            onClick={handleShow}
          />
          <Sidebar theme={theme} isShow={isShow} onClose={handleClose}>
            <div className={cx("header__sidebar-content", "sidebar-content")}>
              <ToggleTheme variant="text">{theme} mode</ToggleTheme>
              <HeaderAccount onClose={handleClose} />
            </div>
          </Sidebar>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
