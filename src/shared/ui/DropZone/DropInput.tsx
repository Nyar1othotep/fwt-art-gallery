import cn from "classnames/bind";
import React, { useRef } from "react";

import { Button } from "../Button";

import styles from "./DropZone.module.scss";

const cx = cn.bind(styles);

interface IDropInput {
  theme?: string;
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DropInput: React.FC<IDropInput> = ({ theme, title, onChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleBrowseClick = () => inputRef.current?.click();

  return (
    <label className={cx("drop-zone__browse")} htmlFor="input-upload">
      <input
        ref={inputRef}
        id="input-upload"
        className={cx("drop-zone__input")}
        type="file"
        accept="image/png, image/jpg, image/jpeg"
        onChange={onChange}
      />
      <Button
        className={cx("drop-zone__btn-browse")}
        theme={theme}
        isButton
        variant="text"
        onClick={handleBrowseClick}
      >
        {title}
      </Button>
    </label>
  );
};

export default DropInput;
