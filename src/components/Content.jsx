import { useEffect, useState } from "react";
import { getDataAPI } from "../api/content";
import InfoForm from "./InfoForm";

const Content = () => {
  const [infos, setInfos] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getDataAPI();

        if (data.httpcode === 200) {
          setInfos(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

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
