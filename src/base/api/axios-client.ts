import axios from "axios";
import { ApiConfig } from "../api/api-config";

const axiosClient = axios.create({
  baseURL: ApiConfig.API_URL,
  headers: {
    "content-type": "application/json",
  },
  responseType: "json",
  timeout: 30000
});

axiosClient.interceptors.request.use(
  (config) => {
    if (config.headers.ProjectId) {
      config.headers.ProjectId = config.headers.ProjectId;
    }
    if (config.headers.Authorization) {
      config.headers.Authorization = config.headers.Authorization;
    }
    return config;
  },
  function error() {
    return Promise.reject(error);
  }
);

export default axiosClient;