import { baseApi } from "@/shared/api";

import { TArtistsResponse, TStaticArtistsResponse } from "../model/types";

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
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.data.push(...newItems.data);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: ["AUTH"],
    }),
  }),
});

export const { useGetStaticArtistsQuery, useGetArtistsQuery } = artistsApi;
