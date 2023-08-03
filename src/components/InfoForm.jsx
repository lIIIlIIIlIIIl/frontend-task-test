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
  return (
    <form className="content-form">
      <div className="content-info">
        <InfoItem title="정보1" info={info1} />
        <InfoInput title="정보2" info={info2} />
        <InfoItem title="정보3" info={info3} />
        <InfoInput title="정보4" info={info4} />
        <InfoDate title="날짜" date={date} />
        <InfoRadio title="정보5" info={info5} />
        <InfoCheckBox title="정보6" info={info6} />
      </div>
      <div>
        <button></button>
      </div>
    </form>
  );
};

export default InfoForm;

const InfoItem = ({ title, info }) => {
  return (
    <div className="content-form-container">
      <p className="content-form-title">{title}</p>
      <p className="content-form-info">{info}</p>
    </div>
  );
};

const InfoInput = ({ title, info }) => {
  return (
    <div className="content-form-container">
      <p className="content-form-title">{title}</p>
      <div>
        <input type="text" defaultValue={info} className="content-form-input" />
      </div>
    </div>
  );
};

const InfoCheckBox = ({ title, date }) => {
  return (
    <div className="content-form-container">
      <p className="content-form-title">{title}</p>
      <div>
        <div>
          <input type="checkbox" />
          <label htmlFor="">선택 1</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="">선택 2</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="">선택 3</label>
        </div>
      </div>
    </div>
  );
};
