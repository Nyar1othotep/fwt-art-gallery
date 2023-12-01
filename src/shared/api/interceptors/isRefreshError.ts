export const isRefreshError = (refreshError: any) =>
  refreshError.response?.status === 401 &&
  refreshError.config.url?.includes("refresh");
