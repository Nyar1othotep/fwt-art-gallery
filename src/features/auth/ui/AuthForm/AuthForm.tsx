import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames/bind";
import React, { HTMLAttributes, useEffect } from "react";
import { useForm } from "react-hook-form";

import { isAxiosBaseQueryError } from "@/shared/api";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

import { TAuthSchema, authSchema } from "../../model/authSchema";
import { TAuthFormVariant, TErrorResponse } from "../../model/types";

import styles from "./AuthForm.module.scss";

const cx = cn.bind(styles);
interface IAuthForm extends HTMLAttributes<HTMLFormElement> {
  theme?: string;
  isError: boolean;
  error: TErrorResponse;
  variant: TAuthFormVariant;
  onSubmitHandler: ({ email, password }: TAuthSchema) => void;
}

const AuthForm: React.FC<IAuthForm> = ({
  theme,
  isError,
  error,
  variant,
  onSubmitHandler,
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(authSchema) });

  useEffect(() => {
    if (isError && isAxiosBaseQueryError(error)) {
      setError("email", {
        type: "server",
        message: error.data.message,
      });
    }
  }, [isError]);

  return (
    <form className={cx("auth-form")} onSubmit={handleSubmit(onSubmitHandler)}>
      <Input
        type="text"
        label="Email"
        name="email"
        theme={theme}
        error={errors.email?.message}
        register={{ ...register("email") }}
      />
      <Input
        type="password"
        label="Password"
        name="password"
        theme={theme}
        error={errors.password?.message}
        register={{ ...register("password") }}
      />
      <Button theme={theme}>
        {variant === "login" ? "Log in" : "Sing up"}
      </Button>
    </form>
  );
};

export default AuthForm;
