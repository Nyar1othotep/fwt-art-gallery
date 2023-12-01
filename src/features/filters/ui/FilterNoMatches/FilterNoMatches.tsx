import cn from "classnames/bind";
import React, { useContext, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { ThemeContext } from "@/features/theme";

import styles from "./FilterNoMatches.module.scss";

const cx = cn.bind(styles);

const SearchNoMatches: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [params] = useSearchParams();
  const search = useMemo(() => params.get("name"), [params]);

  return (
    <div className={cx("search-no-matches", `search-no-matches--${theme}`)}>
      <div className={cx("search-no-matches__message")}>
        No matches for{" "}
        <span className={cx("search-no-matches__search")}>
          {search || "the selected filters"}
        </span>
      </div>
      <p className={cx("search-no-matches__text")}>
        Please try again with a different spelling or keywords.
      </p>
    </div>
  );
};

export default SearchNoMatches;
