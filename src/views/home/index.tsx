import React, { memo } from 'react'
import useDate from '../../hooks/useDate'
import { Menu, Switch, MenuProps, Layout } from "antd";
import { useNavigate,Outlet } from "react-router-dom";
import AtInput from '../../components/at-input';
import SeleTab from '../../components/Tbas'
import Styles from './style/index.module.less'
const { SubMenu } = Menu;
const {Sider} = Layout; //使用定义
const Home = () => {
    const { title } = useDate({title: '我是home'})
    const navigate = useNavigate();
    
    return <>
    {title}
        <AtInput/>
        <SeleTab/>
    <Outlet/>
    </>
}

export default memo(Home)