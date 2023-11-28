import { removeGenre } from "./removeGenre";

export const setGenre = (genres: string, genre: string) => {
  if (genres?.includes(genre)) return removeGenre(genres, genre);

  if (!genres) return genre;

  return `${genres},${genre}`;
};
