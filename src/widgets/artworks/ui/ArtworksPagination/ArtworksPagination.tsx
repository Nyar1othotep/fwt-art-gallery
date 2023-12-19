import cn from "classnames/bind";
import React, { useContext } from "react";

import { ThemeContext } from "@/features/theme";
import { Pagination } from "@/shared/ui/Pagination";

import styles from "./ArtworksPagination.module.scss";

const cx = cn.bind(styles);

interface IArtworksPagination {
  onChange: (page: number) => void;
  totalPages: number;
}

const ArtworksPagination: React.FC<IArtworksPagination> = ({
  onChange,
  totalPages,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cx("artworks-pagination")}>
      <Pagination theme={theme} totalPages={totalPages} onChange={onChange} />
    </div>
  );
};

export default ArtworksPagination;
