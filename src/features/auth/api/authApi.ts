import { baseApi, IAuthDto, IRequestAuthBody } from "@/shared/api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<IAuthDto, IRequestAuthBody>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
      invalidatesTags: ["Artists", "Artist"],
    }),
    register: build.mutation<IAuthDto, IRequestAuthBody>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        data,
      }),
      invalidatesTags: ["Artists", "Artist"],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
