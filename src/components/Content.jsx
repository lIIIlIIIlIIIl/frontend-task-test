import { useEffect, useState } from "react";
import InfoForm from "./InfoForm";
import { useApi } from "../context/APIContext";

// 타이틀 정보들이 담겨있는 컴포넌트입니다.
const Content = () => {
  const [infos, setInfos] = useState({});
  const API = useApi();

  // 화면이 마운트될 때마다 API를 호출해서 데이터를 가져옵니다.
  useEffect(() => {
    const getData = async () => {
      const response = await API.getInfo();

      if (response.httpcode === 200) {
        setInfos(response.data);
      }
    };

    getData();
  }, [API]);

  return (
    <main className="content">
      <h1 className="content-title">타이틀</h1>
      <InfoForm
        info1={infos.info1}
        info2={infos.info2}
        info3={infos.info3}
        info4={infos.info4}
        info5={infos.info5}
        info6={infos.info6}
        date={infos.date}
      />
    </main>
  );
};

export default Content;
