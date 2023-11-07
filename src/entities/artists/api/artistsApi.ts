import { baseApi } from "@/shared/api";

import { StaticDto } from "../model/types";

export const artistsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getArtists: build.query<StaticDto[], any>({
      query: ({ filters, isAuth }) => ({
        url: `/artists${!isAuth ? "/static" : ""}`,
        method: "get",
        params: filters,
      }),
    }),
  }),
});

export const { useGetArtistsQuery } = artistsApi;
