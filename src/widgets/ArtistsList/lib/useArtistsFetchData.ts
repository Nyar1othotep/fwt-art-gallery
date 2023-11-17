import {
  useGetStaticArtistsQuery,
  TArtistsResponse,
  useGetArtistsQuery,
  TStaticArtistsResponse,
} from "@/entities/artists";

import { getTotalPages } from "./getTotalPages";

type Props = {
  isAuth: boolean;
  filters: object;
  pageNumber: number;
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
      filters: { ...filters, pageNumber },
    },
    { skip: !isAuth },
  );

  const totalPages = getTotalPages(count, perPage);
  const artists = data ?? staticData;
  const isArtistsLoading = isLoading || isStaticLoading;

  return { artists, totalPages, isArtistsLoading };
};
