export const getTotalPages = (count: number, perPage: number) => {
  if (count === 0 && perPage === 0) return 0;

  return Math.ceil(count / perPage);
};
