import { useState } from "react";

export const useArtworkSlider = () => {
  const [slideTo, setSlideTo] = useState(0);
  const [isSlider, setIsSlider] = useState(false);

  const handleSliderOpen = (slide: number) => {
    setSlideTo(slide);
    setIsSlider(true);
  };

  const handleSliderClose = () => setIsSlider(false);

  return { slideTo, isSlider, handleSliderOpen, handleSliderClose };
};
