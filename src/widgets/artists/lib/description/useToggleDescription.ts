import { useState } from "react";

import { isLongDescription } from "./isLongDescription";
import { truncateString } from "./truncateString";

export const useToggleDescription = (description: string) => {
  const isLongDescr = isLongDescription(description);
  const [isMoreDescr, setIsMoreDescr] = useState(!isLongDescr);

  const toggleDescription = () => setIsMoreDescr(!isMoreDescr);

  const shortDescription = truncateString(description, 265);

  return {
    isLongDescr,
    isMoreDescr,
    toggleDescription,
    description: isMoreDescr ? description : shortDescription,
  };
};
