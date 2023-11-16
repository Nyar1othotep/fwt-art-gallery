import axios from "axios";
import Cookies from "js-cookie";

import { API_URL } from "../config";
import { getFingerprint } from "../lib/fingerprint";
import { isTokenExpired, setTokensToCookie } from "../lib/tokens";

import { TAuthResponse, TRequestRefreshBody } from "./types";

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
    const fingerprint = await getFingerprint();
    const refreshToken = Cookies.get("refreshToken");

    if (!refreshToken || isTokenExpired(refreshToken!)) {
      throw error;
    }

    if (error.response.status === 401 && error.config) {
      const response = await axios.post<TAuthResponse>(
        `${API_URL}/auth/refresh`,
        {
          refreshToken,
          fingerprint,
        } as TRequestRefreshBody,
      );
      setTokensToCookie(response.data);

      return instance.request(originalRequest);
    }

    throw error;
  },
);

export default instance;
