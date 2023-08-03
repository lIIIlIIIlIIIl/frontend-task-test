import { useEffect, useRef, useState } from "react";

// 캘린더에서 셀렉터(년도, 월) 외부를 클릭했을 때를 감지하는 hook 입니다.
const useOutSide = () => {
  const [isOutsidClick, setIsOutsidClick] = useState(false);
  const outsideRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (outsideRef.current && !outsideRef.current.contains(event.target)) {
        setIsOutsidClick(true);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      setIsOutsidClick(false);
    };
  });

  return { outsideRef, isOutsidClick };
};

export default useOutSide;
