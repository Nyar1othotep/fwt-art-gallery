import cn from "classnames/bind";
import React, { useCallback, useState } from "react";
import { Control, FieldValues, useController } from "react-hook-form";

import { ReactComponent as IconDelete } from "@/shared/assets/delete_icon.svg";
import { API_URL } from "@/shared/config";
import { useBoolean } from "@/shared/lib/useBoolean";
import { Button } from "@/shared/ui/Button";

import { getBase64 } from "../../lib/getBase64";
import { IartistSchema } from "../../model/artistSchema";
import { ReactComponent as IconAvatar } from "../assets/profile_icon.svg";

import styles from "./ArtistForm.module.scss";

const cx = cn.bind(styles);

interface IArtistAvatar {
  name: string;
  theme?: string;
  control: Control<IartistSchema & FieldValues>;
}

const ArtistAvatar: React.FC<IArtistAvatar> = ({
  name: controlName,
  theme,
  control,
}) => {
  const {
    field: { onChange, value },
  } = useController({ name: controlName, control });
  const [isDragActive, { on: onDragOver, off: onDragLeave }] =
    useBoolean(false);
  const [preview, setPreview] = useState(value ? API_URL + value : "");
  const isPreview = preview && !isDragActive;

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      onChange(file);
      if (file) getBase64(file).then((base64) => setPreview(base64));
    },
    [],
  );

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    onDragOver();
  };

  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    onChange(file);
    if (file) getBase64(file).then((base64) => setPreview(base64));
    onDragLeave();
  }, []);

  const handlePreviewDelete = () => {
    onChange("");
    setPreview("");
  };

  return (
    <div
      className={cx("artist-form__avatar", "avatar", `avatar--${theme}`, {
        "avatar--active": isDragActive,
      })}
    >
      <div
        className={cx("avatar__wrapper-zone")}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={onDragLeave}
      >
        {isPreview ? (
          <>
            <img className={cx("avatar__image")} src={preview} alt="avatar" />
            <Button
              className={cx("avatar__btn-delete")}
              theme={theme}
              isButton
              variant="icon"
              onClick={handlePreviewDelete}
            >
              <IconDelete />
            </Button>
          </>
        ) : (
          <div className={cx("avatar__zone")}>
            <IconAvatar className={cx("avatar__icon")} />
            <p className={cx("avatar__drop-text")}>
              You can drop your image here
            </p>
            <p className={cx("avatar__drop-warn")}>
              Upload only .jpg or .png format less than 3 MB
            </p>
          </div>
        )}
      </div>
      <label className={cx("avatar__browse")} htmlFor="input-upload">
        <input
          id="input-upload"
          className={cx("avatar__input")}
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          onChange={handleInputChange}
        />
        <Button
          className={cx("avatar__btn-browse")}
          theme={theme}
          isButton
          variant="text"
        >
          Browse Profile Photo
        </Button>
      </label>
    </div>
  );
};

export default ArtistAvatar;
