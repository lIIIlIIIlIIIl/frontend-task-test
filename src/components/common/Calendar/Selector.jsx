import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
import { useEffect, useState } from "react";
import useOutSide from "../../../hooks/useOutSidRef";

// 연도와 월을 선택할 수 있는 샐렉터 컴포넌트입니다.
// 연도와 월에서 동일하게 사용될 수 있습니다.
const Selector = ({ type, options, defaultValue, changeDate }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const { outsideRef, isOutsidClick } = useOutSide();

  const clickSelector = () => {
    setIsDropdown((prev) => !prev);
  };

  // 옵션이 클릭 됬을 때, 연도인 경우와 월인 경우를 나눠서 데이터를 업데이트합니다.
  const clickOptions = (event) => {
    if (type === "year") {
      const info = { year: event.target.value };
      changeDate(info);
    }
    if (type === "month") {
      const info = { month: event.target.value };
      changeDate(info);
    }
    setIsDropdown(false);
  };

  // 외부를 클릭했을 때 셀렉터가 닫힙니다.
  useEffect(() => {
    if (isOutsidClick) {
      setIsDropdown(false);
    }
  }, [isOutsidClick]);
  return (
    <section ref={outsideRef}>
      <div
        className={
          isDropdown
            ? type === "year"
              ? "selector-year selector-focus"
              : "selector-month selector-focus"
            : type === "year"
            ? "selector-year"
            : "selector-month"
        }
        onClick={clickSelector}
      >
        <div className="selector-in">
          <div className="selector-in-title">
            <span>
              {type === "year" ? `${defaultValue}년` : `${defaultValue}월`}
            </span>
          </div>
          <div className="selector-in-icon">
            <BsChevronDown />
          </div>
        </div>
      </div>
      {isDropdown ? (
        <ul className="options" onClick={clickOptions}>
          {options.map((option) => (
            <li
              key={option.value}
              value={option.value}
              className={type === "year" ? "option-year" : "option-month"}
            >
              {option.title}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};

export default Selector;
