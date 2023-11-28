export const getTotalGenres = (genres: string | undefined) =>
  genres ? `(${genres.split(",").length})` : "";
