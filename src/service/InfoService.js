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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}

export default InfoService;
