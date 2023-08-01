import { useState } from "react";
import { AiFillCaretDown } from "@react-icons/all-files/ai/AiFillCaretDown";
import { AiFillCaretUp } from "@react-icons/all-files/ai/AiFillCaretUp";

const MenuItem = ({ menuTitle }) => {
  const [isFold, setIsFold] = useState(false);

  const clickMenuTitle = () => {
    setIsFold((prev) => !prev);
  };

  console.log(isFold);

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
