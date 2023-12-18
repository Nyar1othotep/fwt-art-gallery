import { useState, useEffect } from "react";

export const useDragAndDrop = <T>(data: T[]) => {
  const [draggedData, setDraggedData] = useState<T[]>(data);
  const [draggedCardIndex, setDraggedCardIndex] = useState<number | null>(null);

  useEffect(() => setDraggedData(data), [data]);

  const handleDragStart = (index: number) => () => setDraggedCardIndex(index);

  const handleDragOver = (index: number) => () => {
    if (draggedCardIndex !== null) {
      const newData = [...draggedData];
      const draggedCard = newData[draggedCardIndex];

      newData.splice(draggedCardIndex, 1);
      newData.splice(index, 0, draggedCard);

      setDraggedData(newData);
      setDraggedCardIndex(index);
    }
  };

  const handleDragEnd = () => setDraggedCardIndex(null);

  return {
    draggedData,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  };
};
