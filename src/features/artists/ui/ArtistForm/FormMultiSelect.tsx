import cn from "classnames/bind";
import React from "react";
import { FieldValues, Control, useController } from "react-hook-form";

import { IGenres } from "@/shared/api";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Label } from "@/shared/ui/Label";
import { MultiSelect } from "@/shared/ui/MultiSelect";

import { toggleOption } from "../../lib/toggleOption";
import { IartistSchema } from "../../model/artistSchema";
import { IOption } from "../../model/types";

import styles from "./ArtistForm.module.scss";

const cx = cn.bind(styles);

interface IFormMultiSelect {
  name: string;
  theme?: string;
  genres: IGenres[];
  control: Control<IartistSchema & FieldValues>;
}

const FormMultiSelect: React.FC<IFormMultiSelect> = ({
  name: controlName,
  theme,
  genres,
  control,
}) => {
  const {
    field: { onChange, value },
  } = useController({ name: controlName, control });
  const options: IOption[] = value || [];

  const handleOption = (option: IOption) => (event: React.SyntheticEvent) => {
    event.stopPropagation();
    onChange(toggleOption(option, options));
  };

  return (
    <MultiSelect
      theme={theme}
      label="Genres*"
      selected={options.map(({ id, name }) => (
        <Label key={id} theme={theme} onCancel={handleOption({ id, name })}>
          {name}
        </Label>
      ))}
    >
      {genres.map(({ _id, name }) => (
        <Checkbox
          className={cx("artist-form__option")}
          key={_id}
          id={_id}
          theme={theme}
          forceChecked={!!options.find((e) => e.name === name)}
          onCheck={handleOption({ id: _id, name })}
        >
          {name}
        </Checkbox>
      ))}
    </MultiSelect>
  );
};

export default FormMultiSelect;
