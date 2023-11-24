import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import styles from "./ArtistSkeleton.module.scss";

const cx = cn.bind(styles);

interface IArtistSkeleton extends HTMLAttributes<HTMLDivElement> {
  theme?: string;
}

const ArtistSkeleton: React.FC<IArtistSkeleton> = ({ theme }) => (
  <div className={cx("artist-skeleton")}>
    <div
      className={cx("artist-skeleton__bg", `artist-skeleton__bg--${theme}`)}
    />
  </div>
);

export default ArtistSkeleton;
