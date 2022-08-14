import requst from '../../https';
import { RegistParams } from './types';

export const regist = (params: RegistParams) => requst.post('/user/create', params);

export const login = (params: any) => requst.post('/users/login', params);
