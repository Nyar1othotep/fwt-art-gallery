import { useState } from "react";

import { TArtistResponse } from "@/entities/artists";

export const useToggleDescription = (artist: TArtistResponse) => {
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
