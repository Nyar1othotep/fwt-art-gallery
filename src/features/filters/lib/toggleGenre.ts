export const toggleGenre = <T extends string, V extends T[]>(
  genre: T,
  array: V,
) => {
  if (array.includes(genre)) {
    return array.filter((el) => el !== genre);
  }

  return [...array, genre];
};
