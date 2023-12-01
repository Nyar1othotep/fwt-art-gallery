import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import { ReactComponent as IconError } from "../../../assets/error_icon.svg";

import styles from "./InputWrapper.moule.scss";

const cx = cn.bind(styles);

interface IInputWrapper extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  label?: string;
  theme?: string;
  error?: string;
}

const InputWrapper: React.FC<IInputWrapper> = ({
  className,
  name,
  label,
  theme = "light",
  error,
  children,
}) => (
  <div className={cx(className, "input-wrapper", `input-wrapper--${theme}`)}>
    {name && (
      <label className={cx("input-wrapper__label")} htmlFor={name}>
        {label}
      </label>
    )}
    <div
      className={cx(
        "input-wrapper__children",

        { "input-wrapper__children--error": !!error },
      )}
    >
      {children}
    </div>
    {error && (
      <div className={cx("input-wrapper__error")}>
        <IconError />
        {error}
      </div>
    )}
  </div>
);

export default InputWrapper;
