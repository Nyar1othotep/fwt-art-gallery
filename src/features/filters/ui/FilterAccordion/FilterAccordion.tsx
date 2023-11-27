import cn from "classnames/bind";
import React, {
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
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
  title: string;
}

interface IText {
  theme: string;
  onClick: () => void;
  children: ReactNode;
  forceActive: boolean;
}

interface IAccordionContext {
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionContext = React.createContext<IAccordionContext>(
  {} as IAccordionContext,
);

const Item = ({ children }: PropsWithChildren) => (
  <div className={cx("filter-accordion__item")}>{children}</div>
);

const Header = ({ title }: IHeader) => {
  const { isOpen, toggleOpen } = useContext(AccordionContext);

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

const Body = ({ children }: PropsWithChildren) => {
  const { isOpen } = useContext(AccordionContext);

  if (!isOpen) return null;

  return <ul className={cx("filter-accordion__body")}>{children}</ul>;
};

const Text = ({
  theme = "light",
  onClick,
  children,
  forceActive,
  ...props
}: IText) => {
  const [isActive, setIsActive] = useState(forceActive);

  const handleClick = () => {
    setIsActive(!isActive);
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

const FilterAccordion = ({ className, children }: IFilterAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen]);

  return (
    <AccordionContext.Provider value={{ isOpen, toggleOpen }}>
      <div className={cx(className, "filter-accordion")}>{children}</div>
    </AccordionContext.Provider>
  );
};

FilterAccordion.Item = Item;
FilterAccordion.Header = Header;
FilterAccordion.Body = Body;
FilterAccordion.Text = Text;

export default FilterAccordion;
