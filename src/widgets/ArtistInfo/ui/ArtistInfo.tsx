import cn from "classnames/bind";
import React from "react";

import { TArtistResponse } from "@/entities/artists";
import { Image } from "@/shared/ui/Image";

import styles from "./ArtistInfo.module.scss";

const cx = cn.bind(styles);

interface IArtistInfo {
  artist: TArtistResponse;
}

const ArtistInfo: React.FC<IArtistInfo> = ({ artist }) => {
  return (
    <div className={cx("artist-info")}>
      <div className={cx("artist-info__avatar", "avatar-artist-info")}>
        <div className={cx("avatar-artist-info__wrapper")}>
          <Image
            className={cx("avatar-artist-info__avatar", "_ibg")}
            image={artist.avatar}
            alt={artist.name}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
