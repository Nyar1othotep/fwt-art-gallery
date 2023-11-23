import { baseApi } from "@/shared/api";

import { transformArtistResponse } from "../lib/transformArtistResponse";
import { IArtistDto, IArtistsDto, IStaticArtistsDto } from "../model/types";

export const artistsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getStaticArtists: build.query<IStaticArtistsDto[], void>({
      query: () => ({
        url: "/artists/static",
        method: "get",
      }),
    }),
    getArtists: build.query<IArtistsDto, any>({
      query: ({ filters }) => ({
        url: "/artists",
        method: "get",
        params: filters,
      }),
    }),
    getStaticArtist: build.query<IArtistDto, string | undefined>({
      query: (id) => ({
        url: `/artists/static/${id}`,
        method: "get",
      }),
      transformResponse: transformArtistResponse,
    }),
    getArtist: build.query<IArtistDto, string | undefined>({
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
