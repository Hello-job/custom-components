import React, { memo } from 'react'
import useDate from '../../hooks/useDate'
import { Menu, Switch, MenuProps, Layout } from "antd";
import { useNavigate,Outlet } from "react-router-dom";
import AtInput from '../../components/at-input';

const { SubMenu } = Menu;
const {Sider} = Layout; //使用定义
const Home = () => {
    const { title } = useDate({title: '我是home'})
    const navigate = useNavigate();
    const onClick = (e: any) => {
      console.log(">>>>>路由信息", e);
      navigate(e.key)
    };
    const routers = [
        {
            path: '/home/A',
            name: '项目A',
            exact: true,
            sensitive: true,
            strict: true,
        },
        {
            path: '/home/B',
            name: '项目B',
            exact: true,
            sensitive: true,
            strict: true,
        },
    ]
    return <>
    {title}
        <Menu defaultSelectedKeys={['/home']} onClick={onClick} style={{ width: "100%" }}>
          {routers.map((item: any) => {
            return (
              <Menu.Item key={item.path}>
                <span>{item.name}</span>
              </Menu.Item>
            );
          })}
        </Menu>
        <AtInput/>
    <Outlet/>
    </>
}

export default memo(Home)