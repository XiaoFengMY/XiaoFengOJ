// service/http/testApi/types.ts
// 接口参数类型定义

export interface RegistParams {
  phone: number;
  captcha: number;
  password: string;
  passwordConfirmation: string;
}
