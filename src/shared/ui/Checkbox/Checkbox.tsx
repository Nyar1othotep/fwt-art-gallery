import cn from "classnames/bind";
import React, { HTMLAttributes, useState } from "react";

import { ReactComponent as IconCheck } from "../../assets/success_icon.svg";

import styles from "./Checkbox.module.scss";

const cx = cn.bind(styles);

interface ICheckbox extends HTMLAttributes<HTMLElement> {
  theme?: string;
}

const Checkbox: React.FC<ICheckbox> = ({ theme, children, className }) => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className={cx(className, "checkbox", `checkbox--${theme}`)}>
      <label htmlFor="checkbox" className={cx("checkbox__wrapper")}>
        <div className={cx("checkbox__input-wrapper")}>
          <input
            className={cx("checkbox__input")}
            id="checkbox"
            name="checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />
          {isChecked && <IconCheck className={cx("checkbox__icon")} />}
        </div>
        <span className={cx("checkbox__label")}>{children}</span>
      </label>
    </div>
  );
};

export default Checkbox;
