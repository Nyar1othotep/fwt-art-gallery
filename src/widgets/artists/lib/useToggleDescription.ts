import { useState } from "react";

import { IArtistDto } from "@/entities/artists";

export const useToggleDescription = (artist: IArtistDto) => {
  let description = "";
  const [isShow, setIsShow] = useState(!artist.shortDescription);

  const toggleShow = () => setIsShow(!isShow);

  if (artist.shortDescription) {
    description = artist.shortDescription;
  } else {
    description = artist.description;
  }

  if (isShow) {
    description = artist.description;
  }

  return {
    description,
    isShow,
    toggleShow,
  };
};
