import { baseApi } from "@/shared/api";

export const artistsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.query({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginQuery } = artistsApi;
