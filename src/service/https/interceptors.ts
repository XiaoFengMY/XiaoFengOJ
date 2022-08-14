import { message } from 'antd';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import instance from './default';

// 请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig<any>) =>
    // 在发送请求之前做些什么
    config,
  (error) =>
    // 对请求错误做些什么
    Promise.reject(error),
);

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse<any>) =>
    // 对响应数据做点什么
    response,
  (error: AxiosError) => {
    // 对响应错误做点什么
    message.error(error.message);
    Promise.reject(error);
  },
);

export default instance;
