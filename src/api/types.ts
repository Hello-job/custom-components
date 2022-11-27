export interface IResponse {
  code: string | number;
  data: any;
  message: string;
}

/**
 * @description: 账号注册
 */
export interface Iregister {
  user_name: string | number;
  password: string | number;
}
