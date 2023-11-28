export const removeGenre = (str: string, substr: string) => {
  const strArray = str.split(",");
  const newArray = strArray.filter((item) => item !== substr);

  return newArray.join(",");
};
