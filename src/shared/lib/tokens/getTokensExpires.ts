import { jwtDecode } from "jwt-decode";

import { IAuthDto } from "../../api";
import { IToken } from "../../model/types";

export const getTokensExpires = (tokens: IAuthDto) => {
  const { exp: expAccess } = jwtDecode<IToken>(tokens.accessToken);
  const { exp: expRefresh } = jwtDecode<IToken>(tokens.refreshToken);

  return {
    expAccessIn: new Date(expAccess * 1000),
    expexpRefreshIn: new Date(expRefresh * 1000),
  };
};
