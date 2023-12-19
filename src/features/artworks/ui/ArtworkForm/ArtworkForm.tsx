import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

import { IartworkSchema, artworkSchema } from "../../model/artworkSchema";

import ArtworkDropZone from "./ArtworkDropZone";
import styles from "./ArtworkForm.module.scss";

const cx = cn.bind(styles);

interface IArtworkForm extends HTMLAttributes<HTMLElement> {
  theme?: string;
  isLoading?: boolean;
  defaultValues?: IartworkSchema;
  onSubmitHandler: ({ name, image, yearOfCreation }: IartworkSchema) => void;
}

const ArtworkForm: React.FC<IArtworkForm> = ({
  theme,
  isLoading,
  defaultValues,
  onSubmitHandler,
}) => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(artworkSchema),
    defaultValues,
  });

  return (
    <form
      className={cx("artwork-form", `artwork-form--${theme}`)}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className={cx("artwork-form__content")}>
        <div className={cx("artwork-form__inputs")}>
          <Input
            type="text"
            name="name"
            label="The name of the picture"
            theme={theme}
            error={errors.name?.message}
            register={{ ...register("name") }}
          />
          <Input
            type="text"
            name="yearOfCreation"
            label="Year of creation"
            theme={theme}
            error={errors.yearOfCreation?.message}
            register={{ ...register("yearOfCreation") }}
          />
        </div>
        <ArtworkDropZone name="image" theme={theme} control={control} />
        <Button
          className={cx("artwork-form__btn")}
          theme={theme}
          disabled={isLoading}
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default ArtworkForm;
