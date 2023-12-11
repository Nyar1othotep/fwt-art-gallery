import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";

import { useBoolean } from "@/shared/lib/useBoolean";

import { ReactComponent as IconArrow } from "../../assets/expand_icon.svg";
import { Checkbox } from "../Checkbox";
import { Label } from "../Label";

import styles from "./MultiSelect.module.scss";

const cx = cn.bind(styles);

interface IMultiSelect extends HTMLAttributes<HTMLElement> {
  theme?: string;
  label?: string;
}

const MultiSelect: React.FC<IMultiSelect> = ({
  theme,
  label,
  //   children,
  //   className,
}) => {
  const [isSelect, { toggle: toggleSelect }] = useBoolean(false);

  return (
    <div className={cx("multiselect", `multiselect--${theme}`)}>
      <div className={cx("multiselect__label")}>{label}</div>
      <div
        className={cx("multiselect__heading")}
        onClick={toggleSelect}
        aria-hidden
      >
        <Label theme={theme}>Romanticism</Label>
        <IconArrow
          className={cx("multiselect__icon", {
            "multiselect__icon--active": isSelect,
          })}
        />
      </div>
      <div className={cx("multiselect__content")}>
        <Checkbox className={cx("multiselect__option")} theme={theme}>
          Romanticism
        </Checkbox>
      </div>
    </div>
  );
};

export default MultiSelect;
