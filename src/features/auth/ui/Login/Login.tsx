import React, { useCallback, useContext, useEffect } from "react";

import { ThemeContext } from "@/features/theme";
import { AxiosBaseQueryError } from "@/shared/api";

import { useLoginMutation } from "../../api/authApi";
import { AuthContext } from "../../lib/AuthProvider";
import { useFingerprint } from "../../lib/fingerprint";
import { TAuthSchema } from "../../model/authSchema";
import { TRequestAuthBody } from "../../model/types";
import { AuthForm } from "../AuthForm";
import { AuthModal } from "../AuthModal";

const Login: React.FC = () => {
  const variant = "login";
  const fingerprint = useFingerprint();
  const { theme } = useContext(ThemeContext);
  const [
    login,
    { isSuccess, data, isError, error = {} as AxiosBaseQueryError },
  ] = useLoginMutation();
  const { setTokens } = useContext(AuthContext);

  useEffect(() => {
    if (isSuccess && data) setTokens(data);
  }, [isSuccess]);

  const onSubmit = useCallback(
    ({ email, password }: TAuthSchema) => {
      login({ username: email, password, fingerprint } as TRequestAuthBody);
    },
    [fingerprint],
  );

  return (
    <AuthModal theme={theme} isClose={isSuccess} variant={variant}>
      <AuthForm
        theme={theme}
        error={error}
        isError={isError}
        variant={variant}
        onSubmitHandler={onSubmit}
      />
    </AuthModal>
  );
};

export default Login;
