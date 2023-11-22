import cn from "classnames/bind";
import React, { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";

import { AuthContext } from "@/features/auth";
import { ThemeContext } from "@/features/theme";
import { ArtistInfo } from "@/widgets/ArtistInfo";
import { ArtworksList } from "@/widgets/ArtworksList";
import { useArtworkSlider } from "@/widgets/ArtworksSlider";
import { ArtworksSlider } from "@/widgets/ArtworksSlider/ui";

import { useArtistsFetchData } from "../lib/useArtistFetchData";

import styles from "./Page.module.scss";

const cx = cn.bind(styles);

const ArtistProfile: React.FC = () => {
  const { artistId } = useParams();
  const { theme } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext);
  const { slideTo, isSlider, onOpenSlider, onCloseSlider } = useArtworkSlider();
  const { artist, isLoading } = useArtistsFetchData({
    isAuth,
    artistId,
  });

  if (isLoading) return <div>...loading</div>;

  if (Object.values(artist).length === 0) return <div>no data</div>;

  return (
    <div className={cx("artist-profile-page")}>
      <div
        className={cx(
          "artist-profile-page__container",
          "artist-profile-page__container--custom",
        )}
      >
        <ArtistInfo artist={artist} />
      </div>
      <div className={cx("artist-profile-page__container")}>
        <div
          className={cx(
            "artist-profile-page__heading",
            `artist-profile-page__heading--${theme}`,
          )}
        >
          Artworks
        </div>
        <ArtworksList paintings={artist.paintings} onPainting={onOpenSlider} />
        <ArtworksSlider
          to={slideTo}
          isShow={isSlider}
          onClose={onCloseSlider}
          paintings={artist.paintings}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default ArtistProfile;
