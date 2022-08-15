import requst from '../../https';
import { RegistParams } from './types';

const regist = (params: RegistParams) => requst.post('/user/create', params);

const getCaptcha = (params: string) => requst.post('/user/getCaptcha', params);

export { regist, getCaptcha };
