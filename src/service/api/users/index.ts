import requst from '../../https';
import { RegistParams, GetCaptcha } from './types';

const regist = (params: RegistParams) => requst.post('/user/create', params);

const getCaptcha = (params: GetCaptcha) => requst.post('/user/getCaptcha', params);

export { regist, getCaptcha };
