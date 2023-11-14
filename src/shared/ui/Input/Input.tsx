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
  className,
  theme,
  error,
  label,
  name,
  register,
  ...props
}) => {
  return (
    <InputWrapper theme={theme} label={label} name={name} error={error}>
      <input
        id={name}
        className={cx(className, "input", `input--${theme}`)}
        {...register}
        {...props}
      />
    </InputWrapper>
  );
};

export default Input;
