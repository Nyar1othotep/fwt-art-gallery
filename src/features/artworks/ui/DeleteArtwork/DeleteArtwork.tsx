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

interface IDeleteArtwork {
  id: string;
  painting: IPaintingDto;
}

const DeleteArtwork: React.FC<IDeleteArtwork> = ({
  id,
  painting: { _id: artworkId },
}) => {
  const { theme } = useContext(ThemeContext);
  const [isModal, { on: handleModalOpen, off: handleModalClose }] =
    useBoolean(false);
  const [deleteArtwork] = useDeleteArtworkMutation();

  const handleDeleteArtwork = useCallback(() => {
    deleteArtwork({ id, artworkId });
  }, [id, artworkId]);

  return (
    <>
      <Button theme={theme} variant="icon" onClick={handleModalOpen}>
        <IconDelete />
      </Button>
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
