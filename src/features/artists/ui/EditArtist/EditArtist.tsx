import { toFormData } from "axios";
import cn from "classnames/bind";
import React, { useCallback, useContext, useEffect } from "react";

import { IArtistDto, useEditArtistMutation } from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { useBoolean } from "@/shared/lib/useBoolean";
import { Button } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal";

import { arrayToIds } from "../../lib/arrayToIds";
import { isDefaultAvatar } from "../../lib/isDefaultAvatar";
import { IartistSchema } from "../../model/artistSchema";
import { ArtistForm } from "../ArtistForm";
import { ReactComponent as IconEdit } from "../assets/edit_icon.svg";

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
    avatar: { webp },
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
    const data = toFormData({
      ...newArtist,
      avatar: isDefaultAvatar(newArtist.avatar, webp),
      genres: arrayToIds(newArtist.genres),
    });
    editArtist({ id, data });
  }, []);

  return (
    <>
      <Button theme={theme} variant="icon" onClick={handleModalOpen}>
        <IconEdit />
      </Button>
      <Modal
        theme={theme}
        isShow={isModal}
        variant="default"
        className={cx("edit-artist__modal")}
        onClose={handleModalClose}
      >
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
      </Modal>
    </>
  );
};

export default EditArtist;
