import React, { memo, useState } from "react";
import { Menu } from "antd";
import { useNavigate } from 'react-router-dom'
import routers from '../../routers'
const { SubMenu } = Menu;

const MenuList = () => {
  const navigate = useNavigate()
  const handlePath = (value: any) => {
    console.log(value)
    const { key } = value;
    navigate(key)
  }


  const getMenuList = (MenuList: any) => {
    return <>
        {
          MenuList.map((item: any) => {
            if (item.children) {
              return  <SubMenu key={item.path} title={item.name}>
                    {getMenuList(item.children)}
              </SubMenu>
            }
            return <Menu.Item key={item.path} onClick={handlePath}>{item.name}</Menu.Item>
          })
        }
    </>
  }
  return (
    <>
      <Menu  mode="inline">
       {getMenuList(routers)}
      </Menu>
    </>
  );
};

export default memo(MenuList);
