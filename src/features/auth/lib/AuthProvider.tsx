import Cookies from "js-cookie";
import React, { HTMLAttributes, useCallback, useState } from "react";

import { TAuthResponse } from "../model/types";

import { removeTokensFromCookies, setTokensToCookie } from "./tokens";

interface IAuthContext {
  isAuth: boolean;
  setTokens: (tokens: TAuthResponse) => void;
  onLogout: () => void;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext,
);

const AuthProvider: React.FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!Cookies.get("refreshToken"));

  const setTokens = useCallback((tokens: TAuthResponse) => {
    setTokensToCookie(tokens);
    setIsAuth(true);
  }, []);

  const onLogout = () => {
    setIsAuth(false);
    removeTokensFromCookies();
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ isAuth, setTokens, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
