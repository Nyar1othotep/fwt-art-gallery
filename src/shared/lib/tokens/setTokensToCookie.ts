import Cookies from "js-cookie";

import { TAuthResponse } from "../../api";

import { getTokensExpires } from "./getTokensExpires";

export const setTokensToCookie = (tokens: TAuthResponse) => {
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
