import { TArtistResponse } from "../model/types";

import { truncate } from "./truncate";

export const transformArtistResponse = (response: TArtistResponse) => {
  if (!response || response.description.length < 265) return response;

  const shortDescription = truncate(response.description, 265);

  return {
    ...response,
    shortDescription,
  };
};
