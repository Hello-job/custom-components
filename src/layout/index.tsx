import React, { Suspense } from "react";
import { Layout } from "antd";
import routers from "../routers";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale/zh_CN';
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from '../views/home'

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Layout>
            <Header>Header</Header>
            <Content>
              <Suspense fallback={<>loading...</>}>
                <Routes>
                  {routers.map((route: any) => {
                    return (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                      >
                        {route?.children?.map((item:any) => {
                            return <Route  key={item.path}
                            path={item.path}
                            element={<item.component />} />
                          })}
                      </Route>
                    );
                  })}
                   <Route path="/" element={<Home/>} />
                </Routes>
               
              </Suspense>
              <Outlet/>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
