import { GenericFormData } from "axios";

import { baseApi } from "@/shared/api";

import {
  IArtistDto,
  IRequestArtistBody,
  IArtistsDto,
  IPaintingDto,
  IStaticArtistsDto,
  IRequestArtworkBody,
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
      providesTags: ["Artists"],
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
      invalidatesTags: ["Artists"],
    }),
    editArtist: build.mutation<IArtistDto, IRequestArtistBody>({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/artists/${id}`,
        data,
      }),
      invalidatesTags: ["Artist"],
    }),
    deleteArtist: build.mutation<null, string | undefined>({
      query: (id) => ({
        method: "DELETE",
        url: `/artists/${id}`,
      }),
      invalidatesTags: ["Artists"],
    }),
    createArtwork: build.mutation<IPaintingDto, IRequestArtistBody>({
      query: ({ id, data }) => ({
        url: `/artists/${id}/paintings`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["Artist"],
    }),
    editArtwork: build.mutation<IPaintingDto, IRequestArtworkBody>({
      query: ({ id, artworkId, data }) => ({
        url: `/artists/${id}/paintings/${artworkId}`,
        method: "PUT",
        data,
      }),
      invalidatesTags: ["Artist"],
    }),
    deleteArtwork: build.mutation<null, IRequestArtworkBody>({
      query: ({ id, artworkId }) => ({
        url: `/artists/${id}/paintings/${artworkId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Artist"],
    }),
    editArtistMainPainting: build.mutation<null, IRequestArtworkBody>({
      query: ({ id, artworkId }) => ({
        method: "PATCH",
        url: `/artists/${id}/main-painting`,
        data: { mainPainting: artworkId },
      }),
      invalidatesTags: ["Artists", "Artist"],
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
  useDeleteArtistMutation,
  useCreateArtworkMutation,
  useEditArtworkMutation,
  useDeleteArtworkMutation,
  useEditArtistMainPaintingMutation,
} = artistsApi;
