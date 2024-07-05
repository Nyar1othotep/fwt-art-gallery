import React, {
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
} from "react";

import { AuthContext } from "@/features/auth";
import { FiltersContext } from "@/features/filters";

interface IInfiniteScroll extends PropsWithChildren {
  isLoadMore: boolean;
  totalPages: number;
}

const InfiniteScroll: React.FC<IInfiniteScroll> = ({
  children,
  isLoadMore,
  totalPages,
}) => {
  const { isAuth } = useContext(AuthContext);
  const { filters, setFilters, removeFilters } = useContext(FiltersContext);
  const { pageNumber: filtersPageNumber } = filters;

  useEffect(() => {
    if (isAuth && isLoadMore && Number(filtersPageNumber) < totalPages)
      setFilters({
        ...filters,
        pageNumber: String(Number(filtersPageNumber) + 1),
      });

    if (!isAuth) removeFilters();
  }, [isAuth, isLoadMore, totalPages]);

  return children as ReactElement;
};

export default InfiniteScroll;
