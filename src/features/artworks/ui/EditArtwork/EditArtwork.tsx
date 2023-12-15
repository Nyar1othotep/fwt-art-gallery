import { toFormData } from "axios";
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
import { ArtworkForm } from "../ArtworkForm";

interface IEditArtwork {
  id: string;
  painting: IPaintingDto;
}

const EditArtwork: React.FC<IEditArtwork> = ({
  id,
  painting: { _id: artworkId, name, image: { webp } = {}, yearOfCreation },
}) => {
  const { theme } = useContext(ThemeContext);
  const [isModal, { on: handleModalOpen, off: handleModalClose }] =
    useBoolean(false);
  const [editArtwork, { isSuccess }] = useEditArtworkMutation();

  useEffect(() => {
    if (isSuccess) handleModalClose();
  }, [isSuccess]);

  const onSubmit = useCallback((newArtwork: IartworkSchema) => {
    const newData = removeEmpty({
      ...newArtwork,
      image: isDefaultImage(newArtwork.image, webp),
    });
    const data = toFormData(newData);
    editArtwork({ id, artworkId, data });
  }, []);

  return (
    <>
      <Button theme={theme} variant="icon" onClick={handleModalOpen}>
        <IconEdit />
      </Button>
      <Modal theme={theme} isShow={isModal} onClose={handleModalClose}>
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
    </>
  );
};

export default EditArtwork;
