import React, { useContext } from "react";

import { AuthContext } from "@/features/auth";
import { FilterNoMatches, FiltersContext } from "@/features/filters";
import { ThemeContext } from "@/features/theme";
import { GridLayout } from "@/shared/ui/Layouts/GridLayout";
import { Skeleton } from "@/shared/ui/Skeletons/Skeleton";

import { useArtistsFetchData } from "../../lib/useArtistsFetchData";
import { ArtistsList } from "../ArtistsList";

const ArtistsLayout: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext);
  const { filters } = useContext(FiltersContext);
  const { artists, totalPages, isArtistsLoading } = useArtistsFetchData({
    isAuth,
    filters,
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

  return <ArtistsList artists={artists} totalPages={totalPages} />;
};

export default ArtistsLayout;
