import cn from "classnames/bind";
import React, { useContext, useEffect, useRef } from "react";

import { FilterSearch } from "@/features/filters";
import { ThemeContext, ToggleTheme } from "@/features/theme";
import { ReactComponent as IconSearch } from "@/shared/assets/search-icon.svg";
import { useBoolean } from "@/shared/lib/useBoolean";
import { useOutsideClick } from "@/shared/lib/useOutsideClick";
import { Link } from "@/shared/ui/Link";
import { Sidebar } from "@/shared/ui/Sidebar";

import { useMediaQuery } from "../../lib/useMediaQuery";
import { ReactComponent as IconBurger } from "../assets/buger_icon.svg";
import { ReactComponent as IconLogo } from "../assets/logo.svg";
import { HeaderAccount } from "../HeaderAccount";

import styles from "./HeaderLayout.module.scss";

const cx = cn.bind(styles);

const HeaderLayout: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const isLargeView = useMediaQuery(`(min-width: 1440px)`);
  const isSmallView = useMediaQuery(`(min-width: 768px)`);
  const [isSidebar, { on: handleSidebarOpen, off: handleSidebarClose }] =
    useBoolean(false);
  const [isSearch, { on: handleSearchOpen, off: handleSearchClose }] =
    useBoolean(false);
  const searchRef = useRef(null);

  useEffect(() => {
    if (isLargeView) handleSidebarClose();
    if (isSmallView) handleSearchClose();
  }, [isLargeView, isSmallView]);

  useOutsideClick(searchRef, handleSearchClose);

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
            {isSearch ? (
              <div ref={searchRef} className={cx("header__search")}>
                <FilterSearch />
              </div>
            ) : (
              <IconSearch
                className={cx("header__icon-search")}
                onClick={handleSearchOpen}
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
