import { useBoolean } from "@/shared/lib/useBoolean";

import { isLongDescription } from "./isLongDescription";
import { truncateString } from "./truncateString";

export const useToggleDescription = (description: string) => {
  const isLongDescr = isLongDescription(description);
  const [isMoreDescr, { toggle: toggleDescription }] = useBoolean(!isLongDescr);

  const shortDescription = truncateString(description, 265);

  return {
    isLongDescr,
    isMoreDescr,
    toggleDescription,
    description: isMoreDescr ? description : shortDescription,
  };
};
