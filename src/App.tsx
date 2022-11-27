import React, { Suspense } from "react";
import { Layout } from "antd";
import routers from "./routers";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale/zh_CN';
import "antd/dist/antd.css";
import "normalize.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
  HashRouter,
  useRoutes,
  Router,
} from "react-router-dom";
import "./style/ant-config.less";

const { Header, Footer, Content } = Layout;

function App() {
  return useRoutes(routers);
}

export default App;
