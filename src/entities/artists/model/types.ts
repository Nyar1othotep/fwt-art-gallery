import { TImage } from "@/shared/model/types";

export type TPainting = {
  _id: string;
  name: string;
  yearOfCreation: string;
  image: TImage;
  artist: string;
};

type TMainPainting = TPainting;

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

type TArtistGenres = {
  _id: string;
  name: string;
};

export type TArtistResponse = {
  paintings: TPainting[];
  genres: TArtistGenres[];
  _id: string;
  name: string;
  description: string;
  shortDescription?: string;
  yearsOfLife: string;
  avatar: TImage;
  mainPainting: TMainPainting;
};
