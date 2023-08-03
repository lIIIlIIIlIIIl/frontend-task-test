import { useCalendar } from "../../../context/CalendarContext";
import useDays from "../../../hooks/useDays";

// 캘린더 날짜 컴포넌트 입니다.
const Days = () => {
  const { dateInfo, changeFocuse } = useCalendar();
  const { days } = useDays({
    year: dateInfo.year,
    month: dateInfo.month,
    firstDay: dateInfo.firstDay,
    lastDate: dateInfo.lastDate,
  });

  return (
    <div className="days">
      <DayOfWeek />
      <DateOfWeek days={days} changeFocuse={changeFocuse} />
    </div>
  );
};

export default Days;

const DayOfWeek = () => {
  return (
    <ul className="week day-week">
      {week.map((day) => (
        <li key={day} className="day">
          <span>{day}</span>
        </li>
      ))}
    </ul>
  );
};

const DateOfWeek = ({ days, changeFocuse }) => {
  const { dateInfo, changeDate, onIncrease, onDecrease } = useCalendar();

  // 날짜를 클릭했을 때 해당 날짜로 값을 업데이트하는 함수입니다.
  // 이전 월의 날짜를 클릭했을 때 이전 월로 변경되고, 다음 월의 날짜를 클릭했을 때 다음 월로 변경됩니다.
  const clickDate = (day) => {
    const { date, month } = day;

    if (month === dateInfo.month - 1) {
      onDecrease();
    }
    if (month === dateInfo.month + 1) {
      onIncrease();
    }
    changeDate({ day: date });
    changeFocuse();
  };

  return (
    <>
      {days.map((week, idx) => (
        <ul key={`week-${idx}`} className="week">
          {week.map((day) => (
            <li
              key={`day-${day.date}`}
              value={day.month}
              className={
                day.date === dateInfo.day && day.month === dateInfo.month
                  ? "day this-day"
                  : day.month === dateInfo.month
                  ? "day this-month"
                  : "day not-this-month"
              }
              onClick={() => clickDate(day)}
            >
              {day.date}
            </li>
          ))}
        </ul>
      ))}
    </>
  );
};

const week = ["일", "월", "화", "수", "목", "금", "토"];
