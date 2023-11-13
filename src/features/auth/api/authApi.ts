import { baseApi } from "@/shared/api";

import { TAuthResponse, TRequestLoginBody } from "../model/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<TAuthResponse, TRequestLoginBody>({
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
