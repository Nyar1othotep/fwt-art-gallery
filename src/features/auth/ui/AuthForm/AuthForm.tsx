import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames/bind";
import React, { HTMLAttributes, useEffect } from "react";
import { useForm } from "react-hook-form";

import { isFetchBaseQueryError } from "@/shared/api";

import { TAuthSchema, authSchema } from "../../model/authSchema";
import { TErrorResponse } from "../../model/types";

import styles from "./AuthForm.module.scss";

const cx = cn.bind(styles);

interface IAuthForm extends HTMLAttributes<HTMLFormElement> {
  isError: boolean;
  error: TErrorResponse;
  onSubmitHandler: ({ email, password }: TAuthSchema) => void;
}

const AuthForm: React.FC<IAuthForm> = ({ isError, error, onSubmitHandler }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(authSchema) });

  useEffect(() => {
    if (isError && isFetchBaseQueryError(error)) {
      setError("email", {
        type: "server",
        message: error.data.message,
      });
    }
  }, [isError]);

  return (
    <form className={cx("auth-form")} onSubmit={handleSubmit(onSubmitHandler)}>
      <input type="text" {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="password" {...register("password")} />
      <p>{errors.password?.message}</p>
      <input type="submit" value="send" />
    </form>
  );
};

export default AuthForm;
