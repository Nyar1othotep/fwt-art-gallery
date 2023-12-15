import cn from "classnames/bind";
import React, { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDeleteArtistMutation } from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { ReactComponent as IconDelete } from "@/shared/assets/delete_icon.svg";
import { routeHome } from "@/shared/helpers/routes";
import { useBoolean } from "@/shared/lib/useBoolean";
import { Button } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal";

import styles from "./DeleteArtist.module.scss";

const cx = cn.bind(styles);

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
    <div className={cx("delete-artist", `delete-artist--${theme}`)}>
      <Button theme={theme} variant="icon" onClick={handleModalOpen}>
        <IconDelete />
      </Button>
      <Modal
        theme={theme}
        isShow={isModal}
        variant="popup"
        className={cx("delete-artist__modal")}
        onClose={handleModalClose}
      >
        <div className={cx("delete-artist__content")}>
          <div className={cx("delete-artist__inner")}>
            <IconDelete className={cx("delete-artist__icon")} />
            <div className={cx("delete-artist__title")}>
              Do you want to delete this artist profile?
            </div>
            <p className={cx("delete-artist__text")}>
              You will not be able to recover this profile afterwards.
            </p>
            <Button theme={theme} onClick={handleDeleteArtist}>
              Delete
            </Button>
            <Button theme={theme} variant="text" onClick={handleModalClose}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteArtist;
