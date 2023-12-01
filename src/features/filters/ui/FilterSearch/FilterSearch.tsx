import React, { useContext, useEffect, useState } from "react";

import { ThemeContext } from "@/features/theme";
import { Search } from "@/shared/ui/Search";

import { FiltersContext } from "../../lib/FiltersProvider";
import { isEmptyString } from "../../lib/isEmptyString";
import { useDebounce } from "../../lib/useDebounce";

const FilterSearch: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const { filters, setFilters } = useContext(FiltersContext);
  const [text, setText] = useState("");
  const debouncedValue = useDebounce(text);

  useEffect(() => {
    if (debouncedValue !== null) {
      setFilters({
        ...filters,
        name: isEmptyString(debouncedValue),
      });
    }
  }, [debouncedValue]);

  const handleSearch = (value: string) => setText(value);

  return (
    <Search
      theme={theme}
      initValue={filters?.name}
      placeholder="Search"
      onSearchChange={handleSearch}
    />
  );
};

export default FilterSearch;
