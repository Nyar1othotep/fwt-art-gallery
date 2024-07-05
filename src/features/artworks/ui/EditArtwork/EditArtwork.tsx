import { toFormData } from "axios";
import cn from "classnames/bind";
import React, { useCallback, useContext, useEffect } from "react";

import { IPaintingDto, useEditArtworkMutation } from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { ReactComponent as IconEdit } from "@/shared/assets/edit_icon.svg";
import { isDefaultImage } from "@/shared/lib/isDefaultImage";
import { removeEmpty } from "@/shared/lib/removeEmpty";
import { useBoolean } from "@/shared/lib/useBoolean";
import { Button } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal";

import { IartworkSchema } from "../../model/artworkSchema";
import { TArtworkVariant } from "../../model/types";
import { ArtworkForm } from "../ArtworkForm";

import styles from "./EditArtwork.module.scss";

const cx = cn.bind(styles);
interface IEditArtwork {
  id: string;
  variant?: TArtworkVariant;
  painting: IPaintingDto;
}

const EditArtwork: React.FC<IEditArtwork> = ({
  id,
  variant = "default",
  painting: { _id: artworkId, name, image: { webp } = {}, yearOfCreation },
}) => {
  const isButtonVariant = variant === "button";
  const { theme } = useContext(ThemeContext);
  const [isModal, { on: handleModalOpen, off: handleModalClose }] =
    useBoolean(false);
  const [editArtwork, { isSuccess }] = useEditArtworkMutation();

  useEffect(() => {
    if (isSuccess) handleModalClose();
  }, [isSuccess]);

  const onSubmit = useCallback(
    (newArtwork: IartworkSchema) => {
      const newData = removeEmpty({
        ...newArtwork,
        image: isDefaultImage(newArtwork.image, webp),
      });
      const data = toFormData(newData);
      editArtwork({ id, artworkId, data });
    },
    [id, artworkId],
  );

  return (
    <div className={cx("edit-artwork", `edit-artwork--${theme}`)}>
      {isButtonVariant ? (
        <Button theme={theme} variant="icon" onClick={handleModalOpen}>
          <IconEdit />
        </Button>
      ) : (
        <div onClick={handleModalOpen} aria-hidden>
          Edit
        </div>
      )}

      <Modal
        className={cx("edit-artwork__modal")}
        theme={theme}
        isShow={isModal}
        onClose={handleModalClose}
      >
        <ArtworkForm
          theme={theme}
          defaultValues={{
            name,
            image: webp,
            yearOfCreation,
          }}
          onSubmitHandler={onSubmit}
        />
      </Modal>
    </div>
  );
};

export default EditArtwork;
