import React, { lazy, Suspense } from "react";
import Home from "../views/home";
import Login from "../views/login";
const AtTextarea = lazy(() => import("../views/component/at-textarea"));
const Tabs = lazy(() => import("../views/component/tabs"));
const Kanban = lazy(() => import("../views/component/kanban"));
const lazyCom = (children: any) => {
  return <Suspense fallback={<>loading</>}>{children}</Suspense>;
};

const routers = [
  {
    path: "/",
    name: "首页",
    exact: true,
    sensitive: true,
    strict: true,
    element: <Home />,
    children: [
      {
        path: "atTextarea",
        name: "@发表评论组件",
        exact: true,
        sensitive: true,
        strict: true,
        element: lazyCom(<AtTextarea />),
      },
      {
        path: "tabs",
        name: "自定义tabs组件",
        exact: true,
        sensitive: true,
        strict: true,
        element: lazyCom(<Tabs />),
      },
      {
        path: "kanban",
        name: "项目看板",
        exact: true,
        sensitive: true,
        strict: true,
        element: lazyCom(<Kanban />),
      },
    ],
  },
  {
    path: "/login",
    name: "登陆页",
    exact: true,
    sensitive: true,
    strict: true,
    element: <Login />,
  },
];

export default routers;
