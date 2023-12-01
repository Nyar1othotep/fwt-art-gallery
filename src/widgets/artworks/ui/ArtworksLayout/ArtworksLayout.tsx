import React from "react";

import { IArtistDto } from "@/entities/artists";

import { useArtworkSlider } from "../../lib/useArtworkSlider";
import { ArtworksList } from "../ArtworksList";
import { ArtworksSlider } from "../ArtworksSlider";

interface IArtworksLayout {
  artist: IArtistDto;
}

const ArtworksLayout: React.FC<IArtworksLayout> = ({ artist }) => {
  const { slideTo, isSlider, handleSliderOpen, handleSliderClose } =
    useArtworkSlider();

  return (
    <>
      <ArtworksList
        paintings={artist.paintings}
        onPainting={handleSliderOpen}
      />
      <ArtworksSlider
        to={slideTo}
        isShow={isSlider}
        onClose={handleSliderClose}
        paintings={artist.paintings}
      />
    </>
  );
};

export default ArtworksLayout;
