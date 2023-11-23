export type TButtonVariant =
  | "default"
  | "text"
  | "menu"
  | "icon"
  | "back-to-top";

export interface IImage {
  _id: string;
  src: string;
  webp: string;
  src2x: string;
  webp2x: string;
  original: string;
}

export type TModalVariant = "default" | "popup" | "edit";

export type TTransitionWrapperVariant = "sidebar" | "modal" | "slider";

export interface IToken {
  username: string;
  iat: number;
  exp: number;
}
