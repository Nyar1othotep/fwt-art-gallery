import { IGenres } from "@/shared/api";

export const toggleOption = <T extends IGenres, V extends T[]>(
  selected: T,
  array: V,
) => {
  if (array.some((option) => option.name === selected.name)) {
    return array.filter((item) => item._id !== selected._id);
  }

  return [...array, selected];
};
