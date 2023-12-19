import React, { useCallback, useContext } from "react";

import {
  DeleteModal,
  IPaintingDto,
  useDeleteArtworkMutation,
} from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { ReactComponent as IconDelete } from "@/shared/assets/delete_icon.svg";
import { useBoolean } from "@/shared/lib/useBoolean";
import { Button } from "@/shared/ui/Button";

import { TArtworkVariant } from "../../model/types";

interface IDeleteArtwork {
  id: string;
  variant?: TArtworkVariant;
  painting: IPaintingDto;
}

const DeleteArtwork: React.FC<IDeleteArtwork> = ({
  id,
  variant = "default",
  painting: { _id: artworkId },
}) => {
  const isButtonVariant = variant === "button";
  const { theme } = useContext(ThemeContext);
  const [isModal, { on: handleModalOpen, off: handleModalClose }] =
    useBoolean(false);
  const [deleteArtwork] = useDeleteArtworkMutation();

  const handleDeleteArtwork = useCallback(() => {
    deleteArtwork({ id, artworkId });
  }, [id, artworkId]);

  return (
    <>
      {isButtonVariant ? (
        <Button theme={theme} variant="icon" onClick={handleModalOpen}>
          <IconDelete />
        </Button>
      ) : (
        <div onClick={handleModalOpen} aria-hidden>
          Delete
        </div>
      )}
      <DeleteModal
        theme={theme}
        isShow={isModal}
        variant="artwork"
        onClose={handleModalClose}
        onDelete={handleDeleteArtwork}
      />
    </>
  );
};

export default DeleteArtwork;
