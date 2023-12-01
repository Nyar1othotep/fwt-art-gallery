import { useMemo, useState } from "react";

export const useBoolean = (defaultValue: boolean) => {
  const [value, setValue] = useState(!!defaultValue);

  const handlers = useMemo(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((prev) => !prev),
    }),
    [setValue],
  );

  return [value, handlers, setValue] as const;
};
