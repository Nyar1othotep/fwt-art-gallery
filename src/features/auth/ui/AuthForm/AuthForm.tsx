import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames/bind";
import React, { HTMLAttributes, useEffect } from "react";
import { useForm } from "react-hook-form";

import { AxiosBaseQueryError } from "@/shared/api";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

import { getNameError } from "../../lib/getNameError";
import { TAuthSchema, authSchema } from "../../model/authSchema";
import { TAuthVariant } from "../../model/types";

import styles from "./AuthForm.module.scss";

const cx = cn.bind(styles);

interface IAuthForm extends HTMLAttributes<HTMLElement> {
  theme?: string;
  error: AxiosBaseQueryError;
  isError: boolean;
  variant: TAuthVariant;
  onSubmitHandler: ({ email, password }: TAuthSchema) => void;
}

const AuthForm: React.FC<IAuthForm> = ({
  theme,
  error,
  isError,
  variant,
  onSubmitHandler,
}) => {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(authSchema) });

  useEffect(() => {
    if (isError && "data" in error) {
      setError(getNameError(error), {
        message: error.data.message,
      });
    }
  }, [isError, error]);

  return (
    <form className={cx("auth-form")} onSubmit={handleSubmit(onSubmitHandler)}>
      <Input
        type="text"
        name="email"
        label="Email"
        theme={theme}
        error={errors.email?.message}
        register={{ ...register("email") }}
      />
      <Input
        type="password"
        name="password"
        label="Password"
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
