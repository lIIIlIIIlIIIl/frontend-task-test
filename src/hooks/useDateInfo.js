/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useDateInfo = (date) => {
  const [dateInfo, setDateInfo] = useState({});

  const changeDate = (info) => {
    setDateInfo((prev) => ({ ...prev, ...info }));
  };

  const onIncrease = () => {
    if (dateInfo.month < 11) {
      setDateInfo((prev) => ({ ...prev, month: prev.month + 1 }));
    } else {
      setDateInfo((prev) => ({ ...prev, month: 1, year: prev.year + 1 }));
    }
  };

  const onDecrease = () => {
    if (dateInfo.month > 1) {
      setDateInfo((prev) => ({ ...prev, month: prev.month - 1 }));
    } else {
      setDateInfo((prev) => ({ ...prev, month: 12, year: prev.year - 1 }));
    }
  };

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

  return { dateInfo, changeDate, onIncrease, onDecrease };
};

export default useDateInfo;
