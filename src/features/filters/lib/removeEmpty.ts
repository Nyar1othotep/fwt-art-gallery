export const removeEmpty = (obj: object) =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  Object.fromEntries(Object.entries(obj).filter(([_, val]) => val));
