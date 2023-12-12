import { IOption } from "../model/types";

export const toggleOption = <T extends IOption, V extends T[]>(
  selected: T,
  array: V,
) => {
  if (array.some((option) => option.name === selected.name)) {
    return array.filter((item) => item.id !== selected.id);
  }

  return [...array, selected];
};
