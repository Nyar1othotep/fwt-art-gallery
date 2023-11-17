import {
  useGetStaticArtistQuery,
  useGetArtistQuery,
  TArtistResponse,
} from "@/entities/artists";

type Props = {
  isAuth: boolean;
  artistId: string | undefined;
};

export const useArtistsFetchData = ({ isAuth, artistId }: Props) => {
  const {
    data: staticData = {} as TArtistResponse,
    isLoading: isStaticLoading,
  } = useGetStaticArtistQuery(artistId, {
    skip: isAuth,
  });
  const { data = {} as TArtistResponse, isLoading } = useGetArtistQuery(
    artistId,
    {
      skip: !isAuth,
    },
  );

  const artist = data ?? staticData;
  const isArtistLoading = isLoading || isStaticLoading;

  return { artist, isArtistLoading };
};
