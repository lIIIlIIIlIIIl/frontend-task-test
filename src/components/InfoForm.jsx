/* eslint-disable default-case */
import { useApi } from "../context/APIContext";
import InfoCheckBox from "./InfoCehckbox";
import InfoDate from "./InfoDate";
import InfoRadio from "./InfoRadio";

const InfoForm = ({
  info1 = "",
  info2 = "",
  info3 = "",
  info4 = "",
  info5 = "",
  info6 = [],
  date = "",
}) => {
  const API = useApi();

  // 버튼을 클릭했을 때 서버로 데이터를 전송하는 함수입니다.
  // FormDate를 이용하여 버튼을 클릭 했을 때 input value를 가져옵니다.
  const submitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const req = {
      date: "",
      info2: "",
      info4: "",
      info5: "",
      info6: [],
    };

    for (const entry of formData.entries()) {
      const [infoTitle, infoData] = entry;

      switch (infoTitle) {
        case "정보2":
          req.info2 = infoData;
          break;

        case "정보4":
          req.info4 = infoData;
          break;

        case "날짜":
          req.date = infoData;
          break;

        case "정보5":
          req.info5 = infoData;
          break;

        case "정보6":
          req.info6.push(infoData);
          break;
      }
    }

    // 데이터를 서버로 post합니다.
    API.postInfo(req);
  };

  return (
    <form className="content-form" onSubmit={submitForm}>
      <div className="content-info">
        <InfoItem title="정보1" info={info1} />
        <InfoInput title="정보2" info={info2} />
        <InfoItem title="정보3" info={info3} />
        <InfoInput title="정보4" info={info4} />
        <InfoDate title="날짜" date={date} />
        <InfoRadio title="정보5" info={info5} />
        <InfoCheckBox title="정보6" info={info6} />
      </div>
      <div className="submit-btn-wrap">
        <button className="submit-btn" type="submit">
          저장
        </button>
      </div>
    </form>
  );
};

export default InfoForm;

// 정보1, 정보3 컴포넌트
const InfoItem = ({ title, info }) => {
  return (
    <div className="content-form-container">
      <p className="content-form-title">{title}</p>
      <p className="content-form-info">{info}</p>
    </div>
  );
};

// 정보2, 정보4 컴포넌트
const InfoInput = ({ title, info }) => {
  return (
    <div className="content-form-container">
      <p className="content-form-title">{title}</p>
      <div>
        <input
          type="text"
          name={title}
          defaultValue={info}
          className="content-form-input"
        />
      </div>
    </div>
  );
};
