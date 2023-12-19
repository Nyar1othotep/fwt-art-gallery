import cn from "classnames/bind";
import React, { useContext } from "react";

import { IArtistDto } from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { Button } from "@/shared/ui/Button";
import { OriginalImage } from "@/shared/ui/Image";
import { Label } from "@/shared/ui/Label";

import { useToggleDescription } from "../../lib/description";

import styles from "./ArtistInfo.module.scss";
import { ReactComponent as Icon } from "./assets/expand_icon.svg";

const cx = cn.bind(styles);

interface IArtistInfo {
  artist: IArtistDto;
}

const ArtistInfo: React.FC<IArtistInfo> = ({ artist }) => {
  const { theme } = useContext(ThemeContext);
  const { isLongDescr, isMoreDescr, toggleDescription, description } =
    useToggleDescription(artist.description);

  return (
    <div className={cx("artist-info")}>
      <OriginalImage
        className={cx("artist-info__avatar")}
        alt={artist.name}
        image={artist.avatar}
        theme={theme}
      />
      <div
        className={cx(
          "artist-info__content",
          "artist-content",
          `artist-content--${theme}`,
        )}
      >
        <div className={cx("artist-content__top")}>
          <div className={cx("artist-content__bg")}>
            <p className={cx("artist-content__year")}>{artist.yearsOfLife}</p>
            <p className={cx("artist-content__name")}>{artist.name}</p>
          </div>
        </div>
        <div className={cx("artist-content__bottom")}>
          <div
            className={cx("artist-content__descr", {
              "artist-content__descr--gradient": !isMoreDescr,
            })}
          >
            {description}
          </div>
          {isLongDescr && (
            <Button
              className={cx("artist-content__btn")}
              theme={theme}
              variant="text"
              onClick={toggleDescription}
            >
              {isMoreDescr ? "Read less" : "Read more"}
              <Icon
                className={cx("artist-content__btn-svg", {
                  "artist-content__btn-svg--active": isMoreDescr,
                })}
              />
            </Button>
          )}
          <div className={cx("artist-content__genres")}>
            {artist.genres?.map(({ _id, name }) => (
              <Label key={_id} theme={theme}>
                {name}
              </Label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
