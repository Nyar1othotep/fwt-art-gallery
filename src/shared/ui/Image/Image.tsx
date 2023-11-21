import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import { ReactComponent as IconPhoto } from "../../assets/photo_icon.svg";
import { API_URL } from "../../config";
import { TImage } from "../../model/types";

import styles from "./Image.module.scss";

const cx = cn.bind(styles);

interface IImage extends HTMLAttributes<HTMLPictureElement> {
  alt: string;
  image: TImage;
  isOriginal?: boolean;
}

const Image: React.FC<IImage> = ({ alt, image, isOriginal, className }) => {
  if (!image)
    return (
      <div className={cx("image__no-image")}>
        <IconPhoto />
        <p>No Image uploaded</p>
      </div>
    );

  if (isOriginal)
    return (
      <div className={className}>
        <img src={API_URL + image.original} loading="lazy" alt={alt} />
      </div>
    );

  return (
    <picture className={className}>
      <source
        type="image/webp"
        srcSet={`${API_URL + image.webp} 1x, ${API_URL + image.webp2x} 2x`}
      />
      <img
        srcSet={`${API_URL + image.src2x} 2x`}
        src={API_URL + image.src}
        loading="lazy"
        alt={alt}
      />
    </picture>
  );
};

export default Image;
