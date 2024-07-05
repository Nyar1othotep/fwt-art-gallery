import cn from "classnames/bind";
import React, { useContext } from "react";

import {
  DraggebleWrapper,
  IArtistDto,
  IPaintingDto,
  useDragAndDrop,
} from "@/entities/artists";
import { AddArtwork, ArtworkSettings } from "@/features/artworks";
import { AuthContext } from "@/features/auth";
import { ThemeContext } from "@/features/theme";
import { Card } from "@/shared/ui/Card";
import { GridLayout } from "@/shared/ui/Layouts/GridLayout";

import styles from "./ArtworksList.module.scss";

const cx = cn.bind(styles);
interface IArtworksList {
  artist: IArtistDto;
  paintings: IPaintingDto[];
  onPainting: (index: number) => () => void;
  isArtworksEmpty?: boolean;
}

const ArtworksList: React.FC<IArtworksList> = ({
  artist,
  paintings,
  onPainting,
  isArtworksEmpty,
}) => {
  const { isAuth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const { draggedData, handleDragStart, handleDragOver, handleDragEnd } =
    useDragAndDrop(paintings);

  return (
    <GridLayout className={cx("artworks-list")}>
      {isArtworksEmpty && isAuth ? (
        <AddArtwork artist={artist} />
      ) : (
        draggedData.map((painting, index) => {
          const { _id: id, name, image, yearOfCreation } = painting;

          return (
            <DraggebleWrapper
              key={id}
              id={id}
              theme={theme}
              index={index}
              onDragStart={handleDragStart(index)}
              onDragOver={handleDragOver(index)}
              onDragEnd={handleDragEnd}
            >
              <Card
                year={yearOfCreation}
                title={name}
                image={image}
                theme={theme}
                actionSlot={
                  isAuth && (
                    <ArtworkSettings artist={artist} painting={painting} />
                  )
                }
                onClick={onPainting(index)}
              />
            </DraggebleWrapper>
          );
        })
      )}
    </GridLayout>
  );
};

export default ArtworksList;
