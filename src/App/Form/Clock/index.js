import { Wrapper } from "./styled.js";
import { useCurrentDate } from "./useCurrentDate.js";

const formatDate = (date) => {
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

export const Clock = () => {
  const date = useCurrentDate();

  return (
    <Wrapper>
      Dzisiaj jest {formatDate(date)}
    </Wrapper>
  );
};