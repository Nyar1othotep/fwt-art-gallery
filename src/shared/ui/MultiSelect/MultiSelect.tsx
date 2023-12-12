import cn from "classnames/bind";
import React, { HTMLAttributes, useRef } from "react";

import { ReactComponent as IconArrow } from "../../assets/expand_icon.svg";
import { useBoolean } from "../../lib/useBoolean";
import { useOutsideClick } from "../../lib/useOutsideClick";

import styles from "./MultiSelect.module.scss";

const cx = cn.bind(styles);

interface IMultiSelect extends HTMLAttributes<HTMLElement> {
  theme?: string;
  label: string;
  selected?: React.ReactNode;
}

const MultiSelect: React.FC<IMultiSelect> = ({
  theme,
  label,
  selected,
  children,
  className,
}) => {
  const wrapperRef = useRef(null);
  const [isSelect, { off: onIsSelectClose, toggle: toggleSelect }] =
    useBoolean(false);

  useOutsideClick(wrapperRef, onIsSelectClose);

  return (
    <div
      ref={wrapperRef}
      className={cx(className, "multiselect", `multiselect--${theme}`, {
        "multiselect--active": isSelect,
      })}
    >
      <div className={cx("multiselect__label")}>{label}</div>
      <div
        className={cx("multiselect__heading")}
        onClick={toggleSelect}
        aria-hidden
      >
        {selected}
        <IconArrow className={cx("multiselect__icon")} />
      </div>
      <div className={cx("multiselect__content")}>{children}</div>
    </div>
  );
};

export default MultiSelect;
