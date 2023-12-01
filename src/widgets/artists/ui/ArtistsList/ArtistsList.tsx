import React, { useContext, useEffect } from "react";

import { FiltersContext, SearchNoMatches } from "@/features/filters";
import { ThemeContext } from "@/features/theme";
import { Card } from "@/shared/ui/Card";
import { GridLayout } from "@/shared/ui/Layouts/GridLayout";
import { Skeleton } from "@/shared/ui/Skeletons/Skeleton";

import { useArtistsFetchData } from "../../lib/useArtistsFetchData";
import { useObserver } from "../../lib/useObserver";

interface IArtistsList {
  isAuth: boolean;
}

const ArtistsList: React.FC<IArtistsList> = ({ isAuth }) => {
  const { theme } = useContext(ThemeContext);
  const { filters, setFilters, removeFilters } = useContext(FiltersContext);
  const { artists, totalPages, isArtistsLoading } = useArtistsFetchData({
    isAuth,
    filters,
  });
  const { observerRef, inView } = useObserver({
    rootMargin: "400px",
    threshold: 1,
  });
  const { pageNumber: filtersPageNumber } = filters;

  useEffect(() => {
    if (isAuth && inView && Number(filtersPageNumber) < totalPages)
      setFilters({
        ...filters,
        pageNumber: String(Number(filtersPageNumber) + 1),
      });

    if (!isAuth) removeFilters();
  }, [isAuth, inView, totalPages]);

  if (isArtistsLoading) {
    return (
      <GridLayout>
        {Array.from({ length: 6 }, (_, key) => (
          <Skeleton key={key} theme={theme} />
        ))}
      </GridLayout>
    );
  }

  if (!artists || artists.length === 0) return <SearchNoMatches />;

  return (
    <>
      <GridLayout>
        {artists.map(({ _id, name, yearsOfLife, mainPainting }) => (
          <Card
            key={_id}
            to={`/artist/${_id}/`}
            year={yearsOfLife}
            title={name}
            image={mainPainting?.image}
            theme={theme}
          />
        ))}
      </GridLayout>
      <div ref={observerRef} />
    </>
  );
};

export default ArtistsList;
