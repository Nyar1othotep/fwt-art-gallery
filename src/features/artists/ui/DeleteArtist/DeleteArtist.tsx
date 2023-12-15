import React, { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { DeleteModal, useDeleteArtistMutation } from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { ReactComponent as IconDelete } from "@/shared/assets/delete_icon.svg";
import { routeHome } from "@/shared/helpers/routes";
import { useBoolean } from "@/shared/lib/useBoolean";
import { Button } from "@/shared/ui/Button";

interface IDeleteArtist {
  id: string;
}

const DeleteArtist: React.FC<IDeleteArtist> = ({ id }) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [isModal, { on: handleModalOpen, off: handleModalClose }] =
    useBoolean(false);
  const [deleteArtist, { isSuccess }] = useDeleteArtistMutation();

  useEffect(() => {
    if (isSuccess) routeHome(navigate)();
  }, [isSuccess]);

  const handleDeleteArtist = useCallback(() => {
    deleteArtist(id);
  }, [id]);

  return (
    <>
      <Button theme={theme} variant="icon" onClick={handleModalOpen}>
        <IconDelete />
      </Button>
      <DeleteModal
        theme={theme}
        isShow={isModal}
        variant="artist"
        onClose={handleModalClose}
        onDelete={handleDeleteArtist}
      />
    </>
  );
};

export default DeleteArtist;
