import { baseApi } from "@/shared/api";

import { transformArtistResponse } from "../lib/transformArtistResponse";
import {
  TArtistResponse,
  TArtistsResponse,
  TStaticArtistsResponse,
} from "../model/types";

export const artistsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getStaticArtists: build.query<TStaticArtistsResponse[], void>({
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
    }),
    getStaticArtist: build.query<TArtistResponse, string | undefined>({
      query: (id) => ({
        url: `/artists/static/${id}`,
        method: "get",
      }),
      transformResponse: transformArtistResponse,
    }),
    getArtist: build.query<TArtistResponse, string | undefined>({
      query: (id) => ({
        url: `/artists/${id}`,
        method: "get",
      }),
      transformResponse: transformArtistResponse,
    }),
  }),
});

export const {
  useGetStaticArtistsQuery,
  useGetArtistsQuery,
  useGetStaticArtistQuery,
  useGetArtistQuery,
} = artistsApi;
