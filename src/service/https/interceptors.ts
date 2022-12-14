import { message } from 'antd';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import instance from './default';

// 请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig<any>) =>
    // 在发送请求之前做些什么
    config,
  (error) => {
    // 对请求错误做些什么
    if (error.message) message.error(error.message);
    Promise.reject(error);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    // 对响应数据做点什么
    console.log('resdate: ', response.data);
    const sucessMessage: any = response.data.message;
    if (sucessMessage) message.success(sucessMessage);
    return response.data;
  },
  (error: AxiosError) => {
    // 对响应错误做点什么
    if (error.response) {
      const errMessage: any = error.response;
      if (errMessage.data.message) message.error(errMessage.data.message);
    } else if (error.message) message.error(error.message);
    Promise.reject(error);
  },
);

export default instance;
