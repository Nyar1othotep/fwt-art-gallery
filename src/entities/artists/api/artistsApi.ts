import { baseApi } from "@/shared/api";

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
    }),
    getArtist: build.query<IArtistDto, string | undefined>({
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
