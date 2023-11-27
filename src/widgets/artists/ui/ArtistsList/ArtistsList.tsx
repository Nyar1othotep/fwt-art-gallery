import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { FiltersContext } from "@/features/filters";
import { ThemeContext } from "@/features/theme";
import { Card } from "@/shared/ui/Card";
import { GridLayout } from "@/shared/ui/Layouts/GridLayout";
import { Skeleton } from "@/shared/ui/Skeletons/Skeleton";

import { useArtistsFetchData } from "../../lib/useArtistsFetchData";

interface IArtistsList {
  isAuth: boolean;
}

const ArtistsList: React.FC<IArtistsList> = ({ isAuth }) => {
  const { theme } = useContext(ThemeContext);
  const { filters, setFilters, removeFilters } = useContext(FiltersContext);
  const { artists, totalPages, isLoading } = useArtistsFetchData({
    isAuth,
    filters,
  });
  const { ref, inView } = useInView({ rootMargin: "400px", threshold: 1 });

  useEffect(() => {
    if (isAuth && inView && +filters.pageNumber < totalPages)
      setFilters({
        ...filters,
        pageNumber: String(+filters.pageNumber + 1),
      });

    if (!isAuth) removeFilters();
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

  if (!artists) return <div>No data</div>;

  return (
    <>
      <GridLayout>
        {artists.map(({ _id, name, yearsOfLife, mainPainting }) => {
          return (
            <Card
              key={_id}
              to={`/artist/${_id}/`}
              year={yearsOfLife}
              title={name}
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
