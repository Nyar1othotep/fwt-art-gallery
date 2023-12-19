import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import { ReactComponent as IconPhoto } from "../../assets/photo_icon.svg";

import styles from "./Image.module.scss";

const cx = cn.bind(styles);

interface IErrorImage extends HTMLAttributes<HTMLDivElement> {
  theme?: string;
  title?: string;
}

const ErrorImage: React.FC<IErrorImage> = ({
  theme = "light",
  title = "",
  className,
}) => (
  <div
    className={cx(className, "image__no-image", `image__no-image--${theme}`)}
  >
    <IconPhoto />
    <p>{title}</p>
  </div>
);

export default ErrorImage;
