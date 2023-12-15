import cn from "classnames/bind";
import React, { useContext } from "react";

import { IArtistDto } from "@/entities/artists";
import { AddArtwork } from "@/features/artworks";
import { AuthContext } from "@/features/auth";

import { useArtworkSlider } from "../../lib/useArtworkSlider";
import { ArtworksList } from "../ArtworksList";
import { ArtworksSlider } from "../ArtworksSlider";

import styles from "./ArtworksLayout.module.scss";

const cx = cn.bind(styles);

interface IArtworksLayout {
  artist: IArtistDto;
}

const ArtworksLayout: React.FC<IArtworksLayout> = ({ artist }) => {
  const { isAuth } = useContext(AuthContext);
  const { slideTo, isSlider, handleSliderOpen, handleSliderClose } =
    useArtworkSlider();
  const isArtworksEmpty = artist.paintings.length === 0;

  return (
    <div className={cx("artworks-layout")}>
      {!isArtworksEmpty && isAuth && (
        <div className={cx("artworks-layout__btn")}>
          <AddArtwork artist={artist} variant="button" />
        </div>
      )}
      <ArtworksList
        artist={artist}
        onPainting={handleSliderOpen}
        isArtworksEmpty={isArtworksEmpty}
      />
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
