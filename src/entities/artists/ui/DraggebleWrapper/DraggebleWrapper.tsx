import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import { Button } from "@/shared/ui/Button";

import { ReactComponent as IconDrag } from "../assets/drag_icon.svg";

import styles from "./DraggebleWrapper.module.scss";

const cx = cn.bind(styles);

interface IDraggebleWrapper extends HTMLAttributes<HTMLDivElement> {
  id: string;
  theme?: string;
  index: number;
}

const DraggebleWrapper: React.FC<IDraggebleWrapper> = ({
  id,
  theme,
  index,
  children,
  ...props
}) => {
  return (
    <div className={cx("draggble-wrapper")} key={id} draggable {...props}>
      <Button
        className={cx("draggble-wrapper__btn")}
        theme={theme}
        variant="icon"
      >
        <IconDrag />
      </Button>
      {children}
    </div>
  );
};

export default DraggebleWrapper;
