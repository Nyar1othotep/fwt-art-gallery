import { AxiosError } from "axios";

export const isUnauthorizedError = (error: AxiosError) =>
  error.response?.status === 401 && error.config;
