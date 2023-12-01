import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import styles from "./Label.module.scss";

const cx = cn.bind(styles);

interface ILabel extends HTMLAttributes<HTMLDivElement> {
  theme?: string;
}

const Label: React.FC<ILabel> = ({ theme = "light", className, ...props }) => (
  <div className={cx(className, "label", `label--${theme}`)} {...props} />
);

export default Label;
