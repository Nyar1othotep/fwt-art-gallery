import { AxiosError } from "axios";

export const isRefreshError = (refreshError: AxiosError) =>
  refreshError.response?.status === 401 &&
  refreshError.config?.url?.includes("refresh");
