import { baseApi, TAuthResponse, TRequestAuthBody } from "@/shared/api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<TAuthResponse, TRequestAuthBody>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
    }),
    register: build.mutation<TAuthResponse, TRequestAuthBody>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
