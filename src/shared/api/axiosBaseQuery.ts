import type { BaseQueryFn } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import type { AxiosError, AxiosRequestConfig } from "axios";

import instance from "./axiosInstanse";
import { AxiosBaseQueryError } from "./types";

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    AxiosBaseQueryError
  > =>
  async (config) => {
    try {
      const result = await instance(config);

      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        } as AxiosBaseQueryError,
      };
    }
  };
