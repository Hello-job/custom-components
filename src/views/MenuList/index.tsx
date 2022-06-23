import React, { memo, useState } from "react";
import { Menu, Switch, MenuProps, Layout } from "antd";
const { SubMenu } = Menu;

const MenuList = () => {
  return (
    <>
      <Menu  mode="inline">
        <SubMenu title="父组件">
          <Menu.Item key="2">用户管理</Menu.Item>
          <Menu.Item key="4">用户管理</Menu.Item>
        </SubMenu>
        <Menu.Item key="1">用户管理</Menu.Item>
        <Menu.Item key="3">用户管理</Menu.Item>
      </Menu>
    </>
  );
};

export default memo(MenuList);
