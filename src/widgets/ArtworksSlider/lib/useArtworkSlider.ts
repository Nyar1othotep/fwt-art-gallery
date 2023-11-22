import { useState } from "react";

export const useArtworkSlider = () => {
  const [slideTo, setSlideTo] = useState(0);
  const [isSlider, setIsSlider] = useState(false);

  const onOpenSlider = (slide: number) => {
    setSlideTo(slide);
    setIsSlider(true);
  };

  const onCloseSlider = () => setIsSlider(false);

  return { slideTo, isSlider, onOpenSlider, onCloseSlider };
};
