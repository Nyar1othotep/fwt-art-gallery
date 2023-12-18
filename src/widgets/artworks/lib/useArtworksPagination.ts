import { useState } from "react";

import { IPaintingDto } from "@/entities/artists";
import { getTotalPages } from "@/shared/lib/getTotalPages";

import { getInitialArtworks } from "./getInitialArtworks";

const perPage = 9;

export const useArtworksPagination = <T extends IPaintingDto[]>(
  artworks: T,
) => {
  const totalPages = getTotalPages(artworks.length, perPage);
  const [paintings, setPaintings] = useState(() =>
    getInitialArtworks(artworks, perPage),
  );

  const handlePageChange = (selectedPage: number) => {
    const startIndex = (selectedPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    setPaintings(artworks.slice(startIndex, endIndex));
  };

  return { paintings, totalPages, handlePageChange };
};
