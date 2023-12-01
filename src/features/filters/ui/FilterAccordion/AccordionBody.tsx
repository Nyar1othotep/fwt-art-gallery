import cn from "classnames/bind";
import React, { PropsWithChildren, useContext } from "react";

import { ItemContext } from "./AccordionItem";
import styles from "./FilterAccordion.module.scss";

const cx = cn.bind(styles);

export const Body = ({ children }: PropsWithChildren) => {
  const { isOpen } = useContext(ItemContext);

  return isOpen ? (
    <ul className={cx("filter-accordion__body")}>{children}</ul>
  ) : null;
};
