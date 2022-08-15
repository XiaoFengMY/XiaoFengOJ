// service/http/testApi/types.ts
// 接口参数类型定义
interface RegistParams {
  phone: number;
  captcha: number;
  password: string;
  passwordConfirmation: string;
}

interface GetCaptcha {
  phone: string;
}

export type { RegistParams, GetCaptcha };
