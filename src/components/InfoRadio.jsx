import { useEffect, useState } from "react";
import { boxOption } from "../util/boxOption";

const InfoRadio = ({ title, info }) => {
  const [radioInfo, setRadioInfo] = useState("");

  useEffect(() => {
    setRadioInfo(() => info);
  }, [info]);

  const chageRadio = (value) => {
    setRadioInfo(() => value);
  };

  return (
    <div className="content-form-container">
      <p className="content-form-title">{title}</p>
      <div className="content-radio-wrap">
        {boxOption.map((box) => (
          <RadioItem
            radioTitle={title}
            title={box}
            key={`radio-${box}`}
            radioInfo={radioInfo}
            chageRadio={chageRadio}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoRadio;

const RadioItem = ({ radioTitle, title, radioInfo, chageRadio }) => {
  return (
    <label className="content-radio-box">
      <input
        type="radio"
        id={title}
        name={radioTitle}
        checked={radioInfo === title}
        value={title}
        onChange={(event) => chageRadio(event.target.value)}
        className={
          radioInfo === title
            ? "content-radio-chcked"
            : "content-radio-not-checked"
        }
      />
      <span className="content-radio-title">{title}</span>
    </label>
  );
};
