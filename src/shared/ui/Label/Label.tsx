import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import { ReactComponent as IconX } from "../../assets/close_icon.svg";

import styles from "./Label.module.scss";

const cx = cn.bind(styles);

interface ILabel extends HTMLAttributes<HTMLDivElement> {
  theme?: string;
  onCancel?: (event: React.SyntheticEvent) => void;
}

const Label: React.FC<ILabel> = ({
  theme = "light",
  onCancel,
  className,
  children,
}) => (
  <div className={cx(className, "label", `label--${theme}`)}>
    {children}
    {onCancel && <IconX className={cx("label__icon")} onClick={onCancel} />}
  </div>
);

export default Label;
