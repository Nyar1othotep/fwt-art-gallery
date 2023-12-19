import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import { ReactComponent as IconDelete } from "../../assets/delete_icon.svg";
import { Button } from "../Button";

import styles from "./DropZone.module.scss";

const cx = cn.bind(styles);

interface IDropPreview extends HTMLAttributes<HTMLButtonElement> {
  theme?: string;
  preview: string;
}

const DropPreview: React.FC<IDropPreview> = ({ theme, preview, onClick }) => (
  <>
    <img className={cx("drop-zone__image")} src={preview} alt="preview" />
    <Button
      className={cx("drop-zone__btn-delete")}
      theme={theme}
      isButton
      variant="icon"
      onClick={onClick}
    >
      <IconDelete />
    </Button>
  </>
);

export default DropPreview;
