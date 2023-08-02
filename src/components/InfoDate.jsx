import { CalendarProvider } from "../context/CalendarContext";
import Calendar from "./common/Calendar";

const InfoDate = ({ title, date = "" }) => {
  return (
    <CalendarProvider date={date}>
      <Calendar title={title} date={date} />
    </CalendarProvider>
  );
};

export default InfoDate;
