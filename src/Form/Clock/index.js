import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const formatDate = () => {
    return (
      date.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(date => new Date());
    });

    return clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      {`Dzisiaj jest ${formatDate()}`}
    </div>
  );
};

export default Clock;