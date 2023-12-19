import cn from "classnames/bind";
import React, { HTMLAttributes, useCallback, useState } from "react";

import { ReactComponent as IconAvatar } from "../../assets/profile_icon.svg";
import { API_URL } from "../../config";
import { getBase64 } from "../../lib/getBase64";
import { useBoolean } from "../../lib/useBoolean";
import { TDropZoneVariant } from "../../model/types";

import DropInput from "./DropInput";
import DropPreview from "./DropPreview";
import styles from "./DropZone.module.scss";

const cx = cn.bind(styles);

interface IDropZone extends HTMLAttributes<HTMLDivElement> {
  theme?: string;
  variant: TDropZoneVariant;
  onDropChange: (file: File | undefined | string) => void;
  defaultImage: string;
}

const DropZone: React.FC<IDropZone> = ({
  theme = "light",
  variant,
  onDropChange,
  className,
  defaultImage,
}) => {
  const isAvatarVariant = variant === "avatar";
  const [isDragActive, { on: onDragOver, off: onDragLeave }] =
    useBoolean(false);
  const [preview, setPreview] = useState(
    defaultImage ? API_URL + defaultImage : "",
  );
  const isPreview = preview && !isDragActive;

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      onDropChange(file);
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
    onDropChange(file);
    if (file) getBase64(file).then((base64) => setPreview(base64));
    onDragLeave();
  }, []);

  const handlePreviewDelete = () => {
    onDropChange("");
    setPreview("");
  };

  return (
    <div
      className={cx(
        className,
        "drop-zone",
        `drop-zone--${theme}`,
        `drop-zone--${variant}`,
        {
          [`drop-zone--active--${variant}`]: isDragActive,
        },
      )}
    >
      <div
        className={cx("drop-zone__wrapper-zone")}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={onDragLeave}
      >
        {isPreview ? (
          <DropPreview
            theme={theme}
            preview={preview}
            onClick={handlePreviewDelete}
          />
        ) : (
          <div className={cx("drop-zone__zone")}>
            <IconAvatar className={cx("drop-zone__icon")} />
            <div className={cx("drop-zone__drop-text")}>
              {isAvatarVariant ? (
                "You can drop your image here"
              ) : (
                <div className={cx("drop-zone__drop-text--btn")}>
                  Drop your image here, or
                  <DropInput
                    title=" browse"
                    theme={theme}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>
            <p className={cx("drop-zone__drop-warn")}>
              Upload only .jpg or .png format less than 3 MB
            </p>
          </div>
        )}
      </div>
      {isAvatarVariant && (
        <DropInput
          title="Browse Profile Photo"
          theme={theme}
          onChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default DropZone;
