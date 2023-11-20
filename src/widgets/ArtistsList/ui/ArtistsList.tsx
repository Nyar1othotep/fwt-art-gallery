import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { ThemeContext } from "@/features/theme";
import { Card } from "@/shared/ui/Card";
import { GridLayout } from "@/shared/ui/Layouts/GridLayout";
import { Skeleton } from "@/shared/ui/Skeleton";

import { useArtistsFetchData } from "../lib/useArtistsFetchData";

interface IArtistsList {
  isAuth: boolean;
  filters: TFilters;
}

// TODO: Add Filters context
type TFilters = {
  perPage: number;
};

const ArtistsList: React.FC<IArtistsList> = ({ isAuth, filters }) => {
  const { theme } = useContext(ThemeContext);
  const [pageNumber, setPageNumber] = useState(1);
  const { artists, totalPages, isLoading } = useArtistsFetchData({
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

  if (isLoading) {
    return (
      <GridLayout>
        {Array.from({ length: 6 }, (_, key) => (
          <Skeleton key={key} theme={theme} />
        ))}
      </GridLayout>
    );
  }

  if (artists.length === 0) return <div>No data</div>;

  return (
    <>
      <GridLayout>
        {artists.map(({ _id, name, yearsOfLife, mainPainting }) => {
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
