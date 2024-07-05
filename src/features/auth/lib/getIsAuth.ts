import Cookies from "js-cookie";

import { isTokenExpired } from "@/shared/lib/tokens";

export const getIsAuth = () => {
  const refreshToken = Cookies.get("refreshToken");

  return !!refreshToken && !isTokenExpired(refreshToken);
};
