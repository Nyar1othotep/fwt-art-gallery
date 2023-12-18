import React, { useContext } from "react";

import {
  DraggebleWrapper,
  IStaticArtistsDto,
  useDragAndDrop,
} from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { Card } from "@/shared/ui/Card";
import { GridLayout } from "@/shared/ui/Layouts/GridLayout";

import { useObserver } from "../../lib/useObserver";

import InfiniteScroll from "./InfiniteScroll";

interface IArtistsList {
  artists: IStaticArtistsDto[];
  totalPages: number;
}

const ArtistsList: React.FC<IArtistsList> = ({ artists, totalPages }) => {
  const { theme } = useContext(ThemeContext);
  const { observerRef, inView } = useObserver({
    rootMargin: "400px",
    threshold: 1,
  });
  const { draggedData, handleDragStart, handleDragOver, handleDragEnd } =
    useDragAndDrop(artists);

  return (
    <InfiniteScroll isLoadMore={inView} totalPages={totalPages}>
      <GridLayout>
        {draggedData.map(
          ({ _id: id, name, yearsOfLife, mainPainting }, index) => (
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
                key={id}
                to={`/artist/${id}/`}
                year={yearsOfLife}
                title={name}
                image={mainPainting?.image}
                theme={theme}
              />
            </DraggebleWrapper>
          ),
        )}
      </GridLayout>
      <div ref={observerRef} />
    </InfiniteScroll>
  );
};

export default ArtistsList;
