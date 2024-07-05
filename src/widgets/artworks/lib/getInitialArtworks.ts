import { IPaintingDto } from "@/entities/artists";

export const getInitialArtworks = <T extends IPaintingDto[], V extends number>(
  artworks: T,
  perPage: V,
) => (artworks.length < perPage ? artworks : artworks.slice(0, perPage));
