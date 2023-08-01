import axios from "axios";

export const constAPI = axios.create({
  baseURL: "https://api-jobtest.json2bot.chat",
});
