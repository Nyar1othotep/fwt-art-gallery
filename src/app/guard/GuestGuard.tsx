import React, { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "@/features/auth";

interface IGuestGuard {
  children: ReactElement;
}

const GuestGuard: React.FC<IGuestGuard> = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) return <Navigate to="/" />;

  return children;
};

export default GuestGuard;
