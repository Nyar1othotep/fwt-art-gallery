export const truncateString = (str: string, n: number) =>
  str.length > n ? `${str.slice(0, n)}...` : str;
