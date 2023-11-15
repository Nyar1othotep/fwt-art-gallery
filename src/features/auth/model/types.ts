export type TToken = {
  username: string;
  iat: number;
  exp: number;
};

export type TAuthResponse = {
  accessToken: string;
  refreshToken: string;
};

export type TRequestAuthBody = {
  username: string;
  password: string;
  fingerprint: string;
};

export type TAuthVariant = "login" | "register";
