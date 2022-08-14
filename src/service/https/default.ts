import axios from 'axios';

const apiBase = import.meta.env.VITE_API_BASE_URL;
// 创建一个实例
const instance = axios.create({
  baseURL: apiBase,
  timeout: 5000,
});

export default instance;
