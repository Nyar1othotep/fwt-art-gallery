import { useEffect, useState } from "react";

import { IFilters } from "../model/types";

import { toggleGenre } from "./toggleGenre";

export const useSelectedFilters = (filters: IFilters) => {
  const [selectedGenresArray, setSelectedGenresArray] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    setSelectedGenresArray(filters.genres?.split(",") || []);
    setSelectedSort(filters.orderBy || "");
  }, [filters]);

  const handleSelectGenres = (genre: string) => () =>
    setSelectedGenresArray((prev) => toggleGenre(genre, prev));

  const handleSelectSort = (sort: string) => () => setSelectedSort(sort);

  return {
    selectedGenresArray,
    selectedSort,
    handleSelectGenres,
    handleSelectSort,
  };
};
