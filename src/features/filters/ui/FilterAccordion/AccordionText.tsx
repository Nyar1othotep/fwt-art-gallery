import cn from "classnames/bind";
import React, { ReactNode, useEffect } from "react";

import { useBoolean } from "@/shared/lib/useBoolean";

import styles from "./FilterAccordion.module.scss";

const cx = cn.bind(styles);

interface IText {
  variant?: "default" | "radio";
  onClick: () => void;
  children: ReactNode;
  forceActive?: boolean;
}

const Text = ({
  variant = "default",
  onClick,
  children,
  forceActive = false,
  ...props
}: IText) => {
  const [isActiveItem, { toggle: toggleActiveItem }, setForceActiveItem] =
    useBoolean(false);

  useEffect(() => setForceActiveItem(forceActive), [forceActive]);

  const handleClick = () => {
    if (variant !== "radio") toggleActiveItem();
    onClick();
  };

  return (
    <li
      className={cx("filter-accordion__text", {
        [`filter-accordion__text--active`]: isActiveItem,
      })}
      onClick={handleClick}
      aria-hidden="true"
      {...props}
    >
      {children}
    </li>
  );
};

export default Text;
