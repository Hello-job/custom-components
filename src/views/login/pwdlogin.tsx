import React, { memo } from "react";
import { Form, Input, Button, Checkbox, Select, message } from "antd";
import { register } from "../../api/api";
import Style from "./index.module.less";

const { Option } = Select;

export const PwdLogin = () => {
  const onFinish = async (values: any) => {
    console.log("Success:", values);
    try {
      const { code, message: msg } = await register(values);
      if (code === 0) {
        message.warning(msg);
      }
    } catch (error: any) {
      message.warning(error.message);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={Style.fomrLogin}>
      <p className={Style.title}>密码登陆</p>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ width: "100%" }}
      >
        <Form.Item
          name="user_name"
          rules={[{ required: true, message: "请输入账号" }]}
        >
          <Input size="large" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default memo(PwdLogin);
