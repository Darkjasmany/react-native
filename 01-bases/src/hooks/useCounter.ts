// Custom Hooks
import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState<number>(0);

  const increaseBy = (value: number) => {
    // setCount(count + value);
    // setCount((current) => current + value);
    setCount(Math.max(value + count, 0)); // Validar que solo coja valores positivos
  };

  return {
    // Properties
    count,

    // Actions
    increaseBy,
  };
};
