import { createContext, useContext, useEffect, useState } from "react";

// 캘린더에서 사용되는 날짜 데이터와 focuse 상태를 관리하는 Context입니다.
const CalendarContext = createContext(null);
export const useCalendar = () => useContext(CalendarContext);

export function CalendarProvider({ children, date }) {
  const [dateInfo, setDateInfo] = useState({});
  const [isFocuse, setIsFocuse] = useState(false);

  // 년, 월, 일을 변경하는 함수입니다.
  const changeDate = (info) => {
    setDateInfo((prev) => ({ ...prev, ...info }));
  };

  // 월(month)을 1달씩 증가시키는 함수입니다.
  const onIncrease = () => {
    if (dateInfo.month < 11) {
      setDateInfo((prev) => ({ ...prev, month: prev.month + 1 }));
    } else {
      setDateInfo((prev) => ({ ...prev, month: 1, year: prev.year + 1 }));
    }
  };

  // 월(month)을 1달씩 감소시키는 함수입니다.
  const onDecrease = () => {
    if (dateInfo.month > 1) {
      setDateInfo((prev) => ({ ...prev, month: prev.month - 1 }));
    } else {
      setDateInfo((prev) => ({ ...prev, month: 12, year: prev.year - 1 }));
    }
  };

  // input에 focuse 여부를 변경하는 함수입니다.
  const changeFocuse = () => {
    setIsFocuse((prev) => !prev);
  };

  // 서버로부터 받은 date을 new Date을 사용하여 캘린더에서 사용할 수 있도록 변경합니다.
  useEffect(() => {
    if (date) {
      const newDate = date ? new Date(date) : new Date();
      const year = newDate.getFullYear();
      const month = newDate.getMonth() + 1;
      const day = newDate.getDate();

      const lastDate = parseInt(new Date(year, month, 0).getDate(), 10);
      const firstDay = parseInt(new Date(year, month - 1, 1).getDay(), 10);

      setDateInfo({ year, month, day, lastDate, firstDay });
    }
  }, [date]);

  // 년과 월이 변경될때마다 해당 월의 이전 월과 다음 월 날짜를 가져올 때 필요한 값을 만듭니다.
  useEffect(() => {
    const lastDate = parseInt(
      new Date(dateInfo.year, dateInfo.month, 0).getDate(),
      10
    );
    const firstDay = parseInt(
      new Date(dateInfo.year, dateInfo.month - 1, 1).getDay(),
      10
    );

    setDateInfo((prev) => ({ ...prev, lastDate, firstDay }));
  }, [dateInfo.month, dateInfo.year]);

  return (
    <CalendarContext.Provider
      value={{
        dateInfo,
        changeDate,
        onIncrease,
        onDecrease,
        isFocuse,
        changeFocuse,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
