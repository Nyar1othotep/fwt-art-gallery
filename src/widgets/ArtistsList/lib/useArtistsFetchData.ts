import {
  useGetStaticArtistsQuery,
  TArtistsResponse,
  useGetArtistsQuery,
  TStaticArtistsResponse,
} from "@/entities/artists";

import { getTotalPages } from "./getTotalPages";

type Props = {
  isAuth: boolean;
  filters: TFilters;
  pageNumber: number;
};

// TODO: Add Filters context
type TFilters = {
  perPage: number;
};

export const useArtistsFetchData = ({ isAuth, filters, pageNumber }: Props) => {
  const {
    data: staticData = [] as TStaticArtistsResponse[],
    isLoading: isStaticLoading,
  } = useGetStaticArtistsQuery(undefined, { skip: isAuth });
  const {
    data: {
      data = [] as TStaticArtistsResponse[],
      meta: { count = 0, perPage = 0 } = {},
    } = {} as TArtistsResponse,
    isLoading,
  } = useGetArtistsQuery(
    {
      filters: {
        ...filters,
        perPage: filters.perPage * pageNumber,
        pageNumber: 1,
      },
    },
    { skip: !isAuth },
  );

  const totalPages = getTotalPages(count, perPage);

  return {
    artists: isAuth ? data : staticData,
    totalPages,
    isLoading: isAuth ? isLoading : isStaticLoading,
  };
};
