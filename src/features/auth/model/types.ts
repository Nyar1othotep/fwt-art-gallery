export type TToken = {
  username: string;
  iat: number;
  exp: number;
};

export type TAuthResponse = {
  accessToken: string;
  refreshToken: string;
};

export type TRequestLoginBody = {
  username: string;
  password: string;
  fingerprint: string;
};

export type TErrorResponse =
  | {
      statusCode: number;
      message: string;
      error: string;
    }
  | unknown;

export type TAuthFormVariant = "login" | "register";
