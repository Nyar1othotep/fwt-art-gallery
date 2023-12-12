import cn from "classnames/bind";
import React, { useRef } from "react";

import { useBoolean } from "@/shared/lib/useBoolean";
import { Button } from "@/shared/ui/Button";

import { ReactComponent as IconAvatar } from "../assets/profile_icon.svg";

import styles from "./ArtistForm.module.scss";

const cx = cn.bind(styles);

interface IArtistAvatar {
  theme?: string;
}

const ArtistAvatar: React.FC<IArtistAvatar> = ({ theme }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragActive, { on: handleDragOver, off: handleDragLeave }] =
    useBoolean(false);

  const handleBrowseClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    fileInputRef.current?.click();
  };

  return (
    <div
      className={cx("artist-form__avatar", "avatar", `avatar--${theme}`, {
        "avatar--active": isDragActive,
      })}
    >
      <div
        className={cx("avatar__wrapper-zone")}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className={cx("avatar__zone")}>
          <IconAvatar className={cx("avatar__icon")} />
          <p className={cx("avatar__drop-text")}>
            You can drop your image here
          </p>
          <p className={cx("avatar__drop-warn")}>
            Upload only .jpg or .png format less than 3 MB
          </p>
        </div>
      </div>
      <div className={cx("avatar__browse")}>
        <input
          className={cx("avatar__input")}
          ref={fileInputRef}
          type="file"
          onChange={(e) => console.log(e.target.files)}
        />
        <Button
          className={cx("avatar__btn")}
          theme={theme}
          variant="text"
          onClick={handleBrowseClick}
        >
          Browse Profile Photo
        </Button>
      </div>
    </div>
  );
};

export default ArtistAvatar;
