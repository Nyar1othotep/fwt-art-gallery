import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "@/features/auth/lib/AuthProvider";

import { useLoginMutation } from "../../../api/authApi";
import { useFingerprint } from "../../../lib/fingerprint";
import { authSchema, TAuthSchema } from "../../../model/authSchema";
import { TRequestLoginBody } from "../../../model/types";

const LoginForm: React.FC = () => {
  const fingerprint = useFingerprint();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(authSchema) });
  const [login, { isSuccess, data, isError, error }] = useLoginMutation();
  const { setTokens } = useContext(AuthContext);

  useEffect(() => {
    if (isSuccess && data) {
      setTokens(data);
    }
    if (isError && error) {
      setError("email", {
        type: "server",
        // @ts-ignore
        message: error.data.message,
      });
    }
  }, [isError, isSuccess]);

  const onSubmitHandler = useCallback(
    ({ email, password }: TAuthSchema) => {
      login({ username: email, password, fingerprint } as TRequestLoginBody);
    },
    [fingerprint],
  );

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input type="text" {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="password" {...register("password")} />
      <p>{errors.password?.message}</p>
      <input type="submit" value="send" />
    </form>
  );
};

export default LoginForm;
