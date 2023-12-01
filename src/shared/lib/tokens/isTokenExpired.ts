import { jwtDecode } from "jwt-decode";

export const isTokenExpired = (token: string) => {
  const { exp } = jwtDecode(token);

  return !exp || exp * 1000 < new Date().getTime();
};
