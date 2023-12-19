import cn from "classnames/bind";
import React from "react";

import { IImageComponent } from "@/shared/model/types";

import { API_URL } from "../../config";
import { useBoolean } from "../../lib/useBoolean";
import { Preloader } from "../Preloader";

import ErrorImage from "./ErrorImage";
import styles from "./Image.module.scss";

const cx = cn.bind(styles);

const Image: React.FC<IImageComponent> = ({
  alt,
  image,
  theme = "light",
  className,
}) => {
  const [isImageLoading, { off: onImageLoaded }] = useBoolean(true);
  const [isImageError, { on: onImageError }] = useBoolean(false);

  if (!image)
    return (
      <div className={className}>
        <ErrorImage theme={theme} title="No image uploaded" />
      </div>
    );

  return (
    <div className={className}>
      {!isImageError ? (
        <picture className={className}>
          <source
            type="image/webp"
            srcSet={`${API_URL + image.webp} 1x, ${API_URL + image.webp2x} 2x`}
          />
          <img
            className={cx("image", { "image--loading": isImageLoading })}
            srcSet={`${API_URL + image.src2x} 2x`}
            src={API_URL + image.src}
            alt={alt}
            onLoad={onImageLoaded}
            onError={onImageError}
            loading="lazy"
          />
        </picture>
      ) : (
        <ErrorImage theme={theme} title="Image load error" />
      )}
      {isImageLoading && !isImageError && (
        <Preloader className={cx("preloader")} theme={theme} />
      )}
    </div>
  );
};

export default Image;
