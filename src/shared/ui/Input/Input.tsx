import cn from "classnames/bind";
import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";

import { InputWrapper } from "../Wrappers/InputWrapper";

import styles from "./Input.module.scss";

const cx = cn.bind(styles);

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  theme?: string;
  error?: string;
  label?: string;
  register: UseFormRegisterReturn<string>;
}

const Input: React.FC<IInput> = ({
  name,
  theme,
  error,
  label,
  register,
  className,
  ...props
}) => (
  <InputWrapper name={name} theme={theme} label={label} error={error}>
    <input
      id={name}
      className={cx(className, "input", `input--${theme}`)}
      {...props}
      {...register}
    />
  </InputWrapper>
);

export default Input;
