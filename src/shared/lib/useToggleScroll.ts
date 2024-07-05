import { useEffect } from "react";

export const useToggleScroll = (isShow: boolean, debounce: number = 0) => {
  const { style, children } = document.body;
  let timer: NodeJS.Timeout | undefined;

  const handleResetOverflow = () => {
    if (children.length <= 2) style.overflow = "";
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    if (isShow) {
      style.overflow = "hidden";
    }

    return () => {
      timer = setTimeout(handleResetOverflow, debounce);
    };
  }, [isShow]);
};
