import requst from '../../https';
import { RegistParams, LoginParams, GetCaptcha } from './types';

const config = {
  headers: {
    authorization: `Bearer ${window.localStorage.getItem('token')}`,
  },
};

const regist = (params: RegistParams) => requst.post('/user/create', params);

const login = (params: LoginParams) => requst.post('/user/login', params);

const getCaptcha = (params: GetCaptcha) => requst.post('/user/getCaptcha', params);

const loginState = () => requst.post('/user/loginStatus', {}, config);

export { regist, getCaptcha, login, loginState };
