import cn from "classnames/bind";
import React, { HTMLAttributes, useEffect, useRef } from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperRef } from "swiper/react";
import { SwiperOptions } from "swiper/types/swiper-options";

import { IPaintingDto } from "@/entities/artists";
import { ReactComponent as IconClose } from "@/shared/assets/close_icon.svg";
import { TransitionWrapper } from "@/shared/ui/Wrappers/TransitionWrapper";

import styles from "./ArtworksSlider.module.scss";
import { Slide } from "./Slide";

import "swiper/scss";
import "swiper/scss/navigation";

const cx = cn.bind(styles);

type TSwiper = SwiperOptions & HTMLAttributes<HTMLElement>;

interface IArtworksSlider extends TSwiper {
  to: number;
  isShow: boolean;
  onClose: () => void;
  paintings: IPaintingDto[];
}

const ArtworksSlider: React.FC<IArtworksSlider> = ({
  to,
  isShow,
  onClose,
  paintings,
  className,
}) => {
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
          {paintings.map((painting, index) => {
            const { _id: key } = painting;

            return (
              <Slide
                key={key}
                index={index}
                painting={painting}
                totalPaintings={paintings.length}
              />
            );
          })}
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
