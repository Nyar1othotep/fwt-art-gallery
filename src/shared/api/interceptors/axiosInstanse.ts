import axios from "axios";
import Cookies from "js-cookie";

import { API_URL } from "../../config";
import { isTokenExpired, setTokensToCookie } from "../../lib/tokens";
import { IRetryQueueItem } from "../types";

import { isRefreshError } from "./isRefreshError";
import { isUnauthorizedError } from "./isUnauthorizedError";
import { pushRequestInQueue } from "./pushRequestInQueue";
import { refreshAccessToken } from "./refreshAccessToken";

const requestsQueue: IRetryQueueItem[] = [];
let isRefreshing = false;

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use((config) => {
  const newConfig = config;

  if (Cookies.get("accessToken")) {
    newConfig.headers.Authorization = `Bearer ${Cookies.get("accessToken")}`;
  }

  return newConfig;
});

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = Cookies.get("refreshToken");

    if (!refreshToken || isTokenExpired(refreshToken!)) {
      throw error;
    }

    if (isUnauthorizedError(error)) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const refreshedToken = await refreshAccessToken(refreshToken);
          setTokensToCookie(refreshedToken);

          requestsQueue.forEach(({ config, resolve }) => {
            instance.request(config).then((res) => resolve(res));
          });
          requestsQueue.length = 0;

          return await instance(originalRequest);
        } catch (refreshError: any) {
          if (isRefreshError(refreshError)) {
            throw refreshError;
          }
        } finally {
          isRefreshing = false;
        }
      }

      return pushRequestInQueue(originalRequest, requestsQueue);
    }

    throw error;
  },
);

export default instance;
