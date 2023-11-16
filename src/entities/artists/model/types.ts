import { TImage } from "@/shared/model/types";

type TMainPainting = {
  _id: string;
  name: string;
  yearOfCreation: string;
  image: TImage;
  artist: string;
};

export type TStaticArtistsResponse = {
  genres: string[];
  _id: string;
  name: string;
  description: string;
  yearsOfLife: string;
  __v: number;
  mainPainting: TMainPainting;
};

export type TMeta = {
  count: number;
  perPage: number;
  pageNumber: number;
};

export type TArtistsResponse = {
  data: TStaticArtistsResponse[];
  meta: TMeta;
};
