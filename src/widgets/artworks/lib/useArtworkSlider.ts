import { useState } from "react";

import { useBoolean } from "@/shared/lib/useBoolean";

export const useArtworkSlider = () => {
  const [slideTo, setSlideTo] = useState(0);
  const [isSlider, { on: onSliderOpen, off: handleSliderClose }] =
    useBoolean(false);

  const handleSliderOpen = (slide: number) => {
    setSlideTo(slide);
    onSliderOpen();
  };

  return { slideTo, isSlider, handleSliderOpen, handleSliderClose };
};
