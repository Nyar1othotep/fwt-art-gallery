import cn from "classnames/bind";
import React, {
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { ReactComponent as IconMinus } from "../assets/minus_icon.svg";
import { ReactComponent as IconPlus } from "../assets/plus_icon.svg";

import styles from "./FilterAccordion.module.scss";

const cx = cn.bind(styles);

interface IFilterAccordion {
  className: string;
  children: ReactNode;
}

interface IHeader {
  theme?: string;
  title: string;
}

interface IText {
  theme?: string;
  variant?: "default" | "radio";
  onClick: () => void;
  children: ReactNode;
  forceActive: boolean;
}

interface IItemContext {
  isOpen: boolean;
  toggleOpen: () => void;
}

const ItemContext = React.createContext<IItemContext>({} as IItemContext);

const Item = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen]);

  return (
    <ItemContext.Provider value={{ isOpen, toggleOpen }}>
      <div className={cx("filter-accordion__item")}>{children}</div>
    </ItemContext.Provider>
  );
};

const Header = ({ theme = "light", title }: IHeader) => {
  const { isOpen, toggleOpen } = useContext(ItemContext);

  return (
    <div
      className={cx(
        "filter-accordion__header",
        `filter-accordion__header--${theme}`,
      )}
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

const Body = ({ children }: PropsWithChildren) => {
  const { isOpen } = useContext(ItemContext);

  if (!isOpen) return null;

  return <ul className={cx("filter-accordion__body")}>{children}</ul>;
};

const Text = ({
  theme = "light",
  variant = "default",
  onClick,
  children,
  forceActive,
  ...props
}: IText) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => setIsActive(forceActive), [forceActive]);

  const handleClick = () => {
    if (variant !== "radio") setIsActive(!isActive);
    onClick();
  };

  return (
    <li
      className={cx(
        "filter-accordion__text",
        `filter-accordion__text--${theme}`,
        {
          [`filter-accordion__text--${theme}--active`]: isActive,
        },
      )}
      onClick={handleClick}
      aria-hidden="true"
      {...props}
    >
      {children}
    </li>
  );
};

const FilterAccordion = ({ className, children }: IFilterAccordion) => (
  <div className={cx(className, "filter-accordion")}>{children}</div>
);

FilterAccordion.Item = Item;
FilterAccordion.Header = Header;
FilterAccordion.Body = Body;
FilterAccordion.Text = Text;

export default FilterAccordion;
