import cn from "classnames/bind";
import React, { useCallback, useContext } from "react";

import {
  IArtistDto,
  IPaintingDto,
  useEditArtistMainPaintingMutation,
} from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { Button } from "@/shared/ui/Button";

import { ReactComponent as IconGear } from "../assets/gear_icon.svg";
import { DeleteArtwork } from "../DeleteArtwork";
import { EditArtwork } from "../EditArtwork";

import styles from "./ArtworkSettings.module.scss";

const cx = cn.bind(styles);

interface IArtworkSettings {
  artist: IArtistDto;
  painting: IPaintingDto;
}

const ArtworkSettings: React.FC<IArtworkSettings> = ({ artist, painting }) => {
  const isMainPainting = artist.mainPainting?._id === painting._id;
  const { theme } = useContext(ThemeContext);
  const [editMainPainting] = useEditArtistMainPaintingMutation();

  const handleEditMainPainting = useCallback(() => {
    editMainPainting({ id: artist._id, artworkId: painting._id });
  }, [artist, painting]);

  return (
    <div className={cx("artwork-settings", `artwork-settings--${theme}`)}>
      <Button
        className={cx("artwork-settings__btn")}
        theme={theme}
        variant="icon"
      >
        <IconGear />
      </Button>
      <ul className={cx("artwork-settings__menu")}>
        <li
          className={cx("artwork-settings__item")}
          onClick={handleEditMainPainting}
          aria-hidden
        >
          {isMainPainting ? "Remove the cover" : "Make the cover"}
        </li>
        <li className={cx("artwork-settings__item")}>
          <EditArtwork id={artist._id} painting={painting} />
        </li>
        <li className={cx("artwork-settings__item")}>
          <DeleteArtwork id={artist._id} painting={painting} />
        </li>
      </ul>
    </div>
  );
};

export default ArtworkSettings;
