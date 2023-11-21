import cn from "classnames/bind";
import React, { useContext } from "react";

import { TArtistResponse } from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { Button } from "@/shared/ui/Button";
import { Image } from "@/shared/ui/Image";
import { Label } from "@/shared/ui/Label";

import { useToggleDescription } from "../lib/useToggleDescription";

import styles from "./ArtistInfo.module.scss";
import { ReactComponent as Icon } from "./assets/expand_icon.svg";

const cx = cn.bind(styles);

interface IArtistInfo {
  artist: TArtistResponse;
}

const ArtistInfo: React.FC<IArtistInfo> = ({ artist }) => {
  const { theme } = useContext(ThemeContext);
  const { description, isShow, toggleShow } = useToggleDescription(artist);

  return (
    <div className={cx("artist-info")}>
      <div className={cx("artist-info__container")}>
        <Image
          className={cx("artist-info__avatar")}
          alt={artist.name}
          image={artist.avatar}
          isOriginal
        />
        <div className={cx("artist-info__content", "artist-content")}>
          <div className={cx("artist-content__top")}>
            <div
              className={cx(
                "artist-content__bg",
                `artist-content__bg--${theme}`,
              )}
            >
              <p
                className={cx(
                  "artist-content__year",
                  `artist-content__year--${theme}`,
                )}
              >
                {artist.yearsOfLife}
              </p>
              <p
                className={cx(
                  "artist-content__name",
                  `artist-content__name--${theme}`,
                )}
              >
                {artist.name}
              </p>
            </div>
          </div>
          <div
            className={cx(
              "artist-content__bottom",
              `artist-content__bottom--${theme}`,
            )}
          >
            <div
              className={cx(
                "artist-content__descr",
                `artist-content__descr--${theme}`,
                { "artist-content__descr--gradient": !isShow },
                { [`artist-content__descr--gradient--${theme}`]: !isShow },
              )}
            >
              {description}
            </div>
            {artist.shortDescription && (
              <Button
                className={cx("artist-content__btn")}
                theme={theme}
                variant="text"
                onClick={toggleShow}
              >
                {isShow ? "Read less" : "Read more"}
                <Icon
                  className={cx("artist-content__btn-svg", {
                    "artist-content__btn-svg--active": isShow,
                  })}
                />
              </Button>
            )}
            <div className={cx("artist-content__genres")}>
              {artist.genres.length !== 0
                ? artist.genres.map(({ _id, name }) => (
                    <Label key={_id} theme={theme}>
                      {name}
                    </Label>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
