import React, { useContext } from "react";

import { useGetArtistsQuery, StaticDto } from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { Card } from "@/shared/ui/Card";
import { GridLayout } from "@/shared/ui/Layouts/GridLayout";

interface IArtistsList {
  isAuth: boolean;
  filters: object;
}

const ArtistsList: React.FC<IArtistsList> = ({ isAuth, filters }) => {
  const { theme } = useContext(ThemeContext);
  const {
    data: artists,
    isLoading,
    isSuccess,
  } = useGetArtistsQuery({ filters, isAuth });

  if (isLoading) return <div>Loading</div>;

  if (artists && artists.length === 0) return <div>No data</div>;

  if (!isSuccess) return null;

  return (
    <GridLayout>
      {artists.map(({ _id, name, yearsOfLife, mainPainting }: StaticDto) => {
        return (
          <Card
            key={_id}
            to={_id}
            title={name}
            year={yearsOfLife}
            image={mainPainting?.image}
            theme={theme}
          />
        );
      })}
    </GridLayout>
  );
};

export default ArtistsList;
