import { useCalendar } from "../../../context/CalendarContext";
import useDays from "../../../hooks/useDays";

const Days = () => {
  const { dateInfo } = useCalendar();
  const { days } = useDays({
    year: dateInfo.year,
    month: dateInfo.month,
    firstDay: dateInfo.firstDay,
    lastDate: dateInfo.lastDate,
  });

  return (
    <div className="days">
      <DayOfWeek />
      <DateOfWeek days={days} />
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
const week = ["일", "월", "화", "수", "목", "금", "토"];

const DateOfWeek = ({ days }) => {
  const { dateInfo, changeDate, onIncrease, onDecrease } = useCalendar();

  const clickDate = (day) => {
    const { date, month } = day;

    if (month === dateInfo.month - 1) {
      onDecrease();
    }
    if (month === dateInfo.month + 1) {
      onIncrease();
    }
    changeDate({ day: date });
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
