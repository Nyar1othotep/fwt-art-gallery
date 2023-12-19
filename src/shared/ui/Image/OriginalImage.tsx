import cn from "classnames/bind";
import React from "react";

import { IImageComponent } from "@/shared/model/types";

import { API_URL } from "../../config";
import { useBoolean } from "../../lib/useBoolean";
import { Preloader } from "../Preloader";

import ErrorImage from "./ErrorImage";
import styles from "./Image.module.scss";

const cx = cn.bind(styles);

const OriginalImage: React.FC<IImageComponent> = ({
  alt,
  image,
  theme = "light",
  className,
}) => {
  const [isImageLoading, { off: onImageLoaded }] = useBoolean(true);
  const [isImageError, { on: onImageError }] = useBoolean(false);

  if (!image)
    return (
      <div className={cx(className, "image-wrapper")}>
        <ErrorImage theme={theme} title="No image uploaded" />
      </div>
    );

  return (
    <div className={cx(className, "image-wrapper")}>
      {!isImageError ? (
        <img
          className={cx("image", { "image--loading": isImageLoading })}
          src={API_URL + image.original}
          alt={alt}
          onLoad={onImageLoaded}
          onError={onImageError}
          loading="lazy"
        />
      ) : (
        <ErrorImage theme={theme} title="Image load error" />
      )}
      {isImageLoading && !isImageError && (
        <Preloader className={cx("preloader")} theme={theme} />
      )}
    </div>
  );
};

export default OriginalImage;
