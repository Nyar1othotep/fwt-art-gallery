export const getMatches = (query: string) =>
  typeof window !== "undefined" && window.matchMedia(query).matches;
