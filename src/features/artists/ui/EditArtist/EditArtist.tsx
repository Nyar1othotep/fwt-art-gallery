import { toFormData } from "axios";
import cn from "classnames/bind";
import React, { useCallback, useContext, useEffect } from "react";

import { IArtistDto, useEditArtistMutation } from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { ReactComponent as IconEdit } from "@/shared/assets/edit_icon.svg";
import { isDefaultImage } from "@/shared/lib/isDefaultImage";
import { removeEmpty } from "@/shared/lib/removeEmpty";
import { useBoolean } from "@/shared/lib/useBoolean";
import { Button } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal";

import { arrayToIds } from "../../lib/arrayToIds";
import { IartistSchema } from "../../model/artistSchema";
import { ArtistForm } from "../ArtistForm";

import styles from "./EditArtist.module.scss";

const cx = cn.bind(styles);

interface IEditArtist {
  artist: IArtistDto;
}

const EditArtist: React.FC<IEditArtist> = ({
  artist: {
    _id: id,
    name,
    genres,
    avatar: { webp } = {},
    yearsOfLife,
    description,
  },
}) => {
  const { theme } = useContext(ThemeContext);
  const [isModal, { on: handleModalOpen, off: handleModalClose }] =
    useBoolean(false);
  const [editArtist, { isSuccess }] = useEditArtistMutation();

  useEffect(() => {
    if (isSuccess) handleModalClose();
  }, [isSuccess]);

  const onSubmit = useCallback((newArtist: IartistSchema) => {
    const newData = removeEmpty({
      ...newArtist,
      avatar: isDefaultImage(newArtist.avatar, webp),
      genres: arrayToIds(newArtist.genres),
    });
    const data = toFormData(newData);
    editArtist({ id, data });
  }, []);

  return (
    <div className={cx("edit-artist")}>
      <Button theme={theme} variant="icon" onClick={handleModalOpen}>
        <IconEdit />
      </Button>
      <Modal
        theme={theme}
        isShow={isModal}
        className={cx("edit-artist__modal")}
        onClose={handleModalClose}
      >
        <div className={cx("edit-artist__content")}>
          <ArtistForm
            theme={theme}
            defaultValues={{
              name,
              description,
              yearsOfLife,
              avatar: webp,
              genres,
            }}
            onSubmitHandler={onSubmit}
          />
        </div>
      </Modal>
    </div>
  );
};

export default EditArtist;
