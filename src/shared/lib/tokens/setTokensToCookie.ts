import Cookies from "js-cookie";

import { IAuthDto } from "../../api";

import { getTokensExpires } from "./getTokensExpires";

export const setTokensToCookie = (tokens: IAuthDto) => {
  const expires = getTokensExpires(tokens);

  Cookies.set("accessToken", tokens.accessToken, {
    expires: expires.expAccessIn,
    secure: true,
    sameSite: "Strict",
  });

  Cookies.set("refreshToken", tokens.refreshToken, {
    expires: expires.expexpRefreshIn,
    secure: true,
    sameSite: "Strict",
  });
};
