import cn from "classnames/bind";
import React, { useContext } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";

import { AuthContext } from "@/features/auth";
import { ThemeContext } from "@/features/theme";
import { GridLayout } from "@/shared/ui/Layouts/GridLayout";
import { ArtistSkeleton } from "@/shared/ui/Skeletons/PageSkeleton";
import { Skeleton } from "@/shared/ui/Skeletons/Skeleton";
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

  const ArtistInfoSkeleton = <ArtistSkeleton theme={theme} />;

  const ArtworksSkeleton = (
    <GridLayout>
      {Array.from({ length: 6 }, (_, key) => (
        <Skeleton key={key} theme={theme} />
      ))}
    </GridLayout>
  );

  if (!isLoading && !artist) return <Navigate to="/error" />;

  return (
    <div className={cx("artist-profile-page")}>
      <div className={cx("artist-profile-page__container")}>
        <div className={cx("artist-profile-page__content")}>
          <section>
            {!isLoading && artist ? (
              <ArtistInfo artist={artist} />
            ) : (
              ArtistInfoSkeleton
            )}
          </section>
          <section>
            <div
              className={cx(
                "artist-profile-page__heading",
                `artist-profile-page__heading--${theme}`,
              )}
            >
              Artworks
            </div>
            {!isLoading && artist ? (
              <ArtworksLayout artist={artist} />
            ) : (
              ArtworksSkeleton
            )}
          </section>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ArtistProfile;
