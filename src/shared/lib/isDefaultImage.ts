export const isDefaultImage = <T>(newImage: T, defaultImage: T) =>
  newImage === defaultImage ? "" : newImage;
