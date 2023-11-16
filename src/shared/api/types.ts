import { SerializedError } from "@reduxjs/toolkit";

export type AxiosBaseQueryError =
  | {
      status: number;
      data: {
        statusCode: number;
        message: string;
        error: string;
      };
    }
  | SerializedError;

export type TAuthResponse = {
  accessToken: string;
  refreshToken: string;
};

export type TRequestAuthBody = {
  username: string;
  password: string;
  fingerprint: string;
};

export type TRequestRefreshBody = {
  refreshToken: string;
  fingerprint: string;
};
