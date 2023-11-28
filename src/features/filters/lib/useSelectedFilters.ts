import { useEffect, useState } from "react";

import { IFilters } from "../model/types";

import { setGenre } from "./genres";

interface ISelected {
  type?: string;
  genre?: string;
  orderBy?: string;
}

export const useSelectedFilters = (filters: IFilters) => {
  const [selectedFilters, setSelectedFilters] = useState<IFilters>(filters);

  useEffect(() => setSelectedFilters(filters), [filters]);

  const handleSelect = (selected: ISelected) => {
    if (selected.type === "genres" && selected.genre) {
      setSelectedFilters({
        ...selectedFilters,
        genres: setGenre(selectedFilters.genres!, selected.genre),
      });
    } else {
      setSelectedFilters({ ...selectedFilters, orderBy: selected.orderBy });
    }
  };

  return { selectedFilters, handleSelect };
};
