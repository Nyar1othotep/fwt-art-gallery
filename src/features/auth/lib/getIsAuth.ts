import Cookies from "js-cookie";

import { isTokenExpired } from "@/shared/lib/tokens";

export const getIsAuth = () => {
  const refreshToken = Cookies.get("refreshToken");

  if (refreshToken && isTokenExpired(refreshToken!)) {
    return false;
  }

  if (refreshToken) return true;

  return false;
};
