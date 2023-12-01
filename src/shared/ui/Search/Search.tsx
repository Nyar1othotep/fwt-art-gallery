import cn from "classnames/bind";
import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";

import { ReactComponent as IconClear } from "../../assets/close_icon.svg";
import { ReactComponent as IconSearch } from "../../assets/search-icon.svg";
import { InputWrapper } from "../Wrappers/InputWrapper";

import styles from "./Search.module.scss";

const cx = cn.bind(styles);

interface ISearch extends InputHTMLAttributes<HTMLInputElement> {
  theme?: string;
  initValue?: string;
  onSearchChange?: (value: string) => void;
}

const Search: React.FC<ISearch> = ({
  theme = "light",
  initValue,
  className,
  onSearchChange,
  ...props
}) => {
  const [value, setValue] = useState(initValue || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearchChange?.(e.target.value);
  };

  const handleClear = () => {
    setValue("");
    onSearchChange?.("");
  };

  return (
    <InputWrapper theme={theme}>
      <div className={cx(className, "search", `search--${theme}`)}>
        <IconSearch className={cx("search__search-icon")} />
        <input
          className={cx("search__input")}
          type="text"
          value={value}
          onChange={handleChange}
          {...props}
        />
        {value && (
          <IconClear
            className={cx("search__clear-icon")}
            onClick={handleClear}
          />
        )}
      </div>
    </InputWrapper>
  );
};

export default Search;
