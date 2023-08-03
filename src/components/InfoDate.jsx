import { CalendarProvider } from "../context/CalendarContext";
import Calendar from "./common/Calendar";

// 캘린더에 사용되는 데이터를 쉽게 컴포넌트에 전달할 수 있도록 Context API를 사용하였습니다.
const InfoDate = ({ title, date = "" }) => {
  return (
    <CalendarProvider date={date}>
      <Calendar title={title} date={date} />
    </CalendarProvider>
  );
};

export default InfoDate;
