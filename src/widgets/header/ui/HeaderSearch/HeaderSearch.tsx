import cn from "classnames/bind";
import React, { useRef } from "react";

import { FilterSearch } from "@/features/filters";
import { ReactComponent as IconSearch } from "@/shared/assets/search-icon.svg";
import { useOutsideClick } from "@/shared/lib/useOutsideClick";

import styles from "./HeaderSearch.module.scss";

const cx = cn.bind(styles);

interface IHeaderSearch {
  theme?: string;
  isShow: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const HeaderSearch: React.FC<IHeaderSearch> = ({
  theme,
  isShow,
  onOpen,
  onClose,
}) => {
  const searchRef = useRef(null);

  useOutsideClick(searchRef, onClose);

  return (
    <div className={cx("header-search", `header-search--${theme}`)}>
      {isShow ? (
        <div ref={searchRef} className={cx("header-search__search")}>
          <FilterSearch />
        </div>
      ) : (
        <IconSearch className={cx("header-search__icon")} onClick={onOpen} />
      )}
    </div>
  );
};

export default HeaderSearch;
