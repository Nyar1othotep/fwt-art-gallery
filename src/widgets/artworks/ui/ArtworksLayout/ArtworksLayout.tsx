import React from "react";

import { IArtistDto } from "@/entities/artists";

import { useArtworkSlider } from "../../lib/useArtworkSlider";
import { ArtworksList } from "../ArtworksList";
import { ArtworksSlider } from "../ArtworksSlider";

interface IArtworksLayout {
  artist: IArtistDto;
}

const ArtworksLayout: React.FC<IArtworksLayout> = ({ artist }) => {
  const { slideTo, isSlider, onOpenSlider, onCloseSlider } = useArtworkSlider();

  return (
    <>
      {/* // TODO: Добавить сюда скелетон */}
      <ArtworksList paintings={artist.paintings} onPainting={onOpenSlider} />
      <ArtworksSlider
        to={slideTo}
        isShow={isSlider}
        onClose={onCloseSlider}
        paintings={artist.paintings}
      />
    </>
  );
};

export default ArtworksLayout;
