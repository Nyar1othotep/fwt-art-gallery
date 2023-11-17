import React, { PropsWithChildren, useCallback, useState } from "react";

import { TAuthResponse } from "@/shared/api";
import {
  removeTokensFromCookies,
  setTokensToCookie,
} from "@/shared/lib/tokens";

import { getIsAuth } from "./getIsAuth";

interface IAuthContext {
  isAuth: boolean;
  onLogout: () => void;
  setTokens: (tokens: TAuthResponse) => void;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext,
);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => getIsAuth());

  const setTokens = useCallback((tokens: TAuthResponse) => {
    setTokensToCookie(tokens);
    setIsAuth(true);
  }, []);

  const onLogout = useCallback(() => {
    removeTokensFromCookies();
    setIsAuth(false);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ isAuth, setTokens, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
