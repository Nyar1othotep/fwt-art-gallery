import cn from "classnames/bind";
import React, { useContext } from "react";

import { IArtistDto } from "@/entities/artists";
import { AddArtwork, ArtworkSettings } from "@/features/artworks";
import { AuthContext } from "@/features/auth";
import { ThemeContext } from "@/features/theme";
import { Card } from "@/shared/ui/Card";
import { GridLayout } from "@/shared/ui/Layouts/GridLayout";

import styles from "./ArtworksList.module.scss";

const cx = cn.bind(styles);
interface IArtworksList {
  artist: IArtistDto;
  onPainting: (index: number) => void;
  isArtworksEmpty?: boolean;
}

const ArtworksList: React.FC<IArtworksList> = ({
  artist,
  onPainting,
  isArtworksEmpty,
}) => {
  const { isAuth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <GridLayout className={cx("artworks-list")}>
      {isArtworksEmpty && isAuth ? (
        <AddArtwork artist={artist} />
      ) : (
        artist.paintings.map((painting, index) => {
          const { _id: id, name, image, yearOfCreation } = painting;

          return (
            <Card
              key={id}
              year={yearOfCreation}
              title={name}
              image={image}
              theme={theme}
              actionSlot={
                isAuth && (
                  <ArtworkSettings artist={artist} painting={painting} />
                )
              }
              onClick={() => onPainting(index)}
            />
          );
        })
      )}
    </GridLayout>
  );
};

export default ArtworksList;
