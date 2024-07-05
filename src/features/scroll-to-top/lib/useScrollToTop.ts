import { useEffect } from "react";

import { useBoolean } from "@/shared/lib/useBoolean";

export const useScrollToTop = () => {
  const [isShow, { on: onShow, off: onHide }] = useBoolean(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 400 ? onShow() : onHide(),
    );
  }, [onShow, onHide]);

  return isShow;
};
