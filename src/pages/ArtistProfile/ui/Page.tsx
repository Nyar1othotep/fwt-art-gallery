import React, { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";

import { AuthContext } from "@/features/auth";
import { ArtistInfo } from "@/widgets/ArtistInfo";

import { useArtistsFetchData } from "../lib/useArtistFetchData";

const ArtistProfile: React.FC = () => {
  const { artistId } = useParams();
  const { isAuth } = useContext(AuthContext);
  const { artist, isLoading } = useArtistsFetchData({
    isAuth,
    artistId,
  });

  // artist -> ArtistInfo - Отображает все в себе
  // и верстка контента тоже  этом виджете

  // artist.paintings -> ArtworksList, который
  // использует ту же логику, что и ArtistsList (!)

  if (isLoading) return <div>...loading</div>;

  if (Object.values(artist).length === 0) return <div>no data</div>;

  return (
    <>
      <div>
        <div>{artistId}</div>
        <ArtistInfo artist={artist} />
      </div>
      <Outlet />
    </>
  );
};

export default ArtistProfile;
