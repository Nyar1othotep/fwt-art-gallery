import { useEffect, useState } from "react";

import { getMatches } from "./getMatches";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() => getMatches(query));

  const listener = () => {
    setMatches(getMatches(query));
  };

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    matchMedia.addEventListener("change", listener);

    return () => {
      matchMedia.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
};
