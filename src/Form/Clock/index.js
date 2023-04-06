import { useState } from "react";
import "./style.css";

const Clock = () => {

  const [myDate, setDate] = useState(new Date());

  setTimeout(() => {
    setInterval(() => {
      setDate(myDate => new Date());
    }, 1000);
  }, 0);

  const formatDate = (myDate) =>
    myDate.toLocaleString
      (undefined,
        {
          weekday: "long",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          day: "numeric",
          month: "long",
        }
      );


  return (
    <div className="clock">
      {`Dzisiaj jest ${formatDate(myDate)}`}
    </div>
  );
};

export default Clock;