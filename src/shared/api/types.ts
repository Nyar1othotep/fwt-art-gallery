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
