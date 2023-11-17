import React, { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "@/features/auth";

interface IAuthGuard {
  children: ReactElement;
}

const AuthGuard: React.FC<IAuthGuard> = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) return <Navigate to="/" />;

  return children;
};

export default AuthGuard;
