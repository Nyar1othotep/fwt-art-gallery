import { baseApi } from "@/shared/api";

import { TAuthResponse, TRequestAuthBody } from "../model/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<TAuthResponse, TRequestAuthBody>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
      invalidatesTags: ["AUTH"],
    }),
  }),
});

export const { useLoginMutation } = authApi;
