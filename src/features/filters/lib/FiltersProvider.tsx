import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import { AuthContext } from "@/features/auth";

import { IFilters } from "../model/types";

import { toParams } from "./toParams";

interface IFiltersContext {
  filters: IFilters;
}

const defaultFilters = {
  perPage: "6",
  pageNumber: "1",
};

export const FiltersContext = React.createContext({} as IFiltersContext);

const FiltersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const search = window.location.search.substring(1);
  const { isAuth } = useContext(AuthContext);
  const [filters] = useState<IFilters>(
    JSON.parse(
      `{"${decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')}"}`,
    ),
  );

  useEffect(() => {
    if (isAuth && !window.location.search && window.location.pathname === "/") {
      window.location.search = toParams(defaultFilters);
    }
  });

  // TODO: Covert that ↑ shit to useSearchParams

  // const setFilters = (newFilters: IFilters) => {
  //   setParams(newFilters);
  // };

  // const clearFilters = () => {
  //   setParams(defaultFilters);
  // };

  return (
    <FiltersContext.Provider value={{ filters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
