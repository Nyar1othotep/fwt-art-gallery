import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import styles from "./Preloader.module.scss";

const cx = cn.bind(styles);

interface IPreloader extends HTMLAttributes<HTMLDivElement> {
  theme?: string;
}

const Preloader: React.FC<IPreloader> = ({ theme = "light", className }) => (
  <div className={cx(className, "preloader")}>
    <svg
      className={cx(`circle--${theme}`)}
      xmlns="http://www.w3.org/2000/svg"
      width="60px"
      height="60px"
      viewBox="0 0 60 60"
    >
      <ellipse className={cx("circle--one")} rx="30" ry="30" />
      <ellipse className={cx("circle--two")} rx="30" ry="30" />
      <ellipse className={cx("circle--three")} rx="30" ry="30" />
      <ellipse className={cx("circle--four")} rx="30" ry="30" />
    </svg>
  </div>
);

export default Preloader;
