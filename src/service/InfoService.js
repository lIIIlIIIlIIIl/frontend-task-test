// 서버에 호출할 때 사용되는 함수를 담고 있는 클래스입니다.
class InfoService {
  httpClient = null;

  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async getInfo() {
    try {
      const response = await this.httpClient.axiosInstance.get("/test");
      if (response.status === 200) return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async postInfo(req) {
    try {
      const response = await this.httpClient.axiosInstance.post("/test", req);
      if (response.status === 200) alert(response.data.data.message);
    } catch (error) {
      alert(error.response.data.error.message);
    }
  }
}

export default InfoService;
