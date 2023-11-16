import React, { useCallback, useContext, useEffect } from "react";

import { ThemeContext } from "@/features/theme";
import { AxiosBaseQueryError, TRequestAuthBody } from "@/shared/api";
import { useFingerprint } from "@/shared/lib/fingerprint";

import { useRegisterMutation } from "../../api/authApi";
import { AuthContext } from "../../lib/AuthProvider";
import { TAuthSchema } from "../../model/authSchema";
import { AuthForm } from "../AuthForm";
import { AuthModal } from "../AuthModal";

const Register: React.FC = () => {
  const variant = "register";
  const fingerprint = useFingerprint();
  const { theme } = useContext(ThemeContext);
  const [
    register,
    { isSuccess, data, isError, error = {} as AxiosBaseQueryError },
  ] = useRegisterMutation();
  const { setTokens } = useContext(AuthContext);

  useEffect(() => {
    if (isSuccess && data) setTokens(data);
  }, [isSuccess]);

  const onSubmit = useCallback(
    ({ email, password }: TAuthSchema) => {
      register({ username: email, password, fingerprint } as TRequestAuthBody);
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

export default Register;
