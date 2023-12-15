import cn from "classnames/bind";
import React from "react";

import { ReactComponent as IconDelete } from "@/shared/assets/delete_icon.svg";
import { Button } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal";

import { TModalVariant } from "../../model/types";

import styles from "./DeleteModal.modules.scss";

const cx = cn.bind(styles);

interface IDeleteModal {
  theme?: string;
  isShow: boolean;
  variant: TModalVariant;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal: React.FC<IDeleteModal> = ({
  theme,
  isShow,
  variant,
  onClose,
  onDelete,
}) => {
  const isArtistVariant = variant === "artist";

  return (
    <Modal
      theme={theme}
      isShow={isShow}
      variant="popup"
      className={cx("delete-modal", `delete-modal--${theme}`)}
      onClose={onClose}
    >
      <div className={cx("delete-modal__content")}>
        <div className={cx("delete-modal__inner")}>
          <IconDelete className={cx("delete-modal__icon")} />
          <div className={cx("delete-modal__title")}>
            Do you want to delete this{" "}
            {isArtistVariant ? "artist profile" : "picture"}?
          </div>
          <p className={cx("delete-modal__text")}>
            You will not be able to recover this{" "}
            {isArtistVariant ? "profile" : "picture"}? afterwards.
          </p>
          <Button theme={theme} onClick={onDelete}>
            Delete
          </Button>
          <Button theme={theme} variant="text" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
