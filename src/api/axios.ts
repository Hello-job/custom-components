import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { message } from "antd";
import { IResponse } from "./types";
import { reject } from "lodash";

let axisoInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 60 * 1000,
  //如需要携带cookie 该值需设为true
  withCredentials: true,
});

/**
 * axios 实例拦截请求
 */
axisoInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("app_token");
    if (token) {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// axios 实例拦截器
axisoInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // if(response.headers.authorization) {

    // }
    if (response.status === 200) {
      return response;
    } else {
      return response;
    }
  },
  (error: any) => {
    const { response } = error;
    if (!response) {
      message.error("网络连接异常，请稍后再试！");
    }
  }
);

export { axisoInstance };
