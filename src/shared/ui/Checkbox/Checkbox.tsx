import cn from "classnames/bind";
import React, { HTMLAttributes, useEffect } from "react";

import { ReactComponent as IconCheck } from "../../assets/success_icon.svg";
import { useBoolean } from "../../lib/useBoolean";

import styles from "./Checkbox.module.scss";

const cx = cn.bind(styles);

interface ICheckbox extends HTMLAttributes<HTMLElement> {
  id: string;
  theme?: string;
  onCheck?: (event: React.SyntheticEvent) => void;
  forceChecked?: boolean;
}

const Checkbox: React.FC<ICheckbox> = ({
  id,
  theme,
  onCheck,
  children,
  className,
  forceChecked = false,
}) => {
  const [isChecked, { toggle: toggleChecked }, setIsChecked] =
    useBoolean(forceChecked);

  useEffect(() => {
    setIsChecked(forceChecked);
  }, [forceChecked]);

  const handleChecked = (event: React.SyntheticEvent) => {
    toggleChecked();
    onCheck?.(event);
  };

  return (
    <div className={cx(className, "checkbox", `checkbox--${theme}`)}>
      <label htmlFor={id} className={cx("checkbox__wrapper")}>
        <div className={cx("checkbox__input-wrapper")}>
          <input
            className={cx("checkbox__input")}
            id={id}
            name={id}
            type="checkbox"
            checked={isChecked}
            onChange={handleChecked}
          />
          {isChecked && <IconCheck className={cx("checkbox__icon")} />}
        </div>
        <span className={cx("checkbox__label")}>{children}</span>
      </label>
    </div>
  );
};

export default Checkbox;
