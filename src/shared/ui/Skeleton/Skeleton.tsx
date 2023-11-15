import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import styles from "./Skeleton.module.scss";

const cx = cn.bind(styles);

interface ISkeleton extends HTMLAttributes<HTMLDivElement> {
  theme?: string;
}

const Skeleton: React.FC<ISkeleton> = ({ theme = "light" }) => (
  <div className={cx("skeleton", `skeleton--${theme}`)}>
    <div className={cx("skeleton__content")}>
      <div className={cx("skeleton__info", "info-card", `info-card--${theme}`)}>
        <div className={cx("info-card__title", `info-card__title--${theme}`)} />
        <div className={cx("info-card__year", `info-card__year--${theme}`)} />
      </div>
    </div>
  </div>
);

export default Skeleton;
