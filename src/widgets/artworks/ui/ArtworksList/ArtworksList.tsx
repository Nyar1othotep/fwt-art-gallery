import React, { useContext } from "react";

import { IPaintingDto } from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { Card } from "@/shared/ui/Card";
import { GridLayout } from "@/shared/ui/Layouts/GridLayout";

interface IArtworksList {
  paintings: IPaintingDto[];
  onPainting: (index: number) => void;
}

const ArtworksList: React.FC<IArtworksList> = ({ paintings, onPainting }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <GridLayout>
      {paintings.map(({ _id, name, image, yearOfCreation }, index) => (
        <Card
          key={_id}
          year={yearOfCreation}
          title={name}
          image={image}
          theme={theme}
          onClick={() => onPainting(index)}
        />
      ))}
    </GridLayout>
  );
};

export default ArtworksList;
