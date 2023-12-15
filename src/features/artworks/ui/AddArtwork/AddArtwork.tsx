import { toFormData } from "axios";
import cn from "classnames/bind";
import React, { useCallback, useContext, useEffect } from "react";

import { IArtistDto, useCreateArtworkMutation } from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { ReactComponent as IconPlus } from "@/shared/assets/plus_icon.svg";
import { removeEmpty } from "@/shared/lib/removeEmpty";
import { useBoolean } from "@/shared/lib/useBoolean";
import { Button } from "@/shared/ui/Button";
import { ErrorImage } from "@/shared/ui/Image";
import { Modal } from "@/shared/ui/Modal";

import { IartworkSchema } from "../../model/artworkSchema";
import { TAddArtworkVariant } from "../../model/types";
import { ArtworkForm } from "../ArtworkForm";

import styles from "./AddArtwork.module.scss";

const cx = cn.bind(styles);

interface IAddArtwork {
  artist: IArtistDto;
  variant?: TAddArtworkVariant;
}

const AddArtwork: React.FC<IAddArtwork> = ({
  variant = "default",
  artist: { _id: id },
}) => {
  const isButtonVariant = variant === "button";
  const { theme } = useContext(ThemeContext);
  const [isModal, { on: handleModalOpen, off: handleModalClose }] =
    useBoolean(false);
  const [createArtwork, { isSuccess }] = useCreateArtworkMutation();

  useEffect(() => {
    if (isSuccess) handleModalClose();
  }, [isSuccess]);

  const onSubmit = useCallback((newArtwork: IartworkSchema) => {
    const newData = removeEmpty(newArtwork);

    const data = toFormData(newData);

    createArtwork({ id, data });
  }, []);

  return (
    <div className={cx("add-artwork", `add-artwork--${theme}`)}>
      {isButtonVariant ? (
        <Button theme={theme} variant="text" onClick={handleModalOpen}>
          <IconPlus /> Add picture
        </Button>
      ) : (
        <div className={cx("add-artwork__picture")}>
          <ErrorImage className={cx("add-artwork__image")} theme={theme} />
          <Button
            className={cx("add-artwork__btn")}
            theme={theme}
            onClick={handleModalOpen}
          >
            <IconPlus />
          </Button>
        </div>
      )}
      <Modal
        theme={theme}
        isShow={isModal}
        className={cx("add-artwork__modal")}
        onClose={handleModalClose}
      >
        <div className={cx("add-artwork__content")}>
          <ArtworkForm theme={theme} onSubmitHandler={onSubmit} />
        </div>
      </Modal>
    </div>
  );
};

export default AddArtwork;
