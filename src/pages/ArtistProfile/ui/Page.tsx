import cn from "classnames/bind";
import React, { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";

import { AuthContext } from "@/features/auth";
import { ThemeContext } from "@/features/theme";
import { ArtistInfo } from "@/widgets/ArtistInfo";
import { ArtworksList } from "@/widgets/ArtworksList";

import { useArtistsFetchData } from "../lib/useArtistFetchData";

import styles from "./Page.module.scss";

const cx = cn.bind(styles);

const ArtistProfile: React.FC = () => {
  const { artistId } = useParams();
  const { theme } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext);
  const { artist, isLoading } = useArtistsFetchData({
    isAuth,
    artistId,
  });

  // artist.paintings -> ArtworksList, который
  // использует ту же логику, что и ArtistsList (!)

  if (isLoading) return <div>...loading</div>;

  if (Object.values(artist).length === 0) return <div>no data</div>;

  return (
    <div className={cx("artist-profile-page")}>
      <ArtistInfo artist={artist} />
      <div className={cx("artist-profile-page__container")}>
        <div
          className={cx(
            "artist-profile-page__heading",
            `artist-profile-page__heading--${theme}`,
          )}
        >
          Artworks
        </div>
        <ArtworksList paintings={artist.paintings} />
      </div>
      <Outlet />
    </div>
  );
};

export default ArtistProfile;
