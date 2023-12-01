import { useEffect, useState, useRef } from "react";

export const useObserver = (options: IntersectionObserverInit) => {
  const observerRef = useRef(null);
  const [inView, setInView] = useState(false);

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setInView(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [observerRef, options]);

  return { observerRef, inView };
};
