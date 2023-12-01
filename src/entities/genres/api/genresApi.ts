import { baseApi, IGenres } from "@/shared/api";

export const genresApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getGenres: build.query<IGenres[], void>({
      query: () => ({
        url: "/genres",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetGenresQuery } = genresApi;
