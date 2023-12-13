import { GenericFormData } from "axios";

import { baseApi } from "@/shared/api";

import {
  IArtistDto,
  IArtistEditBody,
  IArtistsDto,
  IStaticArtistsDto,
} from "../model/types";

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
      providesTags: ["Artist"],
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
      providesTags: ["Artist"],
    }),
    createArtist: build.mutation<IArtistDto, GenericFormData>({
      query: (data) => ({
        url: "/artists",
        method: "POST",
        data,
      }),
      invalidatesTags: ["Artist"],
    }),
    editArtist: build.mutation<IArtistDto, IArtistEditBody>({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/artists/${id}`,
        data,
      }),
      invalidatesTags: ["Artist"],
    }),
  }),
});

export const {
  useGetStaticArtistsQuery,
  useGetArtistsQuery,
  useGetStaticArtistQuery,
  useGetArtistQuery,
  useCreateArtistMutation,
  useEditArtistMutation,
} = artistsApi;
