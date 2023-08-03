import { useEffect, useState } from "react";
import { AiFillCaretDown } from "@react-icons/all-files/ai/AiFillCaretDown";
import { AiFillCaretUp } from "@react-icons/all-files/ai/AiFillCaretUp";
import { Link } from "react-router-dom";

// 대메뉴와 소메뉴
const MenuItem = ({ bigMenuTitle, smallTitles }) => {
  const [isFold, setIsFold] = useState(false);
  const pathname = window.location.pathname;

  // 메뉴 클릭 시 메뉴가 접히고 펴지도록 상태를 변경합니다.
  const clickMenuTitle = () => {
    setIsFold((prev) => !prev);
  };

  // url pathname이 소메뉴의 path와 같다면 메뉴가 펼치도록합니다.
  useEffect(() => {
    smallTitles.forEach((menu) => {
      if (menu.path === pathname) setIsFold(true);
    });
  }, [pathname, smallTitles]);

  return (
    <div>
      <div
        className={isFold ? "menu-title" : "menu-title-fold"}
        onClick={clickMenuTitle}
      >
        <p>{bigMenuTitle}</p>
        <div className="menu-title-icon">
          {isFold ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>
      </div>
      {isFold ? (
        <ul>
          {smallTitles.map((menu) => (
            <li
              key={menu.name}
              className={
                pathname === menu.path
                  ? "menu-item menu-item-active "
                  : "menu-item menu-item-hover "
              }
            >
              <Link to={menu.path} className="menu-item-link">
                <p>{menu.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default MenuItem;
