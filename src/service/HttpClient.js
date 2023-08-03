import axios from "axios";

class HttpClient {
  BASE_URL = "https://api-jobtest.json2bot.chat";

  axiosInstance = axios.create({
    baseURL: this.BASE_URL,
  });
}

export default HttpClient;
