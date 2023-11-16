import { jwtDecode } from "jwt-decode";

import { TAuthResponse } from "../../api";
import { TToken } from "../../model/types";

export const getTokensExpires = (tokens: TAuthResponse) => {
  const { exp: expAccess } = jwtDecode<TToken>(tokens.accessToken);
  const { exp: expRefresh } = jwtDecode<TToken>(tokens.refreshToken);

  return {
    expAccessIn: new Date(expAccess * 1000),
    expexpRefreshIn: new Date(expRefresh * 1000),
  };
};
