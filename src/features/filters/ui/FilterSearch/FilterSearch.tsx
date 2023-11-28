import React, { useContext, useEffect, useState } from "react";

import { ThemeContext } from "@/features/theme";
import { Search } from "@/shared/ui/Search";

import { FiltersContext } from "../../lib/FiltersProvider";
import { useDebounce } from "../../lib/useDebounce";

const FilterSearch: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const { filters, setFilters } = useContext(FiltersContext);
  const [text, setText] = useState("");
  const debouncedValue = useDebounce(text);

  useEffect(() => {
    setFilters({ ...filters, name: debouncedValue });
  }, [debouncedValue]);

  const handleSearch = (value: string) => setText(value);

  return (
    <Search theme={theme} placeholder="Search" onSearchChange={handleSearch} />
  );
};

export default FilterSearch;
