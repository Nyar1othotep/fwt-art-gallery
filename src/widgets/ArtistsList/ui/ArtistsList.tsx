import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { TStaticArtistsResponse } from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { Card } from "@/shared/ui/Card";
import { GridLayout } from "@/shared/ui/Layouts/GridLayout";
import { Skeleton } from "@/shared/ui/Skeleton";

import { useArtistsFetchData } from "../lib/useArtistsFetchData";

interface IArtistsList {
  isAuth: boolean;
  filters: object;
}

const ArtistsList: React.FC<IArtistsList> = ({ isAuth, filters }) => {
  const { theme } = useContext(ThemeContext);
  const [items, setItems] = useState<TStaticArtistsResponse[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { artists, totalPages, isArtistsLoading } = useArtistsFetchData({
    isAuth,
    filters,
    pageNumber,
  });
  const { ref, inView } = useInView({ rootMargin: "400px", threshold: 1 });

  useEffect(() => {
    if (isAuth && inView && pageNumber < totalPages)
      setPageNumber((prev) => prev + 1);

    if (!isAuth) setPageNumber(1);
  }, [isAuth, inView, totalPages]);

  useEffect(() => {
    if (artists) setItems([...items, ...artists]);
  }, [artists]);

  if (isArtistsLoading) {
    return (
      <GridLayout>
        {Array.from({ length: 6 }, (_, key) => (
          <Skeleton key={key} theme={theme} />
        ))}
      </GridLayout>
    );
  }

  if (items.length === 0) return <div>No data</div>;

  return (
    <>
      <GridLayout>
        {items.map(({ _id, name, yearsOfLife, mainPainting }) => {
          return (
            <Card
              key={_id}
              to={`/artist/${_id}/`}
              title={name}
              year={yearsOfLife}
              image={mainPainting?.image}
              theme={theme}
            />
          );
        })}
      </GridLayout>
      <div ref={ref} />
    </>
  );
};

export default ArtistsList;
