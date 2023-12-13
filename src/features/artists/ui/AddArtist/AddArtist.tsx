import { toFormData } from "axios";
import cn from "classnames/bind";
import React, { useCallback, useContext, useEffect } from "react";

import { useCreateArtistMutation } from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { ReactComponent as IconPlus } from "@/shared/assets/plus_icon.svg";
import { useBoolean } from "@/shared/lib/useBoolean";
import { Button } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal";

import { arrayToIds } from "../../lib/arrayToIds";
import { IartistSchema } from "../../model/artistSchema";
import { ArtistForm } from "../ArtistForm";

import styles from "./AddArtist.module.scss";

const cx = cn.bind(styles);

const AddArtist: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [isModal, { on: handleModalOpen, off: handleModalClose }] =
    useBoolean(false);
  const [createArtist, { isSuccess }] = useCreateArtistMutation();

  useEffect(() => {
    if (isSuccess) handleModalClose();
  }, [isSuccess]);

  const onSubmit = useCallback((newArtist: IartistSchema) => {
    const fromData = toFormData({
      ...newArtist,
      genres: arrayToIds(newArtist.genres),
    });
    createArtist(fromData);
  }, []);

  return (
    <>
      <Button theme={theme} variant="text" onClick={handleModalOpen}>
        <IconPlus /> Add artist
      </Button>
      <Modal
        theme={theme}
        isShow={isModal}
        variant="default"
        className={cx("add-artist__modal")}
        onClose={handleModalClose}
      >
        <ArtistForm theme={theme} onSubmitHandler={onSubmit} />
      </Modal>
    </>
  );
};

export default AddArtist;
