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
      xmlns="http://www.w3.org/2000/svg"
      width="60px"
      height="60px"
      viewBox="0 0 60 60"
    >
      <ellipse
        className={cx("circle--one", `circle--one--${theme}`)}
        rx="30"
        ry="30"
      />
      <ellipse
        className={cx("circle--two", `circle--tw--${theme}`)}
        rx="30"
        ry="30"
      />
      <ellipse
        className={cx("circle--three", `circle--three--${theme}`)}
        rx="30"
        ry="30"
      />
      <ellipse
        className={cx("circle--four", `circle--four--${theme}`)}
        rx="30"
        ry="30"
      />
    </svg>
  </div>
);

export default Preloader;
