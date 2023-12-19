import cn from "classnames/bind";
import React, { useEffect, useState } from "react";

import { ReactComponent as IconArrow } from "../../assets/arrow_icon.svg";
import { usePagination } from "../../lib/usePagination";

import styles from "./Pagination.module.scss";

const cx = cn.bind(styles);

interface IPagination {
  theme?: string;
  onChange: (page: number) => void;
  totalPages: number;
}

const Pagination: React.FC<IPagination> = ({
  theme = "light",
  onChange,
  totalPages = 0,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const items = usePagination(totalPages, currentPage);

  useEffect(() => onChange(currentPage), [currentPage]);

  const handleSelectPage = (selected: number | string) => () =>
    typeof selected === "number" && setCurrentPage(selected);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return totalPages > 1 ? (
    <div className={cx("pagination", `pagination--${theme}`)}>
      <IconArrow
        className={cx("pagination__icon-prev")}
        onClick={handlePrevPage}
      />
      <ul className={cx("pagination__list")}>
        {items.map((item, index) => {
          const isActivePage = currentPage === item;
          const isStringItem = typeof item === "string";

          return (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={cx("pagination__item", {
                "pagination__item--active": isActivePage,
                "pagination__item--disable": isStringItem,
              })}
              onClick={handleSelectPage(item)}
              aria-hidden
            >
              {item}
            </li>
          );
        })}
      </ul>
      <IconArrow
        className={cx("pagination__icon-next")}
        onClick={handleNextPage}
      />
    </div>
  ) : null;
};

export default Pagination;
