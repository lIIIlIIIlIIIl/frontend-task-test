import YearAndMonth from "./YearAndMonth";
import Days from "./Days";
import { useState } from "react";
import { useCalendar } from "../../../context/CalendarContext";

const Calendar = ({ date, title }) => {
  const {
    dateInfo,
    changeDate,
    onIncrease,
    onDecrease,
    isFocuse,
    changeFocuse,
  } = useCalendar();

  return (
    <div className="content-form-container">
      <p className="content-form-title">{title}</p>
      <div>
        <input
          type="text"
          placeholder="yyyy.mm.dd"
          className="content-form-date"
          name={title}
          value={
            !date
              ? date
              : `${dateInfo?.year}.${dateInfo?.month}.${dateInfo?.day}`
          }
          readOnly
          onClick={changeFocuse}
        />
        {isFocuse ? (
          <div className="calendar">
            <div>
              <YearAndMonth />
              <Days
                day={dateInfo?.day}
                month={dateInfo?.month}
                year={dateInfo?.year}
                firstDay={dateInfo?.firstDay}
                lastDate={dateInfo?.lastDate}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                changeDate={changeDate}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Calendar;
