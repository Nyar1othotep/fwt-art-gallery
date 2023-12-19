import React from "react";
import { Control, FieldValues, useController } from "react-hook-form";

import { DropZone } from "@/shared/ui/DropZone";

import { IartistSchema } from "../../model/artistSchema";

interface IArtistDropZone {
  name: string;
  theme?: string;
  control: Control<IartistSchema & FieldValues>;
}

const ArtistDropZone: React.FC<IArtistDropZone> = ({
  name: controlName,
  theme,
  control,
}) => {
  const {
    field: { onChange, value },
  } = useController({ name: controlName, control });

  const handleDropChange = (file: File | undefined | string) => onChange(file);

  return (
    <DropZone
      theme={theme}
      variant="avatar"
      defaultImage={value}
      onDropChange={handleDropChange}
    />
  );
};

export default ArtistDropZone;
