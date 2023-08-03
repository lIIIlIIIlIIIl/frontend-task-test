import { useEffect, useState } from "react";
import { boxOption } from "../util/boxOption";

// 정보6 - 채크박스 컴포넌트입니다.
const InfoCheckBox = ({ title, info }) => {
  const [checkInfo, setCheckInfo] = useState([]);

  useEffect(() => {
    setCheckInfo(() => [...info]);
  }, [info]);

  // 채크박스에서 채크된 값을 골라 배열로 만들어 값을 업데이트해주는 함수입니다.
  const chageCheckbox = (value) => {
    const updatedCheckedItems = [...checkInfo];
    const index = updatedCheckedItems.indexOf(value);
    if (index === -1) {
      updatedCheckedItems.push(value);
    } else {
      updatedCheckedItems.splice(index, 1);
    }

    setCheckInfo([...updatedCheckedItems]);
  };

  return (
    <div className="content-form-container">
      <p className="content-form-title">{title}</p>
      <div className="content-checkbox-wrap">
        {boxOption.map((box) => (
          <CheckboxItem
            checkboxTitle={title}
            title={box}
            key={`radio-${box}`}
            checkInfo={checkInfo}
            chageCheckbox={chageCheckbox}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoCheckBox;

const CheckboxItem = ({ checkboxTitle, title, checkInfo, chageCheckbox }) => {
  const checked = checkInfo.includes(title);
  return (
    <label className="content-checkbox-box ">
      <input
        type="checkbox"
        id={title}
        name={checkboxTitle}
        checked={checked}
        value={title}
        onChange={(event) => chageCheckbox(event.target.value)}
        className={
          checked ? "content-checkbox-checked" : "content-checkbox-not-checked"
        }
      />
      <span className="content-checkbox-title">{title}</span>
    </label>
  );
};
