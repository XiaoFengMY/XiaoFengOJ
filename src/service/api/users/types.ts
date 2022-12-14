// service/http/testApi/types.ts
// 接口参数类型定义
interface RegistParams {
  phone: number;
  captcha: number;
  password: string;
  passwordConfirmation: string;
}

interface LoginParams {
  phone: number;
  key: string;
  captcha?: number;
  password?: string;
}

interface GetCaptcha {
  type: 'login' | 'regist';
  phone: string;
}

export type { RegistParams, GetCaptcha, LoginParams };
