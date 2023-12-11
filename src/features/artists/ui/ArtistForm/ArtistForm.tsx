import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { MultiSelect } from "@/shared/ui/MultiSelect";
import { TextArea } from "@/shared/ui/TextArea";

import { IartistSchema, artistSchema } from "../../model/artistSchema";

import styles from "./ArtistForm.module.scss";

const cx = cn.bind(styles);

interface IArtistForm extends HTMLAttributes<HTMLElement> {
  theme?: string;
  onSubmitHandler: ({
    name,
    yearsOfLife,
    description,
    genres,
    avatar,
  }: IartistSchema) => void;
}

const ArtistForm: React.FC<IArtistForm> = ({ theme, onSubmitHandler }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(artistSchema) });

  return (
    <form
      className={cx("artist-form")}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className={cx("artist-form__avatar")}>avatar</div>
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
        <MultiSelect theme={theme} label="Genres*" />
        <Button theme={theme}>Save</Button>
      </div>
    </form>
  );
};

export default ArtistForm;
