import React, { useContext } from "react";

import { TPainting } from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { Card } from "@/shared/ui/Card";
import { GridLayout } from "@/shared/ui/Layouts/GridLayout";

interface IArtworkList {
  paintings: TPainting[];
}

const ArtworkList: React.FC<IArtworkList> = ({ paintings }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <GridLayout>
      {paintings.map(({ _id, name, image, yearOfCreation }) => {
        return (
          <Card
            key={_id}
            year={yearOfCreation}
            title={name}
            image={image}
            theme={theme}
          />
        );
      })}
    </GridLayout>
  );
};

export default ArtworkList;
