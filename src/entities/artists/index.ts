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

export { useDragAndDrop } from "./lib/useDragAndDrop";

export { DeleteModal } from "./ui/DeleteModal";

export { DraggebleWrapper } from "./ui/DraggebleWrapper";
