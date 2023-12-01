import React, { useContext } from "react";

import { FiltersContext, FilterNoMatches } from "@/features/filters";
import { ThemeContext } from "@/features/theme";
import { Card } from "@/shared/ui/Card";
import { GridLayout } from "@/shared/ui/Layouts/GridLayout";
import { Skeleton } from "@/shared/ui/Skeletons/Skeleton";

import { useArtistsFetchData } from "../../lib/useArtistsFetchData";
import { useObserver } from "../../lib/useObserver";

import InfiniteScroll from "./InfiniteScroll";

interface IArtistsList {
  isAuth: boolean;
}

const ArtistsList: React.FC<IArtistsList> = ({ isAuth }) => {
  const { theme } = useContext(ThemeContext);
  const { filters } = useContext(FiltersContext);
  const { artists, totalPages, isArtistsLoading } = useArtistsFetchData({
    isAuth,
    filters,
  });
  const { observerRef, inView } = useObserver({
    rootMargin: "400px",
    threshold: 1,
  });

  if (isArtistsLoading) {
    return (
      <GridLayout>
        {Array.from({ length: 6 }, (_, key) => (
          <Skeleton key={key} theme={theme} />
        ))}
      </GridLayout>
    );
  }

  if (!artists || artists.length === 0) return <FilterNoMatches />;

  return (
    <InfiniteScroll isLoadMore={inView} totalPages={totalPages}>
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
    </InfiniteScroll>
  );
};

export default ArtistsList;
