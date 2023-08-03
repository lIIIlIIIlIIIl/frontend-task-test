import { useEffect, useState } from "react";
import InfoForm from "./InfoForm";
import { useApi } from "../context/APIContext";

const Content = () => {
  const [infos, setInfos] = useState({});
  const API = useApi();

  console.log(infos);

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
