import cn from "classnames/bind";
import React, { TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";

import { InputWrapper } from "../Wrappers/InputWrapper";

import styles from "./TextArea.module.scss";

const cx = cn.bind(styles);

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  theme?: string;
  error?: string;
  label?: string;
  register: UseFormRegisterReturn<string>;
}

const TextArea: React.FC<ITextArea> = ({
  name,
  theme,
  error,
  label,
  register,
  className,
  ...props
}) => (
  <InputWrapper name={name} theme={theme} label={label} error={error}>
    <textarea
      id={name}
      rows={6}
      className={cx(className, "textarea", `textarea--${theme}`)}
      {...props}
      {...register}
    />
  </InputWrapper>
);

export default TextArea;
