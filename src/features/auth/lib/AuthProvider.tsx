import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

import { IAuthDto } from "@/shared/api";
import {
  removeTokensFromCookies,
  setTokensToCookie,
} from "@/shared/lib/tokens";

import { getIsAuth } from "./getIsAuth";

interface IAuthContext {
  isAuth: boolean;
  onLogout: () => void;
  setTokens: (tokens: IAuthDto) => void;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext,
);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => getIsAuth());

  const setTokens = useCallback(
    (tokens: IAuthDto) => {
      setTokensToCookie(tokens);
      setIsAuth(true);
    },
    [setIsAuth, setTokensToCookie],
  );

  const onLogout = useCallback(() => {
    removeTokensFromCookies();
    setIsAuth(false);
  }, [setIsAuth, removeTokensFromCookies]);

  const value = useMemo(() => ({ isAuth, setTokens, onLogout }), [isAuth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
