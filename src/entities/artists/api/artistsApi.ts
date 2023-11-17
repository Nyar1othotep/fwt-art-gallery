import { baseApi } from "@/shared/api";

import {
  TArtistResponse,
  TArtistsResponse,
  TStaticArtistsResponse,
} from "../model/types";

export const artistsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getStaticArtists: build.query<TStaticArtistsResponse, void>({
      query: () => ({
        url: "/artists/static",
        method: "get",
      }),
    }),
    getArtists: build.query<TArtistsResponse, any>({
      query: ({ filters }) => ({
        url: "/artists",
        method: "get",
        params: filters,
      }),
      providesTags: ["AUTH"],
    }),
    getStaticArtist: build.query<TArtistResponse, string | undefined>({
      query: (id) => ({
        url: `/artists/static/${id}`,
        method: "get",
      }),
    }),
    getArtist: build.query<TArtistResponse, string | undefined>({
      query: (id) => ({
        url: `/artists/${id}`,
        method: "get",
      }),
    }),
  }),
});

export const {
  useGetStaticArtistsQuery,
  useGetArtistsQuery,
  useGetStaticArtistQuery,
  useGetArtistQuery,
} = artistsApi;
