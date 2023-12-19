import cn from "classnames/bind";
import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

import styles from "./FilterAccordion.module.scss";

const cx = cn.bind(styles);

interface IItemContext {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const ItemContext = React.createContext<IItemContext>(
  {} as IItemContext,
);

const Item = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen]);

  const value = useMemo(() => ({ isOpen, toggleOpen }), [isOpen]);

  return (
    <ItemContext.Provider value={value}>
      <div className={cx("filter-accordion__item")}>{children}</div>
    </ItemContext.Provider>
  );
};

export default Item;
