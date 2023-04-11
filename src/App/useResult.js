import { useState } from "react";

export const useResult = () => {
  const [result, setResult] = useState(0);

  const calculateResult = (inputValue, outputValue, amount) => {
    setResult((result) => (amount * inputValue) / outputValue);
  };

  return { result, calculateResult };
};
