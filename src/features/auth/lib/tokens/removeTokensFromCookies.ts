import Cookies from "js-cookie";

export const removeTokensFromCookies = () => {
  Cookies.remove("accessToken", { path: "" });
  Cookies.remove("refreshToken", { path: "" });
};
