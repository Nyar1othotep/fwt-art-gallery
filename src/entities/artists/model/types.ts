import { IImage } from "@/shared/model/types";

export interface IPaintingDto {
  _id: string;
  name: string;
  yearOfCreation: string;
  image: IImage;
  artist: string;
}

interface IMainPainting extends IPaintingDto {}

export interface IStaticArtistsDto {
  genres: string[];
  _id: string;
  name: string;
  description: string;
  yearsOfLife: string;
  __v: number;
  mainPainting: IMainPainting;
}

export interface IMeta {
  count: number;
  perPage: number;
  pageNumber: number;
}

export interface IArtistsDto {
  data: IStaticArtistsDto[];
  meta: IMeta;
}

interface IArtistGenres {
  _id: string;
  name: string;
}

export interface IArtistDto {
  paintings: IPaintingDto[];
  genres: IArtistGenres[];
  _id: string;
  name: string;
  description: string;
  shortDescription?: string;
  yearsOfLife: string;
  avatar: IImage;
  mainPainting: IMainPainting;
}
