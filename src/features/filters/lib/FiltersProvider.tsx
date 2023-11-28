import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useSearchParams } from "react-router-dom";

import { AuthContext } from "@/features/auth";

import { IFilters } from "../model/types";

import { removeEmpty } from "./removeEmpty";

interface IFiltersContext<T> {
  filters: T;
  setFilters: (newFilters: T) => void;
  clearFilters: () => void;
  removeFilters: () => void;
}

const defaultFilters = {
  perPage: "6",
  pageNumber: "1",
};

export const FiltersContext = React.createContext(
  {} as IFiltersContext<IFilters>,
);

const FiltersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const [params, setParams] = useSearchParams();
  const filters = useMemo(
    () => Object.fromEntries(params) as unknown as IFilters,
    [params],
  );

  useEffect(() => {
    if (isAuth && !params.toString() && window.location.pathname === "/") {
      setParams(defaultFilters);
    }
  });

  const setFilters = useCallback(
    (newFilters: IFilters) => setParams(removeEmpty(newFilters)),
    [setParams],
  );

  const clearFilters = useCallback(() => {
    setParams(defaultFilters);
  }, [setParams]);

  const removeFilters = useCallback(() => {
    setParams({});
  }, [setParams]);

  return (
    <FiltersContext.Provider
      value={{ filters, setFilters, clearFilters, removeFilters }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;