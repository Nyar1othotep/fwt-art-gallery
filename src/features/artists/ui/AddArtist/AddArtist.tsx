import cn from "classnames/bind";
import React, { useContext } from "react";

import { ThemeContext } from "@/features/theme";
import { ReactComponent as IconPlus } from "@/shared/assets/plus_icon.svg";
import { useBoolean } from "@/shared/lib/useBoolean";
import { Button } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal";

import { ArtistForm } from "../ArtistForm";

import styles from "./AddArtist.module.scss";

const cx = cn.bind(styles);

const AddArtist: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [isModal, { on: handleModalOpen, off: handleModalClose }] =
    useBoolean(true);

  const onSubmit = () => {};

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
