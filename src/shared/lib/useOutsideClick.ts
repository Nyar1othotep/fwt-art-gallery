import { RefObject, useEffect } from "react";

type THandler = () => void;

export function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: THandler,
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handler();
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    document.addEventListener("keydown", keyHandler);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
      document.removeEventListener("keydown", keyHandler);
    };
  }, [ref, handler]);
}
