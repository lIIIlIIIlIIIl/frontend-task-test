import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ApiProvider from "./context/APIContext";
import HttpClient from "./service/HttpClient";
import InfoService from "./service/InfoService";

const root = ReactDOM.createRoot(document.getElementById("root"));

const httpClient = new HttpClient();
const infoService = new InfoService(httpClient);

root.render(
  <ApiProvider infoService={infoService}>
    <App />
  </ApiProvider>
);
