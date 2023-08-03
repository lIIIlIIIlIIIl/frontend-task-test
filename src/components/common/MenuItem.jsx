import { useState } from "react";
import { AiFillCaretDown } from "@react-icons/all-files/ai/AiFillCaretDown";
import { AiFillCaretUp } from "@react-icons/all-files/ai/AiFillCaretUp";

// 대메뉴와 소메뉴
const MenuItem = ({ menuTitle }) => {
  const [isFold, setIsFold] = useState(false);

  // 메뉴 클릭 시 메뉴가 접히고 펴지도록 상태를 변경합니다.
  const clickMenuTitle = () => {
    setIsFold((prev) => !prev);
  };

  return (
    <div>
      <div
        className={isFold ? "menu-title" : "menu-title-fold"}
        onClick={clickMenuTitle}
      >
        <p>{menuTitle}</p>
        <div className="menu-title-icon">
          {isFold ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>
      </div>
      {isFold ? (
        <ul>
          {smallMenu.map((menu) => (
            <li key={menu.id} className="menu-item">
              <p>{menu.title}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default MenuItem;

const smallMenu = [
  { id: 0, title: "소메뉴" },
  { id: 1, title: "소메뉴" },
];
