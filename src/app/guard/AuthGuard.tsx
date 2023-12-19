import React, { ReactElement, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "@/features/auth";

interface IAuthGuard {
  children: ReactElement;
}

const AuthGuard: React.FC<IAuthGuard> = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const location = useLocation();

  if (isAuth) return <Navigate to={location.pathname} />;

  return children;
};

export default AuthGuard;
