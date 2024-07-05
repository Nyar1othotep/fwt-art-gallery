import cn from "classnames/bind";
import React, { ReactNode } from "react";

import Body from "./AccordionBody";
import Header from "./AccordionHeader";
import Item from "./AccordionItem";
import Text from "./AccordionText";
import styles from "./FilterAccordion.module.scss";

const cx = cn.bind(styles);

interface IFilterAccordion {
  theme?: string;
  className: string;
  children: ReactNode;
}

const FilterAccordion = ({
  theme = "light",
  className,
  children,
}: IFilterAccordion) => (
  <div
    className={cx(className, "filter-accordion", `filter-accordion--${theme}`)}
  >
    {children}
  </div>
);

FilterAccordion.Item = Item;
FilterAccordion.Header = Header;
FilterAccordion.Body = Body;
FilterAccordion.Text = Text;

export default FilterAccordion;
