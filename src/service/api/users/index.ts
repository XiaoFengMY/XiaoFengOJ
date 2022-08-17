import requst from '../../https';
import { RegistParams, LoginParams, GetCaptcha } from './types';

const regist = (params: RegistParams) => requst.post('/user/create', params);

const login = (params: LoginParams) => requst.post('/user/login', params);

const getCaptcha = (params: GetCaptcha) => requst.post('/user/getCaptcha', params);

export { regist, getCaptcha, login };
