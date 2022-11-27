import { axisoInstance } from "./axios";
import { IResponse, Iregister } from "./types";
/**
 * @description: 用户注册
 */
export const register = (params: Iregister): Promise<IResponse> => {
  return axisoInstance.post("/register", params);
};

/**
 * @description: 用户登陆
 */
export const login = (params: Iregister): Promise<IResponse> => {
  return axisoInstance.post("/login", params);
};
