import { createContext, useContext } from "react";

const ApiContext = createContext(null);
export const useApi = () => useContext(ApiContext);

const ApiProvider = ({ children, infoService }) => {
  const getInfo = infoService.getInfo.bind(infoService);
  const postInfo = infoService.postInfo.bind(infoService);
  return (
    <ApiContext.Provider value={{ getInfo, postInfo }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
