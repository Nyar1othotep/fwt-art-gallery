import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { AuthContext } from "@/features/auth";

import { defaultFilters } from "../config";
import { IFilters } from "../model/types";

import { removeEmpty } from "./removeEmpty";

interface IFiltersContext<T> {
  filters: T;
  setFilters: (newFilters: T) => void;
  clearFilters: () => void;
  removeFilters: () => void;
}

export const FiltersContext = React.createContext(
  {} as IFiltersContext<IFilters>,
);

const FiltersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const { pathname } = useLocation();
  const [params, setParams] = useSearchParams();
  const filters = useMemo(
    () => Object.fromEntries(params) as unknown as IFilters,
    [params],
  );

  useEffect(() => {
    if (isAuth && !params.toString() && pathname === "/") {
      setParams(defaultFilters);
    }
  }, [isAuth, params, pathname]);

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

  const value = useMemo(
    () => ({ filters, setFilters, clearFilters, removeFilters }),
    [filters],
  );

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};

export default FiltersProvider;
