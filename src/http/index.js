import axios from "axios";
const http = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000, // 请求超时时间
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
