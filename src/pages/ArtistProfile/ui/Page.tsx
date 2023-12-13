import cn from "classnames/bind";
import React, { useContext, useMemo } from "react";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";

import { EditArtist } from "@/features/artists";
import { AuthContext } from "@/features/auth";
import { ThemeContext } from "@/features/theme";
import { ReactComponent as IconBack } from "@/shared/assets/arrow_icon.svg";
import { routeBack } from "@/shared/helpers/routes";
import { Button } from "@/shared/ui/Button";
import { GridLayout } from "@/shared/ui/Layouts/GridLayout";
import { ArtistSkeleton } from "@/shared/ui/Skeletons/ArtistSkeleton";
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
  const { artist, isArtistLoading } = useArtistsFetchData({
    isAuth,
    artistId,
  });
  const navigate = useNavigate();
  const isLoading = !(!isArtistLoading && artist);

  const artistInfoSkeleton = useMemo(
    () => <ArtistSkeleton theme={theme} />,
    [theme],
  );

  const artworksSkeleton = useMemo(
    () => (
      <GridLayout>
        {Array.from({ length: 6 }, (_, key) => (
          <Skeleton key={key} theme={theme} />
        ))}
      </GridLayout>
    ),
    [theme],
  );

  if (!isArtistLoading && !artist) return <Navigate to="/error" />;

  return (
    <div className={cx("artist-profile-page", `artist-profile-page--${theme}`)}>
      <div className={cx("artist-profile-page__container")}>
        <div className={cx("artist-profile-page__content")}>
          <div className={cx("artist-profile-page__controls")}>
            <Button
              className={cx("artist-profile-page__btn")}
              theme={theme}
              variant="text"
              onClick={routeBack(navigate)}
            >
              <IconBack className={cx("artist-profile-page__btn-icon")} />{" "}
              <p className={cx("artist-profile-page__btn-text")}>Back</p>
            </Button>
            {isAuth && artist && (
              <div className={cx("artist-profile-page__controls--auth")}>
                <EditArtist artist={artist} />
              </div>
            )}
          </div>
          <section>
            {isLoading ? artistInfoSkeleton : <ArtistInfo artist={artist} />}
          </section>
          <section>
            <div className={cx("artist-profile-page__heading")}>Artworks</div>
            {isLoading ? artworksSkeleton : <ArtworksLayout artist={artist} />}
          </section>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ArtistProfile;
