import React, { Suspense } from "react";
import { Layout } from "antd";
import routers from "./routers";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale/zh_CN';
import "antd/dist/antd.css";
import 'normalize.css'
import { BrowserRouter, Routes, Route, Outlet, Navigate , HashRouter} from "react-router-dom";
import SideMenu from "./layout";
import Home from "./views/home";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<>loading</>}>
      <Routes>
      <Route path="/" element={<Navigate to="/home"/>}></Route>
        {routers.map((route: any) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            >
              {route?.children?.map((item: any) => {
                return (
                  <Route
                    key={item.path}
                    path={item.path}
                    element={<item.component />}
                  />
                );
              })}
            </Route>
          );
        })}
      </Routes>
      </Suspense>
   
    </HashRouter>
  );
}

export default App;
