import React, { useCallback, useContext, useEffect } from "react";

import { ThemeContext } from "@/features/theme";
import { IRequestAuthBody, isAxiosBaseQueryError } from "@/shared/api";
import { useFingerprint } from "@/shared/lib/fingerprint";

import { useLoginMutation } from "../../api/authApi";
import { AuthContext } from "../../lib/AuthProvider";
import { IAuthSchema } from "../../model/authSchema";
import { AuthForm } from "../AuthForm";
import { AuthModal } from "../AuthModal";

const Login: React.FC = () => {
  const variant = "login";
  const fingerprint = useFingerprint();
  const { theme } = useContext(ThemeContext);
  const [login, { isSuccess, data, isError, error }] = useLoginMutation();
  const { setTokens } = useContext(AuthContext);

  useEffect(() => {
    if (isSuccess && data) setTokens(data);
  }, [isSuccess]);

  const onSubmit = useCallback(
    ({ email, password }: IAuthSchema) => {
      login({ username: email, password, fingerprint } as IRequestAuthBody);
    },
    [fingerprint],
  );

  const errorMessage = isAxiosBaseQueryError(error) ? error.data.message : "";

  return (
    <AuthModal theme={theme} isClose={isSuccess} variant={variant}>
      <AuthForm
        theme={theme}
        isError={isError}
        variant={variant}
        errorMessage={errorMessage}
        onSubmitHandler={onSubmit}
      />
    </AuthModal>
  );
};

export default Login;
