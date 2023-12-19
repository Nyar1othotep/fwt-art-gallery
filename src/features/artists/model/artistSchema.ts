import * as yup from "yup";

export const artistSchema = yup.object().shape({
  name: yup.string().required(),
  yearsOfLife: yup.string().required(),
  description: yup.string().required(),
  genres: yup
    .array()
    .min(1)
    .of(
      yup.object().shape({
        _id: yup.string().required(),
        name: yup.string().required(),
      }),
    )
    .required(),
  avatar: yup.mixed(),
});

export interface IartistSchema extends yup.InferType<typeof artistSchema> {}
