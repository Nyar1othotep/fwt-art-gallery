import cn from "classnames/bind";
import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ThemeContext, ToggleTheme } from "@/features/theme";
import { useBoolean } from "@/shared/lib/useBoolean";
import { Link } from "@/shared/ui/Link";
import { Sidebar } from "@/shared/ui/Sidebar";

import { useMediaQuery } from "../../lib/useMediaQuery";
import { ReactComponent as IconBurger } from "../assets/buger_icon.svg";
import { ReactComponent as IconLogo } from "../assets/logo.svg";
import { HeaderAccount } from "../HeaderAccount";
import { HeaderSearch } from "../HeaderSearch";

import styles from "./HeaderLayout.module.scss";

const cx = cn.bind(styles);

const HeaderLayout: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const { pathname } = useLocation();
  const isLargeView = useMediaQuery(`(min-width: 1440px)`);
  const isSmallView = useMediaQuery(`(min-width: 768px)`);
  const [isSidebar, { on: handleSidebarOpen, off: handleSidebarClose }] =
    useBoolean(false);
  const [isSearch, { on: handleSearchOpen, off: handleSearchClose }] =
    useBoolean(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isLargeView) handleSidebarClose();
    if (isSmallView) handleSearchClose();
  }, [isLargeView, isSmallView]);

  return (
    <header className={cx("header", `header--${theme}`)}>
      <div className={cx("header__container")}>
        <div className={cx("header__content")}>
          {!isSearch && (
            <Link className={cx("header__logo")} to="/" theme={theme}>
              <IconLogo />
            </Link>
          )}
          <div
            className={cx("header__right", {
              "header__right--active": isSearch,
            })}
          >
            {isHomePage && (
              <HeaderSearch
                theme={theme}
                isShow={isSearch}
                onOpen={handleSearchOpen}
                onClose={handleSearchClose}
              />
            )}
            <menu className={cx("header__menu")}>
              <HeaderAccount onClose={handleSidebarClose} role="navigation" />
              <ToggleTheme variant="menu" />
            </menu>
            <IconBurger
              className={cx("header__icon-burger")}
              onClick={handleSidebarOpen}
            />
          </div>
          <Sidebar
            theme={theme}
            isShow={isSidebar}
            onClose={handleSidebarClose}
          >
            <div className={cx("header__sidebar-content", "sidebar-content")}>
              <ToggleTheme variant="text">{theme} mode</ToggleTheme>
              <HeaderAccount onClose={handleSidebarClose} />
            </div>
          </Sidebar>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
