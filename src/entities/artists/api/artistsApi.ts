import { baseApi } from "@/shared/api";

import { TArtistsResponse, TDataDto } from "../model/types";

export const artistsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getStaticArtists: build.query<TDataDto, void>({
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
        // Временное решение до реализации авторизации
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY5OTQ1NDE4MywiZXhwIjoxNjk5NDc1NzgzfQ.xWnp3IjutTu_kuaPAU-LKUnIRIxZZGqOh-XjF_GsJdI",
        },
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.data.push(...newItems.data);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetStaticArtistsQuery, useGetArtistsQuery } = artistsApi;
