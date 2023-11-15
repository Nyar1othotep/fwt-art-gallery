export const getTotalPages = (count: number, perPage: number) =>
  Math.ceil(count / perPage);
