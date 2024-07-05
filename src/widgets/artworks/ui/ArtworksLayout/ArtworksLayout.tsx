import cn from "classnames/bind";
import React, { useContext } from "react";

import { IArtistDto } from "@/entities/artists";
import { AddArtwork } from "@/features/artworks";
import { AuthContext } from "@/features/auth";
import { ThemeContext } from "@/features/theme";

import { useArtworkSlider } from "../../lib/useArtworkSlider";
import { useArtworksPagination } from "../../lib/useArtworksPagination";
import { ArtworksList } from "../ArtworksList";
import { ArtworksPagination } from "../ArtworksPagination";
import { ArtworksSlider } from "../ArtworksSlider";

import styles from "./ArtworksLayout.module.scss";

const cx = cn.bind(styles);

interface IArtworksLayout {
  artist: IArtistDto;
}

const ArtworksLayout: React.FC<IArtworksLayout> = ({ artist }) => {
  const { theme } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext);
  const { paintings, totalPages, handlePageChange } = useArtworksPagination(
    artist.paintings,
  );
  const { slideTo, isSlider, handleSliderOpen, handleSliderClose } =
    useArtworkSlider();
  const isArtworksEmpty = artist.paintings.length === 0;
  const isArtworksWithAuth = !isArtworksEmpty && isAuth;

  return (
    <div className={cx("artworks-layout", `artworks-layout--${theme}`)}>
      {isArtworksWithAuth && (
        <div className={cx("artworks-layout__btn")}>
          <AddArtwork artist={artist} variant="button" />
        </div>
      )}
      <ArtworksList
        artist={artist}
        paintings={paintings}
        onPainting={handleSliderOpen}
        isArtworksEmpty={isArtworksEmpty}
      />
      <ArtworksPagination totalPages={totalPages} onChange={handlePageChange} />
      {isArtworksEmpty && (
        <div className={cx("artworks-layout__text")}>
          The paintings of this artist have not been uploaded yet.
        </div>
      )}
      <ArtworksSlider
        to={slideTo}
        artist={artist}
        isShow={isSlider}
        onClose={handleSliderClose}
      />
    </div>
  );
};

export default ArtworksLayout;
