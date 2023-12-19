import * as yup from "yup";

export const artworkSchema = yup.object().shape({
  name: yup.string().required(),
  yearOfCreation: yup.string().required(),
  image: yup.mixed(),
});

export interface IartworkSchema extends yup.InferType<typeof artworkSchema> {}
