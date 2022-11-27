import React, { memo, useState, useEffect } from "react";
import useDate from "../../hooks/useDate";
import { Menu, Switch, MenuProps, Layout, message } from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import Styles from "./style/index.module.less";
import MenuList from "../MenuList";
import Ball from "../component/suspension-ball";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const Home = () => {
  const { title } = useDate({ title: "我是home" });
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(">>>>环境变量", process.env);
    if (!token) {
      message.warning("身份验证失败请重新登录");
      navigate("/login");
    }
  }, []);
  return (
    <>
      {/* {title}
        <AtInput/>
        <SeleTab/>
    <Outlet/> */}
      <Layout>
        <Sider style={{ width: "auth" }}>
          <MenuList></MenuList>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <div className={Styles.content}>
              <div className={Styles.contentBox}>
                <Outlet />
              </div>
            </div>
          </Content>
        </Layout>
        <Ball />
      </Layout>
    </>
  );
};

export default memo(Home);
