import {
  useGetStaticArtistsQuery,
  IArtistsDto,
  useGetArtistsQuery,
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
  const { data: staticData, isLoading: isStaticLoading } =
    useGetStaticArtistsQuery(undefined, { skip: isAuth });
  const { data = {}, isLoading } = useGetArtistsQuery(
    {
      filters: {
        ...filters,
        perPage: filters.perPage * pageNumber,
        pageNumber: 1,
      },
    },
    { skip: !isAuth },
  );
  const { data: artistData, meta: { count = 0, perPage = 0 } = {} } =
    data as IArtistsDto;

  const totalPages = getTotalPages(count, perPage);

  return {
    artists: isAuth ? artistData : staticData,
    totalPages,
    isLoading: isAuth ? isLoading : isStaticLoading,
  };
};
