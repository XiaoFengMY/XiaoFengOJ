import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import menuItem from './config/menuConfig';
import Router from './routes';
import './styles/vendors.scss';
import UserCenterState from './components/UserCenter/UserCenterState';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const navigate = useNavigate();
  const handleChangePage: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };
  return (
    <Layout className="App">
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={menuItem}
          onClick={handleChangePage}
        />
        <UserCenterState />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Router />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by XiaoFeng</Footer>
    </Layout>
  );
};

export default App;
