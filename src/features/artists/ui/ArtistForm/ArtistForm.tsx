import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";

import { useGetGenresQuery } from "@/entities/genres";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { TextArea } from "@/shared/ui/TextArea";

import { IartistSchema, artistSchema } from "../../model/artistSchema";

import ArtistDropZone from "./ArtistDropZone";
import styles from "./ArtistForm.module.scss";
import ArtistMultiSelect from "./ArtistMultiSelect";

const cx = cn.bind(styles);

interface IArtistForm extends HTMLAttributes<HTMLElement> {
  theme?: string;
  defaultValues?: IartistSchema;
  onSubmitHandler: ({
    name,
    genres,
    avatar,
    yearsOfLife,
    description,
  }: IartistSchema) => void;
}
const ArtistForm: React.FC<IArtistForm> = ({
  theme,
  defaultValues,
  onSubmitHandler,
}) => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(artistSchema), defaultValues });
  const { data: genres } = useGetGenresQuery();

  return (
    <form
      className={cx("artist-form", `artist-form--${theme}`)}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <ArtistDropZone name="avatar" theme={theme} control={control} />
      <div className={cx("artist-form__content")}>
        <Input
          type="text"
          name="name"
          label="Name*"
          theme={theme}
          error={errors.name?.message}
          register={{ ...register("name") }}
        />
        <Input
          type="text"
          name="yearsOfLife"
          label="Years of life"
          theme={theme}
          error={errors.yearsOfLife?.message}
          register={{ ...register("yearsOfLife") }}
        />
        <TextArea
          name="description"
          label="Description"
          theme={theme}
          error={errors.description?.message}
          register={{ ...register("description") }}
        />
        {genres && (
          <ArtistMultiSelect
            name="genres"
            theme={theme}
            genres={genres}
            control={control}
          />
        )}
        <Button className={cx("artist-form__btn")} theme={theme}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default ArtistForm;
