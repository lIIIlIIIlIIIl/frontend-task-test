import { constAPI } from "./const";

export const getDataAPI = () => {
  return constAPI.get("/test");
};

export const postDataAPI = (req) => {
  return constAPI.post("/test", req);
};
