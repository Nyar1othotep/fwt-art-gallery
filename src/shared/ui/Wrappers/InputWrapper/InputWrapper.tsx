import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import { ReactComponent as IconError } from "../../../assets/error_icon.svg";
import { TInputWrapperVariant } from "../../../model/types";

import styles from "./InputWrapper.moule.scss";

const cx = cn.bind(styles);

interface IInputWrapper extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  label?: string;
  theme?: string;
  variant?: TInputWrapperVariant;
  error?: string;
}

const InputWrapper: React.FC<IInputWrapper> = ({
  className,
  name,
  label,
  theme = "light",
  variant = "default",
  error,
  children,
}) => {
  return (
    <div
      className={cx(className, "input-wrapper", `input-wrapper--${variant}`)}
    >
      {name && (
        <label
          className={cx(
            "input-wrapper__label",
            `input-wrapper__label--${theme}`,
          )}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div
        className={cx(
          "input-wrapper__children",
          { "input-wrapper__children--error": !!error },
          `input-wrapper__children--${theme}`,
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
};

export default InputWrapper;
