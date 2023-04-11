import { useEffect, useState } from "react";

export const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    });
  }, []);

  return date;
};
