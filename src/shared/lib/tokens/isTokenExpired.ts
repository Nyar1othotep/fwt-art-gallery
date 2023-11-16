import { jwtDecode } from "jwt-decode";

export const isTokenExpired = (token: string) => {
  const { exp } = jwtDecode(token);

  if (!exp) {
    return true;
  }

  const currentDate = new Date();

  if (exp * 1000 < currentDate.getTime()) {
    return true;
  }

  return false;
};
