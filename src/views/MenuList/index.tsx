import React, { memo, useEffect, useState, useRef } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { ColResize } from "../../components";
import routers from "../../routers";
import Styles from "./style/index.module.less";
const { SubMenu } = Menu;

const MenuList = () => {
  const navigate = useNavigate();
  const handlePath = (value: any) => {
    console.log(value);
    const { key } = value;
    navigate(key);
  };
  const [sideWidth, setSideWidth] = useState(200);

  const dragResizeRef = useRef<any>(null);

  const getMenuList = (MenuList: any) => {
    return (
      <>
        {MenuList.map((item: any) => {
          if (item.children) {
            return (
              <SubMenu key={item.path} title={item.name}>
                {getMenuList(item.children)}
              </SubMenu>
            );
          }
          return (
            <Menu.Item key={item.path} onClick={handlePath}>
              {item.name}
            </Menu.Item>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className={Styles.sideMenu} style={{ width: sideWidth + "px" }}>
        <Menu mode="inline">{getMenuList(routers)}</Menu>
        <div className={Styles.sideMenuSize}></div>
        <ColResize
          initWidth={200}
          minWidth={200}
          MaxWidth={400}
          setSideWidth={setSideWidth}
        />
      </div>
    </>
  );
};

export default memo(MenuList);
