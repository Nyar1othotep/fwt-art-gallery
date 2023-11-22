import cn from "classnames/bind";
import React, { HTMLAttributes, useContext, useEffect, useRef } from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types/swiper-options";

import { TPainting } from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { ReactComponent as IconClose } from "@/shared/assets/close_icon.svg";
import { Button } from "@/shared/ui/Button";
import { Image } from "@/shared/ui/Image";
import { TransitionWrapper } from "@/shared/ui/Wrappers/TransitionWrapper";

import styles from "./ArtworksSlider.module.scss";
import { ReactComponent as IconPic } from "./assets/change-pic_icon.svg";

import "swiper/scss";
import "swiper/scss/navigation";

const cx = cn.bind(styles);

type TSwiper = SwiperOptions & HTMLAttributes<HTMLElement>;

interface IArtworksSlider extends TSwiper {
  to: number;
  isShow: boolean;
  onClose: () => void;
  paintings: TPainting[];
}

const ArtworksSlider: React.FC<IArtworksSlider> = ({
  to,
  isShow,
  onClose,
  paintings,
  className,
}) => {
  const { theme } = useContext(ThemeContext);
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    if (to) {
      swiperRef.current?.swiper.slideTo(to);
    }
  }, [to]);

  return (
    <TransitionWrapper
      isShow={isShow}
      onClose={onClose}
      variant="slider"
      isTransition={false}
    >
      <>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, A11y]}
          className={cx(className, "artworks-slider")}
          navigation
          slidesPerView={1}
        >
          <>
            {paintings.map(({ _id, name, image, yearOfCreation }, index) => (
              <SwiperSlide
                key={_id}
                className={cx("artworks-slider__slide", "slide")}
              >
                <Image
                  className={cx("slide__bg", `slide__bg--${theme}`)}
                  alt={name}
                  image={image}
                  isOriginal
                />
                <div className={cx("slide__content")}>
                  <div className={cx("slide__container")}>
                    <div className={cx("slide__left")}>
                      <Button theme="dark" variant="text">
                        <IconPic /> Remove the cover
                      </Button>
                      <div
                        className={cx(
                          "slide__info-background",
                          `slide__info-background--${theme}`,
                        )}
                      >
                        <div
                          className={cx("slide__info", `slide__info--${theme}`)}
                        >
                          <div
                            className={cx(
                              "slide__year",
                              `slide__year--${theme}`,
                            )}
                          >
                            {yearOfCreation}
                          </div>
                          <div
                            className={cx(
                              "slide__name",
                              `slide__name--${theme}`,
                            )}
                          >
                            {name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cx("slide__right")}>
                      <div className={cx("slide__count")}>{`${index + 1}/${
                        paintings.length
                      }`}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </>
        </Swiper>
        <div className={cx("artworks-slider__controls")}>
          <div className={cx("artworks-slider__container")}>
            <IconClose
              className={cx("artworks-slider__icon-close")}
              onClick={onClose}
            />
          </div>
        </div>
      </>
    </TransitionWrapper>
  );
};

export default ArtworksSlider;
