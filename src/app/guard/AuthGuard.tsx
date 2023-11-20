import React, { ReactElement, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "@/features/auth";

interface IAuthGuard {
  children: ReactElement;
}

const AuthGuard: React.FC<IAuthGuard> = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const location = useLocation();

  const to = location.pathname.replace(/\/(login|register)$/i, "");

  if (isAuth) return <Navigate to={`${to}/`} />;

  return children;
};

export default AuthGuard;
