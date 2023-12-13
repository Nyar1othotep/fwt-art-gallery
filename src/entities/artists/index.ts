export {
  useGetStaticArtistsQuery,
  useGetArtistsQuery,
  useGetStaticArtistQuery,
  useGetArtistQuery,
  useCreateArtistMutation,
  useEditArtistMutation,
} from "./api/artistsApi";

export type {
  IPaintingDto,
  IArtistsDto,
  IStaticArtistsDto,
  IArtistDto,
} from "./model/types";
