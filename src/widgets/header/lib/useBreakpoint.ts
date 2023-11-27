import { useEffect, useState } from "react";

export const useBreakpoint = (breakpoint: number) => {
  const [value, setValue] = useState(window.innerWidth >= breakpoint);

  useEffect(() => {
    const listener = () => {
      setValue(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [breakpoint]);

  return [value, setValue];
};
