import React, { memo,useState } from 'react'
import useDate from '../../hooks/useDate'
import { Menu, Switch, MenuProps, Layout } from "antd";
import { useNavigate,Outlet } from "react-router-dom";
import AtInput from '../../components/at-input';
import SeleTab from '../../components/Tbas'
import Styles from './style/index.module.less'
import MenuList from '../MenuList'

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;



const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const Home = () => {
    const { title } = useDate({title: '我是home'})
    const navigate = useNavigate();
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const onOpenChange: MenuProps['onOpenChange'] = keys => {
      const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };
    return <>
    {/* {title}
        <AtInput/>
        <SeleTab/>
    <Outlet/> */}
        <Layout>
      <Sider> 
      <MenuList></MenuList>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content><Outlet/></Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    </>
}

export default memo(Home)