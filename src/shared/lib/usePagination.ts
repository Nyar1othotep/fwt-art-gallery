const DOTS = "...";

export const usePagination = <T extends number>(
  totalPages: T,
  currentPage: T,
) => {
  if (totalPages > 4 && currentPage < 4)
    return [
      ...Array.from({ length: 4 }, (_, key) => key + 1),
      DOTS,
      totalPages,
    ];

  if (currentPage > totalPages - 4)
    return [
      1,
      DOTS,
      ...Array.from({ length: 4 }, (_, key) => totalPages - 3 + key),
    ];

  return [
    1,
    DOTS,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    DOTS,
    totalPages,
  ];
};
