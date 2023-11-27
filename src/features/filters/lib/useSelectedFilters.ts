import { useState, useEffect } from "react";

import { IFilters } from "../model/types";

import { removeGenre } from "./removeGenre";

export const useSelectedFilters = (filters: IFilters) => {
  const [selectedGengres, setSelectedGengres] = useState("");

  useEffect(() => {
    if (filters.genres) {
      setSelectedGengres(filters.genres);
    } else {
      setSelectedGengres("");
    }
  }, [filters.genres]);

  const handleSelect = (genre: string) =>
    setSelectedGengres((prev) => {
      if (prev?.includes(genre)) return removeGenre(prev, genre);

      if (!prev) return genre;

      return `${prev},${genre}`;
    });

  return { selectedGengres, handleSelect };
};
