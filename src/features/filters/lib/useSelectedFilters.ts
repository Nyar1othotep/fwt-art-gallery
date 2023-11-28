import { useEffect, useState } from "react";

import { IFilters, ISelected } from "../model/types";

import { setGenre } from "./genres";

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
      setSelectedFilters({
        ...selectedFilters,
        sortBy: !selected.orderBy ? "" : "name",
        orderBy: selected.orderBy,
      });
    }
  };

  return { selectedFilters, handleSelect };
};
