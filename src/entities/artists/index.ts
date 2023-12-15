export {
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
} from "./api/artistsApi";

export type {
  IPaintingDto,
  IArtistsDto,
  IStaticArtistsDto,
  IArtistDto,
} from "./model/types";

export { DeleteModal } from "./ui/DeleteModal";
