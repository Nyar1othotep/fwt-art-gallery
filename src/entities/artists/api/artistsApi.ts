import { baseApi } from "@/shared/api";

export const artistsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getArtists: build.query({
      query: ({ filters, isAuth }) => ({
        url: `/artists${!isAuth ? "/static" : ""}`,
        method: "get",
        params: filters,
      }),
    }),
  }),
});

export const { useGetArtistsQuery } = artistsApi;
