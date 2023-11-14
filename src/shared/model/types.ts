export type TButtonVariant =
  | "default"
  | "text"
  | "menu"
  | "icon"
  | "back-to-top";

export type TImage = {
  _id: string;
  src: string;
  webp: string;
  src2x: string;
  webp2x: string;
  original: string;
};

export type TModalVariant = "default" | "popup" | "edit";

export type TInputWrapperVariant = "default" | "search";
