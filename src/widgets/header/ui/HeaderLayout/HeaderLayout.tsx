import cn from "classnames/bind";
import React, { useContext, useEffect, useRef, useState } from "react";

import { FilterSearch } from "@/features/filters";
import { ThemeContext, ToggleTheme } from "@/features/theme";
import { ReactComponent as IconSearch } from "@/shared/assets/search-icon.svg";
import { useOutsideClick } from "@/shared/lib/useOutsideClick";
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
  const [isSmallView] = useBreakpoint(768);
  const [isShow, setIsShow] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    if (isLargeView) setIsShow(false);
    if (isSmallView) setIsSearch(false);
  }, [isLargeView, isSmallView]);

  const handleShow = () => setIsShow(true);
  const handleClose = () => setIsShow(false);

  const handleSearch = () => setIsSearch(true);

  useOutsideClick(searchRef, () => setIsSearch(false));

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
                className={cx(
                  "header__icon-search",
                  `header__icon-search--${theme}`,
                )}
                onClick={handleSearch}
              />
            )}
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
          </div>
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
