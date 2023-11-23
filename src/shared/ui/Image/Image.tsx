import cn from "classnames/bind";
import React, { HTMLAttributes, useState } from "react";

import { ReactComponent as IconPhoto } from "../../assets/photo_icon.svg";
import { API_URL } from "../../config";
import { TImage } from "../../model/types";
import { Preloader } from "../Preloader";

import styles from "./Image.module.scss";

const cx = cn.bind(styles);

interface IImage extends HTMLAttributes<HTMLPictureElement> {
  alt: string;
  image: TImage;
  theme?: string;
  isOriginal?: boolean;
}

const Image: React.FC<IImage> = ({
  alt,
  image,
  theme = "light",
  isOriginal,
  className,
}) => {
  const [isError, setIsError] = useState(false);

  const onImageError = () => setIsError(true);

  if (!image)
    return (
      <div className={cx("image__no-image")}>
        <IconPhoto />
        <p>No Image uploaded</p>
      </div>
    );

  if (isOriginal)
    return (
      <>
        {isError && (
          <div className={className}>
            <Preloader theme={theme} />
          </div>
        )}
        {!isError && (
          <div className={className}>
            <img
              src={API_URL + image.original}
              alt={alt}
              onError={onImageError}
              loading="lazy"
            />
          </div>
        )}
      </>
    );

  return (
    <>
      {isError && (
        <div className={className}>
          <Preloader theme={theme} />
        </div>
      )}
      {!isError && (
        <picture className={className}>
          <source
            type="image/webp"
            srcSet={`${API_URL + image.webp} 1x, ${API_URL + image.webp2x} 2x`}
          />
          <img
            srcSet={`${API_URL + image.src2x} 2x`}
            src={API_URL + image.src}
            alt={alt}
            onError={onImageError}
            loading="lazy"
          />
        </picture>
      )}
    </>
  );
};

export default Image;
