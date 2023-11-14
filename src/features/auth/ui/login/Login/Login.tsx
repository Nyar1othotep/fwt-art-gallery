import React, { useCallback, useContext, useEffect } from "react";

import { AuthContext } from "@/features/auth/lib/AuthProvider";

import { useLoginMutation } from "../../../api/authApi";
import { useFingerprint } from "../../../lib/fingerprint";
import { TAuthSchema } from "../../../model/authSchema";
import { TRequestLoginBody } from "../../../model/types";
import AuthForm from "../../AuthForm/AuthForm";

const Login: React.FC = () => {
  const fingerprint = useFingerprint();
  const [login, { isSuccess, data, isError, error }] = useLoginMutation();
  const { setTokens } = useContext(AuthContext);

  useEffect(() => {
    if (isSuccess && data) {
      setTokens(data);
    }
  }, [isSuccess]);

  const onSubmit = useCallback(
    ({ email, password }: TAuthSchema) => {
      login({ username: email, password, fingerprint } as TRequestLoginBody);
    },
    [fingerprint],
  );

  return (
    <AuthForm isError={isError} error={error} onSubmitHandler={onSubmit} />
  );
};

export default Login;
