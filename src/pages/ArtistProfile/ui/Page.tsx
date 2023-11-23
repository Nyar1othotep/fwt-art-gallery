import cn from "classnames/bind";
import React, { useContext } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";

import { AuthContext } from "@/features/auth";
import { ThemeContext } from "@/features/theme";
import { ArtistInfo } from "@/widgets/artists";
import { ArtworksLayout } from "@/widgets/artworks";

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

  if (isLoading) return <div>...loading</div>;

  // TODO: Сделать вместо этого редирект на страницу с ошибкой
  if (!artist) return <Navigate to="/" />;

  return (
    <div className={cx("artist-profile-page")}>
      <div
        className={cx(
          "artist-profile-page__container",
          "artist-profile-page__container--custom",
        )}
      >
        {/* // TODO: Добавить сюда скелетон */}
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
        <ArtworksLayout artist={artist} />
      </div>
      <Outlet />
    </div>
  );
};

export default ArtistProfile;
