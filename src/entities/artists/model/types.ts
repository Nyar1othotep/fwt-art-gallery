import { GenericFormData } from "axios";

import { IGenres } from "@/shared/api";
import { IImage } from "@/shared/model/types";

export interface IPaintingDto {
  _id: string;
  name: string;
  yearOfCreation: string;
  image: IImage;
  artist?: string;
}

interface IMainPainting extends IPaintingDto {}

export interface IStaticArtistsDto {
  genres: string[];
  _id: string;
  name: string;
  description: string;
  yearsOfLife: string;
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

export interface IArtistDto {
  paintings: IPaintingDto[];
  genres: IGenres[];
  _id: string;
  name: string;
  description: string;
  yearsOfLife: string;
  avatar: IImage;
  mainPainting: IMainPainting;
}

export interface IRequestArtistBody {
  id: string;
  data: GenericFormData;
}

export interface IRequestArtworkBody {
  id: string;
  artworkId: string;
  data?: GenericFormData;
}

export type TModalVariant = "artist" | "artwork";
