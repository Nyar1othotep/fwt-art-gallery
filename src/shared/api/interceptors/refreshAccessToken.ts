import axios from "axios";

import { API_URL } from "@/shared/config";
import { getFingerprint } from "@/shared/lib/fingerprint";

import { IAuthDto, IRequestRefreshBody } from "../types";

export const refreshAccessToken = async (
  refreshToken: string,
): Promise<IAuthDto> => {
  const fingerprint = await getFingerprint();
  const response = await axios.post<IAuthDto>(`${API_URL}/auth/refresh`, {
    refreshToken,
    fingerprint,
  } as IRequestRefreshBody);

  return response.data;
};
