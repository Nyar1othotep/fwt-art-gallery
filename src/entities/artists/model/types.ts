import { TImage } from "@/shared/model/types";

type MainPainting = {
  _id: string;
  name: string;
  yearOfCreation: string;
  image: TImage;
  artist: string;
};

export type StaticDto = {
  genres: string[];
  _id: string;
  name: string;
  description: string;
  yearsOfLife: string;
  __v: number;
  mainPainting: MainPainting;
};
