import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";
import Selector from "./Selector";
import { months, years } from "../../../util/selectOtion";
import { useCalendar } from "../../../context/CalendarContext";

// 연도와 월 셀릭터를 담고 있는 컴포넌트입니다.
const YearAndMonth = () => {
  const { dateInfo, changeDate, onIncrease, onDecrease } = useCalendar();

  return (
    <div className="year-month">
      <div>
        <div onClick={onDecrease}>
          <AiOutlineLeft />
        </div>
      </div>
      <div className="selectors">
        <Selector
          type="year"
          defaultValue={dateInfo.year}
          options={years}
          changeDate={changeDate}
        />
        <Selector
          type="month"
          defaultValue={dateInfo.month}
          options={months}
          changeDate={changeDate}
        />
      </div>
      <div onClick={onIncrease}>
        <AiOutlineRight />
      </div>
    </div>
  );
};

export default YearAndMonth;
