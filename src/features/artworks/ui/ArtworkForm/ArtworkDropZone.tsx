import React from "react";
import { Control, FieldValues, useController } from "react-hook-form";

import { DropZone } from "@/shared/ui/DropZone";

import { IartworkSchema } from "../../model/artworkSchema";

interface IArtworkDropZone {
  name: string;
  theme?: string;
  control: Control<IartworkSchema & FieldValues>;
}

const ArtworkDropZone: React.FC<IArtworkDropZone> = ({
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
      variant="artwork"
      defaultImage={value}
      onDropChange={handleDropChange}
    />
  );
};

export default ArtworkDropZone;
