import {
  useGetStaticArtistsQuery,
  IArtistsDto,
  useGetArtistsQuery,
} from "@/entities/artists";
import { IFilters } from "@/features/filters";

import { getTotalPages } from "./getTotalPages";

type Props = {
  isAuth: boolean;
  filters: IFilters;
};

export const useArtistsFetchData = ({ isAuth, filters }: Props) => {
  const { perPage: filtersPerPage = 0, pageNumber = 0 } = filters;
  const { data: staticData, isLoading: isStaticLoading } =
    useGetStaticArtistsQuery(undefined, { skip: isAuth });
  const { data = {}, isLoading } = useGetArtistsQuery(
    {
      filters: {
        ...filters,
        perPage: Number(filtersPerPage) * Number(pageNumber),
        pageNumber: 1,
      },
    },
    { skip: !isAuth },
  );
  const { data: artistData, meta: { count = 0 } = {} } = data as IArtistsDto;

  const totalPages = getTotalPages(count, Number(filtersPerPage));

  return {
    artists: isAuth ? artistData : staticData,
    totalPages,
    isArtistsLoading: isAuth ? isLoading : isStaticLoading,
  };
};
