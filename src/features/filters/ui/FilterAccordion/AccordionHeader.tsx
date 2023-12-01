import cn from "classnames/bind";
import React, { useContext } from "react";

import { ReactComponent as IconMinus } from "../assets/minus_icon.svg";
import { ReactComponent as IconPlus } from "../assets/plus_icon.svg";

import { ItemContext } from "./AccordionItem";
import styles from "./FilterAccordion.module.scss";

const cx = cn.bind(styles);

interface IHeader {
  title: string;
}

export const Header = ({ title }: IHeader) => {
  const { isOpen, toggleOpen } = useContext(ItemContext);

  return (
    <div
      className={cx("filter-accordion__header")}
      onClick={toggleOpen}
      aria-hidden="true"
    >
      {title}
      {isOpen ? (
        <IconMinus className={cx("filter-accordion__svg")} />
      ) : (
        <IconPlus className={cx("filter-accordion__svg")} />
      )}
    </div>
  );
};
