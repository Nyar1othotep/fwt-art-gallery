import cn from "classnames/bind";
import React, { useContext } from "react";
import { SwiperSlide } from "swiper/react";

import { IArtistDto, IPaintingDto } from "@/entities/artists";
import {
  ArtworkSettings,
  DeleteArtwork,
  EditArtwork,
} from "@/features/artworks";
import { AuthContext } from "@/features/auth";
import { ThemeContext } from "@/features/theme";
import { OriginalImage } from "@/shared/ui/Image";

import styles from "./ArtworksSlider.module.scss";

const cx = cn.bind(styles);

interface ISlide {
  index: number;
  artist: IArtistDto;
  painting: IPaintingDto;
  totalPaintings: number;
}

const Slide: React.FC<ISlide> = ({
  index,
  artist,
  painting,
  totalPaintings,
}) => {
  const { theme } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext);
  const { image, name, yearOfCreation } = painting;

  return (
    <SwiperSlide
      className={cx("artworks-slider__slide", "slide", `slide--${theme}`)}
    >
      <OriginalImage
        className={cx("slide__bg")}
        alt={name}
        image={image}
        theme={theme}
      />
      <div className={cx("slide__content")}>
        <div className={cx("slide__container")}>
          <div className={cx("slide__left")}>
            <ArtworkSettings
              artist={artist}
              variant="button"
              painting={painting}
            />
            <div className={cx("slide__info-background")}>
              <div className={cx("slide__info")}>
                <div className={cx("slide__year")}>{yearOfCreation}</div>
                <div className={cx("slide__name")}>{name}</div>
              </div>
              {isAuth && (
                <div className={cx("slide__controls")}>
                  <EditArtwork
                    id={artist._id}
                    variant="button"
                    painting={painting}
                  />
                  <DeleteArtwork
                    id={artist._id}
                    variant="button"
                    painting={painting}
                  />
                </div>
              )}
            </div>
          </div>
          <div className={cx("slide__right")}>
            <div className={cx("slide__count")}>{`${
              index + 1
            }/${totalPaintings}`}</div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

Slide.displayName = "SwiperSlide";

export default Slide;
