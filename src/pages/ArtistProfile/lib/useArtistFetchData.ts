import { useGetStaticArtistQuery, useGetArtistQuery } from "@/entities/artists";

interface IProps {
  isAuth: boolean;
  artistId: string | undefined;
}

export const useArtistsFetchData = ({ isAuth, artistId }: IProps) => {
  const { data: staticData, isLoading: isStaticLoading } =
    useGetStaticArtistQuery(artistId, {
      skip: isAuth,
    });
  const { data, isLoading } = useGetArtistQuery(artistId, {
    skip: !isAuth,
  });

  return {
    artist: isAuth ? data : staticData,
    isArtistLoading: isAuth ? isLoading : isStaticLoading,
  };
};
