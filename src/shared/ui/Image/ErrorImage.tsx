import cn from "classnames/bind";
import React from "react";

import { ReactComponent as IconPhoto } from "../../assets/photo_icon.svg";

import styles from "./Image.module.scss";

const cx = cn.bind(styles);

interface IErrorImage {
  title: string;
}

const ErrorImage: React.FC<IErrorImage> = ({ title }) => (
  <div className={cx("image__no-image")}>
    <IconPhoto />
    <p>{title}</p>
  </div>
);

export default ErrorImage;
